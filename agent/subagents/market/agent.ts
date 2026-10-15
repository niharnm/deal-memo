import { defineAgent } from "eve";

export default defineAgent({
  description: "Size and characterize the market a startup operates in, with top-down and bottom-up estimates.",
  model: "anthropic/claude-sonnet-5.5",
});
