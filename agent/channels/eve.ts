import { eveChannel } from "eve/channels/eve";
import { httpBasic, localDev, placeholderAuth, vercelOidc } from "eve/channels/auth";

const username = process.env.ROUTE_AUTH_BASIC_USERNAME;
const password = process.env.ROUTE_AUTH_BASIC_PASSWORD;

export default eveChannel({
  auth: [
    // Lets the eve TUI and your Vercel deployments reach the deployed agent.
    vercelOidc(),
    // Open on localhost for `eve dev` and the REPL; ignored in production.
    localDev(),
    // Shared demo login. Without both env vars, production stays closed.
    ...(username && password ? [httpBasic({ username, password }, { realm: "Deal Memo" })] : []),
    placeholderAuth(),
  ],
});
