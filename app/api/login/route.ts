import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  demoPassword,
  safeEqual,
  sessionToken,
} from "@/agent/lib/demo-auth";
import { clientId, isLockedOut, recordFailure, recordSuccess } from "@/agent/lib/login-throttle";

export async function POST(request: Request) {
  const client = clientId(request);
  if (isLockedOut(client)) {
    return NextResponse.redirect(new URL("/login?error=locked", request.url), 303);
  }

  const form = await request.formData();
  const submitted = String(form.get("password") ?? "");
  const password = demoPassword();

  if (!password || !safeEqual(await sessionToken(submitted), await sessionToken(password))) {
    recordFailure(client);
    return NextResponse.redirect(new URL("/login?error=1", request.url), 303);
  }

  recordSuccess(client);

  const response = NextResponse.redirect(new URL("/", request.url), 303);
  response.cookies.set(SESSION_COOKIE, await sessionToken(password), {
    httpOnly: true,
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
