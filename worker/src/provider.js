/**
 * -----------------------------------------------------------------------------
 * AI PROVIDER ABSTRACTION LAYER
 * -----------------------------------------------------------------------------
 * All AI-provider-specific logic is isolated inside this single file.
 *
 * Current Provider: Google Gemini REST API (v1beta)
 * Default Free-Tier Model: "gemini-2.0-flash" (or "gemini-1.5-flash")
 *
 * 🔄 HOW TO SWAP TO ANOTHER PROVIDER (e.g. Anthropic Claude / OpenAI):
 * To change providers, you only need to edit this file:
 * 1. Change the API endpoint URL in `callGeminiApi`.
 * 2. Update the message format conversion (e.g., Claude uses { role, content }).
 * 3. Update the request headers (e.g., x-api-key, anthropic-version).
 * 4. Parse the new provider's response JSON into the standard return object:
 *    { reply: string, tokenUsage: object, finishReason: string, model: string }
 * No changes are required in the rest of the Worker or the frontend!
 * -----------------------------------------------------------------------------
 */

const DEFAULT_GEMINI_MODEL = 'gemini-flash-lite-latest';
const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

/**
 * Generates an assistant reply using the configured AI provider.
 *
 * @param {Array<{role: string, content: string}>} messages Recent chat history (last ~10 messages).
 * @param {string} systemPrompt The grounded system prompt with knowledge base.
 * @param {object} env Cloudflare Worker environment variables and secrets.
 * @returns {Promise<{reply: string, tokenUsage: object, finishReason: string, model: string}>}
 */
export async function generateReply(messages, systemPrompt, env) {
  let apiKey = env.GEMINI_API_KEY;

  if (!apiKey && env) {
    for (const [k, v] of Object.entries(env)) {
      if (typeof v === 'string' && (v.startsWith('AQ.') || v.startsWith('AIza'))) {
        apiKey = v;
        break;
      }
      if (typeof k === 'string' && (k.startsWith('AQ.') || k.startsWith('AIza'))) {
        apiKey = (typeof v === 'string' && v.length > 15) ? v : k;
        break;
      }
    }
  }

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in Worker secrets.');
  }

  const model = env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;

  return await callGeminiApi({
    apiKey,
    model,
    systemPrompt,
    messages,
  });
}

/**
 * Calls the official Google Gemini REST API generateContent endpoint.
 */
async function callGeminiApi({ apiKey, model, systemPrompt, messages }) {
  const url = `${GEMINI_API_BASE}/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

  // Map messages to Gemini format: roles must be 'user' or 'model'
  const contents = [];
  for (const msg of messages) {
    if (!msg || typeof msg.content !== 'string') continue;
    const text = msg.content.trim();
    if (!text) continue;

    const role = msg.role === 'assistant' ? 'model' : 'user';

    // Merge consecutive identical roles if any (Gemini expects alternating turns)
    if (contents.length > 0 && contents[contents.length - 1].role === role) {
      contents[contents.length - 1].parts[0].text += `\n\n${text}`;
    } else {
      contents.push({
        role,
        parts: [{ text }],
      });
    }
  }

  // Ensure conversation starts with a user turn
  if (contents.length === 0 || contents[0].role !== 'user') {
    contents.unshift({
      role: 'user',
      parts: [{ text: 'Hello, I would like to inquire about Quran classes at Nebras Academy.' }],
    });
  }

  const requestBody = {
    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },
    contents,
    generationConfig: {
      temperature: 0.35,
      maxOutputTokens: 600,
      topP: 0.95,
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorJson = null;
    try {
      errorJson = JSON.parse(errorText);
    } catch {
      // ignore
    }

    const errorMessage = errorJson?.error?.message || errorText || `HTTP ${response.status}`;
    const status = response.status;

    // Distinguish between rate limiting (429) vs other errors
    const err = new Error(`Gemini API error (${status}): ${errorMessage}`);
    err.status = status;
    err.isRateLimit = status === 429 || errorMessage.toLowerCase().includes('quota');
    throw err;
  }

  const data = await response.json();

  const candidate = data?.candidates?.[0];
  const finishReason = candidate?.finishReason || 'STOP';
  const replyText = candidate?.content?.parts?.[0]?.text?.trim();

  if (!replyText) {
    if (finishReason === 'SAFETY') {
      return {
        reply: "I cannot fulfill this request as it relates to topics outside our academy scope. How may I assist you with our Quran and Arabic courses?",
        finishReason,
        tokenUsage: data?.usageMetadata || null,
        model,
      };
    }
    throw new Error('No response text generated by Gemini model.');
  }

  return {
    reply: replyText,
    finishReason,
    tokenUsage: data?.usageMetadata || null,
    model,
  };
}
