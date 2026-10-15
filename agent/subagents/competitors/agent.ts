import { defineAgent } from "eve";

export default defineAgent({
  description: "Map a startup's direct and adjacent competitors, their funding, and how the startup differentiates.",
  model: "anthropic/claude-sonnet-5.5",
});
