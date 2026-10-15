import { defineAgent } from "eve";

export default defineAgent({
  description: "Research a startup's founders and key team: backgrounds, prior companies and exits, and founder-market fit.",
  model: "anthropic/claude-sonnet-5.5",
});
