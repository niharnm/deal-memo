import { eveChannel } from "eve/channels/eve";
import { type AuthFn, localDev, placeholderAuth, vercelOidc } from "eve/channels/auth";
import { hasValidSession } from "../lib/demo-auth";

// Accepts browser requests that carry the session cookie set by the password page.
const demoSession: AuthFn<Request> = async (request) =>
  (await hasValidSession(request.headers.get("cookie")))
    ? { attributes: {}, authenticator: "demo-password", principalId: "demo", principalType: "user" }
    : null;

export default eveChannel({
  auth: [
    // Lets the eve TUI and your Vercel deployments reach the deployed agent.
    vercelOidc(),
    // Open on localhost for `eve dev` and the REPL; ignored in production.
    localDev(),
    demoSession,
    // Without DEMO_PASSWORD, production stays closed.
    placeholderAuth(),
  ],
});
