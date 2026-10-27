/**
 * -----------------------------------------------------------------------------
 * NEBRAS ACADEMY - CHAT ASSISTANT CONFIGURATION
 * -----------------------------------------------------------------------------
 * Centralized settings for the frontend AI chat widget and trial registration.
 * -----------------------------------------------------------------------------
 */

export const CHAT_CONFIG = {
  // Cloudflare Worker endpoint URL.
  // In production, set VITE_CHAT_API_URL in your hosting environment (e.g. Vercel/Cloudflare Pages)
  // to your Worker's deployed URL: https://nebras-academy-assistant.<your-subdomain>.workers.dev/api/chat
  apiUrl: import.meta.env.VITE_CHAT_API_URL || 'https://nebras-academy-assistant.nebras-academy.workers.dev/api/chat',
  trialApiUrl: import.meta.env.VITE_TRIAL_API_URL || 'https://nebras-academy-assistant.nebras-academy.workers.dev/api/trial',

  // Academy WhatsApp contact
  whatsappNumber: '201146162847',
  whatsappUrl: 'https://wa.me/201146162847',

  // Chat limits
  maxUserMessageLength: 800,
  maxHistoryMessages: 10,

  // Quick reply suggested chips shown at conversation start
  quickReplies: [
    {
      id: 'pricing',
      label: 'Packages & pricing',
      message: 'What are your course packages and hourly pricing?',
    },
    {
      id: 'trial',
      label: 'How do trial lessons work?',
      message: 'How does the free trial lesson work and how do I book one?',
    },
    {
      id: 'teachers',
      label: 'Which teacher is right for me?',
      message: 'Can you tell me about your certified teachers and help me choose the right one?',
    },
    {
      id: 'contact',
      label: 'Contact the academy',
      message: 'How can I get in touch with the academy administration directly?',
    },
  ],

  // Welcome message from the assistant
  welcomeMessage:
    "Peace be upon you! Welcome to Nebras Academy. I'm here to help you explore our Quran and Arabic courses, certified Al-Azhar teachers, pricing packages, and how to book your free trial lesson. How may I help you today?",

  // Friendly rate-limit & error fallback
  fallbackMessage:
    "The assistant is busy right now. Please message us on WhatsApp and we'll reply soon.",
};
