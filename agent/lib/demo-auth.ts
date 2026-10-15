// Shared password gate for the web app and the agent channel. The cookie holds an
// HMAC derived from the password, never the password itself, so changing
// DEMO_PASSWORD signs everyone out.

export const SESSION_COOKIE = "deal_memo_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export function demoPassword(): string | undefined {
  return process.env.DEMO_PASSWORD || undefined;
}

export async function sessionToken(password: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("deal-memo-session"));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let index = 0; index < a.length; index += 1) diff |= a.charCodeAt(index) ^ b.charCodeAt(index);
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
