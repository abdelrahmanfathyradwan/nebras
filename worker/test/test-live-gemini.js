import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateReply } from '../src/provider.js';
import { buildSystemPrompt } from '../src/system-prompt.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const devVarsPath = path.resolve(__dirname, '../.dev.vars');

let apiKey = process.env.GEMINI_API_KEY;
if (!apiKey && fs.existsSync(devVarsPath)) {
  const content = fs.readFileSync(devVarsPath, 'utf8');
  const match = content.match(/GEMINI_API_KEY=([^\r\n]+)/);
  if (match) apiKey = match[1].trim();
}

async function testLiveKey() {
  if (!apiKey) {
    console.error('No GEMINI_API_KEY found in process.env or worker/.dev.vars');
    process.exit(1);
  }

  console.log('Testing live Gemini API call using key from .dev.vars...');
  const env = {
    GEMINI_API_KEY: apiKey,
    GEMINI_MODEL: 'gemini-flash-lite-latest',
  };

  const systemPrompt = buildSystemPrompt('/pricing');
  const messages = [
    { role: 'user', content: 'What is your hourly price for one-on-one Quran classes?' },
  ];

  try {
    const result = await generateReply(messages, systemPrompt, env);
    console.log('✅ Live Gemini API call SUCCEEDED!');
    console.log('Model:', result.model);
    console.log('Tokens:', result.tokenUsage);
    console.log('\n--- Assistant Reply ---');
    console.log(result.reply);
    console.log('------------------------\n');
  } catch (err) {
    console.error('❌ Live Gemini API call error:', err.message);
  }
}

testLiveKey();
