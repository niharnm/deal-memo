import { defineEval } from "eve/evals";

const SECTIONS = ["## Snapshot", "## Team", "## Market", "## Competition", "## Traction", "## Risks", "## Recommendation", "## Sources"];

export default [
  { company: "https://resend.com", name: "resend" },
  { company: "https://linear.app", name: "linear" },
].map(({ company, name }) =>
  defineEval({
    description: `Full memo for ${name}: all specialists run and every section is present.`,
    async test(t) {
      await t.send(`Write a memo on ${company}`);
      t.succeeded();
      for (const specialist of ["team", "market", "competitors", "traction"]) {
        t.calledSubagent(specialist);
      }
      t.loadedSkill("memo-template");
      for (const section of SECTIONS) t.messageIncludes(section);
      t.messageIncludes(/Take the meeting|Track|Pass/);
      t.messageIncludes(/https?:\/\//);
    },
  }),
);
