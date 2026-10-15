import { defineAgent } from "eve";

export default defineAgent({
  description: "Find a startup's public traction signals: funding rounds, investors, hiring, customers, launches, and press.",
  model: "anthropic/claude-sonnet-5.5",
});
