// Best-effort failed-login throttle. State lives in this server instance's memory
// (no database or paid service), so on serverless hosts each warm instance counts
// separately and a restart clears it. Pair it with a platform rate-limit rule for
// a hard limit.

const MAX_FAILURES = 5;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_TRACKED_CLIENTS = 5000;

type Entry = { failures: number; windowStart: number };

const attempts = new Map<string, Entry>();

export function clientId(request: Request): string {
  const headers = request.headers;
  return (
    headers.get("x-real-ip")?.trim() ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function current(client: string, now: number): Entry | undefined {
  const entry = attempts.get(client);
  if (entry && now - entry.windowStart >= WINDOW_MS) {
    attempts.delete(client);
    return undefined;
  }
  return entry;
}

export function isLockedOut(client: string, now = Date.now()): boolean {
  return (current(client, now)?.failures ?? 0) >= MAX_FAILURES;
}

export function recordFailure(client: string, now = Date.now()): void {
  const entry = current(client, now);
  if (entry) {
    entry.failures += 1;
    return;
  }
  if (attempts.size >= MAX_TRACKED_CLIENTS) {
    for (const [key, value] of attempts) {
      if (now - value.windowStart >= WINDOW_MS) attempts.delete(key);
    }
    // Still full: drop the oldest entry (Map keeps insertion order).
    if (attempts.size >= MAX_TRACKED_CLIENTS) {
      const oldest = attempts.keys().next().value;
      if (oldest !== undefined) attempts.delete(oldest);
    }
  }
  attempts.set(client, { failures: 1, windowStart: now });
}

export function recordSuccess(client: string): void {
  attempts.delete(client);
}
