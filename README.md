# Deal Memo

Give it a startup and it writes an investment memo you could hand to a partner, with sources for every claim.

Paste a company URL, a name, or the text of a pitch deck. The lead analyst sends out as many research agents as the job needs, up to four, covering the team, the market, the competition, and traction in parallel. It then writes a structured memo: a scorecard, a competitor table, a funding history, risks with ways to de-risk them, questions for the founders, and a recommendation of take the meeting, track, or pass.

See [sample-memo-resend.md](./sample-memo-resend.md) for the output of a real run.

## How it works

```
                 ┌──────────────────────────┐
  URL / deck ──▶ │  Lead analyst (root)     │ ──▶ memo (memo-template skill)
                 └───┬─────┬──────┬─────┬───┘
                     │     │      │     │   as many as needed (max 4), in parallel
                   team  market  comp  traction
                     └─────┴──────┴─────┘
                    web_search + web_fetch, cited sources
```

Built on [eve](https://eve.dev), Vercel's framework for durable agents:

| Path | Purpose |
| --- | --- |
| `agent/instructions.md` | Lead analyst role, delegation flow, and sourcing rules |
| `agent/skills/memo-template.md` | Memo format and scoring guide |
| `agent/subagents/{team,market,competitors,traction}/` | Specialist researchers, each with its own instructions and web tools |
| `agent/channels/eve.ts` | HTTP channel and route auth |
| `app/` | Next.js web chat UI |
| `evals/` | Checks that a run uses one to four specialists and produces every memo section |

Models run through [Vercel AI Gateway](https://vercel.com/ai-gateway) (`anthropic/claude-sonnet-5.5`). Locally that uses the linked project's OIDC token, so no provider API keys are needed.

## Run locally

Requires Node.js 24 or later and a linked Vercel project (for AI Gateway access).

```bash
npm install
vercel link
vercel env pull .env.local
npm exec -- eve dev
```

`eve dev` opens a terminal chat with the agent. For the web UI, run `npm run dev` and open http://localhost:3000.

## Evals

```bash
npm run eval
```

Each eval does a full research run on a real company, so expect a few minutes and some model usage per case.

## Deploy

The repo is connected to Vercel, so pushes to `main` deploy to production. To deploy by hand:

```bash
npm exec -- eve deploy
```

### Access control

The production app sits behind a single shared password so only invited people can spend model credits. Visitors enter it on `/login`, which sets a signed session cookie that both the web app and the agent API check.

| Variable | Purpose |
| --- | --- |
| `DEMO_PASSWORD` | Shared password for the login page |

If it's missing, production rejects every request. Changing it signs everyone out.

## Limits

- Research covers public web sources only. Private metrics have to come from the founders.
- A full memo takes about five to seven minutes.
- Scores and the recommendation are model judgment, labeled as such in the memo, and are not investment advice.
