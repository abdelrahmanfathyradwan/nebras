/**
 * -----------------------------------------------------------------------------
 * NEBRAS ACADEMY - CLOUDFLARE WORKER BACKEND
 * -----------------------------------------------------------------------------
 * Endpoints:
 * - POST /api/chat   : Handles AI chat assistant messages via Gemini API
 * - POST /api/trial  : Handles "Book a Free Trial" lead submissions
 * - GET  /health     : Health check endpoint
 * -----------------------------------------------------------------------------
 */

import { buildSystemPrompt } from './system-prompt.js';
import { generateReply } from './provider.js';
import { checkRateLimit } from './rate-limiter.js';

const DEFAULT_WHATSAPP = '201146162847';
const MAX_MESSAGES_COUNT = 10;
const MAX_MESSAGE_LENGTH = 800;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCorsPreflight(origin, env);
    }

    const corsHeaders = getCorsHeaders(origin, env);

    try {
      // Route dispatch
      if (url.pathname === '/api/chat' && request.method === 'POST') {
        return await handleChatRequest(request, env, corsHeaders);
      }

      if (url.pathname === '/api/trial' && request.method === 'POST') {
        return await handleTrialSubmission(request, env, corsHeaders);
      }

      if (url.pathname === '/health' || url.pathname === '/') {
        return new Response(
          JSON.stringify({
            status: 'ok',
            service: 'nebras-academy-assistant',
            timestamp: new Date().toISOString(),
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          }
        );
      }

      return new Response(JSON.stringify({ error: 'not_found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    } catch (err) {
      // Minimal error logging without logging private chat content
      console.error('[Worker Error]', {
        path: url.pathname,
        message: err.message,
        status: err.status || 500,
        timestamp: new Date().toISOString(),
      });

      const isRateLimit = err.isRateLimit || err.status === 429;
      const status = isRateLimit ? 429 : 500;
      const whatsappNumber = env.WHATSAPP_NUMBER || DEFAULT_WHATSAPP;

      return new Response(
        JSON.stringify({
          error: isRateLimit ? 'rate_limit_exceeded' : 'internal_error',
          message:
            "The assistant is busy right now. Please message us on WhatsApp and we'll reply soon.",
          whatsappUrl: `https://wa.me/${whatsappNumber}`,
        }),
        {
          status,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }
  },
};

/* ------------------------------------------------------------------ */
/* Chat Handler                                                       */
/* ------------------------------------------------------------------ */
async function handleChatRequest(request, env, corsHeaders) {
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1';

  // 1. Rate Limiting Check
  const rateLimit = await checkRateLimit(clientIp, env);
  if (!rateLimit.allowed) {
    const whatsappNumber = env.WHATSAPP_NUMBER || DEFAULT_WHATSAPP;
    return new Response(
      JSON.stringify({
        error: 'rate_limit_exceeded',
        reason: rateLimit.reason,
        message:
          "The assistant is busy right now. Please message us on WhatsApp and we'll reply soon.",
        whatsappUrl: `https://wa.me/${whatsappNumber}`,
        retryAfter: rateLimit.retryAfter || 180,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(rateLimit.retryAfter || 180),
          ...corsHeaders,
        },
      }
    );
  }

  // 2. Parse & Validate Payload
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'invalid_json', message: 'Request body must be valid JSON.' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  // Optional Turnstile Verification
  if (env.ENABLE_TURNSTILE === 'true') {
    const turnstileToken = body.turnstileToken;
    const isValid = await verifyTurnstile(turnstileToken, clientIp, env.TURNSTILE_SECRET);
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'turnstile_verification_failed' }),
        { status: 403, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
  }

  const { messages, currentPath = '/' } = body;

  // Strict Validation:
  // - Array of messages
  // - Length 1 to 10
  // - Roles strictly 'user' or 'assistant'
  // - User messages max 800 characters
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES_COUNT) {
    return new Response(
      JSON.stringify({
        error: 'invalid_messages',
        message: `Messages must be an array of 1 to ${MAX_MESSAGES_COUNT} items.`,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    if (!msg || typeof msg !== 'object') {
      return new Response(
        JSON.stringify({ error: 'invalid_message_structure' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (msg.role !== 'user' && msg.role !== 'assistant') {
      return new Response(
        JSON.stringify({ error: 'invalid_role', message: 'Message role must be either "user" or "assistant".' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (typeof msg.content !== 'string' || msg.content.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'empty_content', message: 'Message content cannot be empty.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (msg.role === 'user' && msg.content.length > MAX_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({
          error: 'message_too_long',
          message: `User message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters.`,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
  }

  // 3. Build Grounded System Prompt
  const sanitizedPath = typeof currentPath === 'string' ? currentPath.slice(0, 100) : '/';
  const systemPrompt = buildSystemPrompt(sanitizedPath);

  // 4. Generate AI Reply
  const startTime = Date.now();
  const result = await generateReply(messages, systemPrompt, env);
  const durationMs = Date.now() - startTime;

  // 5. Minimal privacy-compliant metadata logging (NO CHAT CONTENT LOGGED)
  console.log('[Chat Success]', {
    status: 200,
    model: result.model,
    tokens: result.tokenUsage?.totalTokenCount || 'n/a',
    durationMs,
    timestamp: new Date().toISOString(),
  });

  return new Response(
    JSON.stringify({
      reply: result.reply,
      finishReason: result.finishReason,
      model: result.model,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    }
  );
}

/* ------------------------------------------------------------------ */
/* Free Trial Lead Submission Handler                                 */
/* ------------------------------------------------------------------ */
async function handleTrialSubmission(request, env, corsHeaders) {
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1';

  // Rate limiting for lead submissions
  const rateLimit = await checkRateLimit(`lead:${clientIp}`, env);
  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({
        error: 'rate_limit_exceeded',
        message: 'Too many requests. Please wait a few minutes or contact us directly on WhatsApp.',
      }),
      { status: 429, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'invalid_json' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  // Honeypot spam defense: website_hp must be empty
  if (data.website_hp && data.website_hp.trim() !== '') {
    // Silently return success to deceive automated bots
    return new Response(
      JSON.stringify({ success: true, message: 'Request received.' }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  // Strict Validation
  const { parentName, email, whatsapp, studentAge, preferredTime, notes, consent } = data;

  if (!parentName || typeof parentName !== 'string' || parentName.trim().length < 2 || parentName.length > 80) {
    return new Response(
      JSON.stringify({ error: 'invalid_name', message: 'Please provide a valid parent or guardian name (2-80 characters).' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return new Response(
      JSON.stringify({ error: 'invalid_email', message: 'Please provide a valid email address.' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.trim().length < 6 || whatsapp.length > 25) {
    return new Response(
      JSON.stringify({ error: 'invalid_whatsapp', message: 'Please provide a valid WhatsApp number including country code.' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  if (!consent) {
    return new Response(
      JSON.stringify({ error: 'consent_required', message: 'You must agree to the privacy policy to submit a trial request.' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  // Forward to configurable webhook (Google Apps Script / CRM) if configured
  if (env.LEADS_WEBHOOK_URL) {
    try {
      await fetch(env.LEADS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: parentName.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          studentAge: (studentAge || '').trim(),
          preferredTime: (preferredTime || '').trim(),
          notes: (notes || '').trim().slice(0, 500),
          submittedAt: new Date().toISOString(),
          source: 'Nebras Academy Website Trial Form',
        }),
      });
    } catch (webhookErr) {
      console.error('[Leads Webhook Forwarding Error]', webhookErr.message);
    }
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Thank you! Your free trial request has been received. Our team will contact you on WhatsApp shortly.',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
  );
}

/* ------------------------------------------------------------------ */
/* CORS Utilities                                                     */
/* ------------------------------------------------------------------ */
function getCorsHeaders(origin, env) {
  const allowed = env.ALLOWED_ORIGINS
    ? env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
    : ['*'];

  const isAllowed = allowed.includes('*') || allowed.includes(origin);
  const allowOrigin = isAllowed ? origin || '*' : allowed[0] || '*';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400',
  };
}

function handleCorsPreflight(origin, env) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(origin, env),
  });
}

/* ------------------------------------------------------------------ */
/* Turnstile Verification Utility                                     */
/* ------------------------------------------------------------------ */
async function verifyTurnstile(token, ip, secret) {
  if (!token || !secret) return false;
  try {
    const formData = new FormData();
    formData.append('secret', secret);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    return Boolean(result.success);
  } catch {
    return false;
  }
}
