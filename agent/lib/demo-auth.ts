// Shared password gate for the web app and the agent channel. The cookie holds an
// HMAC derived from the password, never the password itself, so changing
// DEMO_PASSWORD signs everyone out.

export const SESSION_COOKIE = "deal_memo_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export function demoPassword(): string | undefined {
  return process.env.DEMO_PASSWORD || undefined;
}

// DEMO_SESSION_SECRET (server-only, random) is mixed into the cookie derivation so a
// leaked or guessed password alone cannot forge a cookie. Rotating it, or bumping
// DEMO_SESSION_VERSION, revokes every session without changing the password.
// Both are optional; unset values keep the previous password-only derivation.
export async function sessionToken(password: string): Promise<string> {
  const secret = process.env.DEMO_SESSION_SECRET ?? "";
  const version = process.env.DEMO_SESSION_VERSION ?? "";
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret ? `${secret}\u0000${password}` : password),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const message = version ? `deal-memo-session:${version}` : "deal-memo-session";
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

// Constant-time comparison: always walks the longer input and folds the length
// difference into the result instead of returning early.
export function safeEqual(a: string, b: string): boolean {
  let diff = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index += 1) {
    diff |= (a.charCodeAt(index) || 0) ^ (b.charCodeAt(index) || 0);
  }
  return diff === 0;
}

function readCookie(cookieHeader: string | null, name: string): string | undefined {
  for (const part of cookieHeader?.split(";") ?? []) {
    const [key, ...value] = part.trim().split("=");
    if (key === name) return value.join("=");
  }
  return undefined;
}

export async function hasValidSession(cookieHeader: string | null): Promise<boolean> {
  const password = demoPassword();
  const cookie = readCookie(cookieHeader, SESSION_COOKIE);
  if (!password || !cookie) return false;
  return safeEqual(cookie, await sessionToken(password));
}
