import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { demoPassword, hasValidSession } from "./agent/lib/demo-auth";

const PUBLIC_PATHS = ["/login", "/api/login", "/icon.svg", "/apple-icon"];

// Sends visitors without a valid session cookie to the password page. Local dev
// stays open when DEMO_PASSWORD is unset; production fails closed.
async function isAuthorized(request: NextRequest): Promise<boolean> {
  if (!demoPassword()) return process.env.NODE_ENV !== "production";
  return hasValidSession(request.headers.get("cookie"));
}

export async function proxy(request: NextRequest) {
  const routerHost = process.env.VERCEL_URL;
  const forwardedHost = request.headers.get("x-forwarded-host");
  if (process.env.__VERCEL_DEV_RUNNING === "1" && routerHost && forwardedHost !== routerHost) {
    const target = request.nextUrl.clone();
    target.protocol = "http:";
    target.host = routerHost;
    return NextResponse.redirect(target);
  }

  const { pathname } = request.nextUrl;
  // Agent routes enforce the same cookie through the channel auth in agent/channels/eve.ts.
  if (pathname.startsWith("/_next/") || pathname.startsWith("/eve/") || PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (!(await isAuthorized(request))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
