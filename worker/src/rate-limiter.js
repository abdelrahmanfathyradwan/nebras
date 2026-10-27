/**
 * -----------------------------------------------------------------------------
 * RATE LIMITER MODULE
 * -----------------------------------------------------------------------------
 * Enforces:
 * 1. Per-visitor / IP rate limit: max 15 requests per 10 minutes.
 * 2. Global daily safety cap: max 1,000 requests per 24 hours (well below Gemini's
 *    free-tier daily cap of 1,500 requests/day).
 *
 * Cloudflare Free-Tier Mechanism Choice:
 * - Primary storage: Workers KV (`env.RATE_LIMIT_KV`), if bound in wrangler.toml.
 *   Free tier provides 100,000 reads and 1,000 writes daily.
 * - Zero-config fallback: In-memory sliding window cache per isolate. This ensures
 *   the rate limiter operates immediately without requiring manual KV binding setup,
 *   and protects against KV write quota exhaustion.
 * -----------------------------------------------------------------------------
 */

const IP_WINDOW_SECONDS = 600;       // 10 minutes
const IP_MAX_REQUESTS = 15;          // 15 messages per 10 minutes
const GLOBAL_WINDOW_SECONDS = 86400; // 24 hours
const GLOBAL_DAILY_CAP = 1000;       // 1,000 requests per 24 hours

// In-memory fallback caches
const memoryIpMap = new Map();
let globalDailyCount = { count: 0, resetAt: Date.now() + GLOBAL_WINDOW_SECONDS * 1000 };

/**
 * Checks and increments rate limits for an incoming request.
 *
 * @param {string} ip Visitor IP address or identifier.
 * @param {object} env Cloudflare Worker environment.
 * @returns {Promise<{allowed: boolean, reason?: string, retryAfter?: number}>}
 */
export async function checkRateLimit(ip, env) {
  const now = Date.now();
  const sanitizedIp = (ip || 'anonymous').replace(/[^a-zA-Z0-9.:_-]/g, '').slice(0, 45);

  // 1. Check Global Daily Cap
  const globalCheck = await checkGlobalCap(env, now);
  if (!globalCheck.allowed) {
    return globalCheck;
  }

  // 2. Check Per-IP Rate Limit
  const ipCheck = await checkVisitorIpLimit(sanitizedIp, env, now);
  if (!ipCheck.allowed) {
    return ipCheck;
  }

  return { allowed: true };
}

/**
 * Checks global daily request count.
 */
async function checkGlobalCap(env, now) {
  if (env.RATE_LIMIT_KV) {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const key = `global:cap:${today}`;
      const countStr = await env.RATE_LIMIT_KV.get(key);
      const current = countStr ? parseInt(countStr, 10) : 0;

      if (current >= GLOBAL_DAILY_CAP) {
        return {
          allowed: false,
          reason: 'global_cap',
          retryAfter: 3600, // Check back next hour
        };
      }

      // Increment KV count (TTL: 26 hours)
      await env.RATE_LIMIT_KV.put(key, String(current + 1), { expirationTtl: 93600 });
      return { allowed: true };
    } catch (e) {
      // Fallback to in-memory if KV write fails
    }
  }

  // In-memory global cap fallback
  if (now > globalDailyCount.resetAt) {
    globalDailyCount = { count: 0, resetAt: now + GLOBAL_WINDOW_SECONDS * 1000 };
  }

  if (globalDailyCount.count >= GLOBAL_DAILY_CAP) {
    const retryAfter = Math.max(1, Math.ceil((globalDailyCount.resetAt - now) / 1000));
    return {
      allowed: false,
      reason: 'global_cap',
      retryAfter,
    };
  }

  globalDailyCount.count += 1;
  return { allowed: true };
}

/**
 * Checks per-visitor IP limit (15 requests / 10 minutes).
 */
async function checkVisitorIpLimit(ip, env, now) {
  if (env.RATE_LIMIT_KV) {
    try {
      const key = `ip:${ip}`;
      const existing = await env.RATE_LIMIT_KV.get(key, { type: 'json' });

      if (existing) {
        if (existing.count >= IP_MAX_REQUESTS) {
          const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
          return {
            allowed: false,
            reason: 'ip_limit',
            retryAfter,
          };
        }

        // Increment count within window
        const updated = {
          count: existing.count + 1,
          resetAt: existing.resetAt,
        };
        const ttl = Math.max(60, Math.ceil((existing.resetAt - now) / 1000));
        await env.RATE_LIMIT_KV.put(key, JSON.stringify(updated), { expirationTtl: ttl });
        return { allowed: true };
      } else {
        // First request in window
        const entry = {
          count: 1,
          resetAt: now + IP_WINDOW_SECONDS * 1000,
        };
        await env.RATE_LIMIT_KV.put(key, JSON.stringify(entry), { expirationTtl: IP_WINDOW_SECONDS });
        return { allowed: true };
      }
    } catch (e) {
      // Fallback to in-memory if KV errors
    }
  }

  // In-memory sliding window
  cleanExpiredMemoryEntries(now);

  const entry = memoryIpMap.get(ip);
  if (entry) {
    if (entry.resetAt <= now) {
      memoryIpMap.set(ip, { count: 1, resetAt: now + IP_WINDOW_SECONDS * 1000 });
      return { allowed: true };
    }

    if (entry.count >= IP_MAX_REQUESTS) {
      const retryAfter = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
      return {
        allowed: false,
        reason: 'ip_limit',
        retryAfter,
      };
    }

    entry.count += 1;
    return { allowed: true };
  } else {
    memoryIpMap.set(ip, { count: 1, resetAt: now + IP_WINDOW_SECONDS * 1000 });
    return { allowed: true };
  }
}

function cleanExpiredMemoryEntries(now) {
  if (memoryIpMap.size > 2000) {
    for (const [k, v] of memoryIpMap.entries()) {
      if (v.resetAt <= now) memoryIpMap.delete(k);
    }
  }
}
