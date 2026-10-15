import { defineAgent } from "eve";

export default defineAgent({
  model: "anthropic/claude-sonnet-5.5",
  // Research goes to the declared specialists, not to copies of this agent.
  tool: false,
});
