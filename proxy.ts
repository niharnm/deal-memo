import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const REALM = "Deal Memo";

// Gates the whole app behind the same shared login the agent channel checks, so the
// browser prompts once on page load and reuses the credential for agent requests.
function isAuthorized(request: NextRequest): boolean {
  const username = process.env.ROUTE_AUTH_BASIC_USERNAME;
  const password = process.env.ROUTE_AUTH_BASIC_PASSWORD;
  if (!username || !password) return process.env.NODE_ENV !== "production";

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;
  const decoded = atob(header.slice("Basic ".length));
  const separator = decoded.indexOf(":");
  return (
    separator !== -1 &&
    decoded.slice(0, separator) === username &&
    decoded.slice(separator + 1) === password
  );
}

export function proxy(request: NextRequest) {
  const routerHost = process.env.VERCEL_URL;
  const forwardedHost = request.headers.get("x-forwarded-host");
  if (process.env.__VERCEL_DEV_RUNNING === "1" && routerHost && forwardedHost !== routerHost) {
    const target = request.nextUrl.clone();
    target.protocol = "http:";
    target.host = routerHost;
    return NextResponse.redirect(target);
  }

  if (!isAuthorized(request)) {
    return new NextResponse("Authentication required", {
      headers: { "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"` },
      status: 401,
    });
  }
  return NextResponse.next();
}
