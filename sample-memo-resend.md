# Resend Investment Memo

**One-liner:** Resend is a developer-first email API for sending and receiving transactional and marketing email. It also offers React Email, an open-source template library, and agent tooling (MCP server, CLI, inboxes). [1][2]
**Website:** [resend.com](https://resend.com) | **Stage:** Series A, $18M led by a16z in Dec 2024, and the company says it has been profitable since 2025 [3][4][27] | **HQ:** Not found in public sources. The team is fully remote, and the founders are based in São Paulo and Portland. [11][14][20]

## Snapshot

| Signal | Score (1 to 5) | Why |
| --- | --- | --- |
| Team | 4 | Strong developer-relations and product-engineering founders with a proven open-source distribution engine. None has prior email-infrastructure depth or an exit. [9][11][15] |
| Market | 3 | Real and growing, but the category is crowded with commoditized incumbents. Published market sizes vary about 7x. [31][34] |
| Product and differentiation | 4 | Best-in-class developer experience, React Email, and early agent-native tooling. The moat is brand and workflow, not infrastructure. [7][29] |
| Traction | 5 | The company reports 5x revenue growth in 2025, 3M users by Jun 2026, and profitability. Several metrics are inconsistent across sources (see Traction). [7][25][27] |
| Overall | 4 | Rare combination of growth, capital efficiency and developer mindshare. The questions are durability against SES and incumbents, and the quality of the paying-customer numbers. |

Scoring guide: 5 = top decile for the stage, 3 = typical, 1 = clear gap. Overall is a judgment, not an average.

## Team

**Founders** (Resend's About page lists three) [8]:
- **Zeno Rocha, Founder & CEO.**
  - Per his own bio, he was VP of Developer Experience at WorkOS (2021–22), Chief Product Officer of Liferay Cloud (2018–21), and Principal Developer Advocate at Liferay before that. [10]
  - He created the Dracula theme, which Finta says earned more than $400K in revenue. [15]
  - No prior exit was found. [10]
- **Bu Kinoshita, Co-founder & CTO.**
  - Per his YC profile, he was the first engineer at WorkOS, built its first MVP, and scaled it to 200+ B2B SaaS customers. [12]
  - He maintains React Email. [11][12]
- **Jonni Lundy, Co-founder & COO.**
  - He joined in Jan 2023 as Operations Manager, and Resend's site now lists him as co-founder. [6][14]
  - He previously worked with Zeno at Liferay, moving from developer advocacy into product and ops, and led the SOC 2 effort. [15]
  - Tracxn lists only two founders, so the co-founder title is Resend's own. [8]

**Other key people:**
- Zeh Fernandes, Founding Designer, previously Design Director at CodeSandbox. [16]
- Erin Levine, Chief of Staff, joined Sep 2025. [17]
- Two founding Account Executives were hired in Mar and Apr 2026, a shift for a company that was previously pure product-led growth. [14][22]
- No VP Engineering, CFO or CRO was found in public sources.

**Team size:** Resend's Humans page says 53 people. [19] Resend's own milestone posts say 30 in Jan 2026 and 43 in Jun 2026. [7][26] The YC page shows 45. [12] I rely on the company figures.

**Judgment:** Founder-market fit is strong. Both founders felt the pain of email and developer tooling at WorkOS and Liferay, and React Email gave them a free distribution channel before the API existed. The gaps are deliverability and abuse expertise at scale, which Resend is buying through investors (ex-Mailchimp CTO Eric Muntz) and a stated $3M trust-and-safety commitment. [3][30]

## Market

**Definition:** Software teams that need to send and receive application email by API. That covers transactional email (receipts, password resets), product and lifecycle marketing email, and now agent inboxes. [2]

**Top-down:** Syndicated estimates for transactional email range widely, and all use opaque methods.

| Source | Estimate |
| --- | --- |
| [Insight Partners](https://www.theinsightpartners.com/reports/transactional-email-solution-market) | $662M (2025), growing to $1.35B by 2034 [31] |
| [Valuates/QY](https://reports.valuates.com/market-reports/QYRE-Auto-32U3993/global-transactional-email-software) | $496M (2023), growing to $982M by 2030 [32] |
| [Growth Market Reports](https://growthmarketreports.com/report/transactional-email-api-market) | $4.67B (2024), growing to $13.2B by 2033 [56] |

Email marketing software is a further $1.7–2B (2024–25) per Fortune Business Insights and Research and Markets, and it overlaps with transactional email. [56] My reading is that the relevant pool is **roughly $0.7–4.7B today**.

**Bottom-up (my assumptions, not sourced):**
- SlashData counts 48.4M developers globally. [33]
- Mid case: 48.4M × 10% on teams that buy a paid email API = 4.84M. Dividing by 5 developers per account gives about 968K paying accounts.
- At a $600 blended annual contract value, that is about **$580M**. The low case is about $120M and the high case about $1.8B.
- Resend's own pricing runs from $20/mo for 50K transactional emails up to $1,150/mo for 2.5M, plus contact-based marketing tiers. [2]
- Cross-check: 100K paying customers × $600 is about $60M ARR. This is my arithmetic. Resend has not disclosed ARR. A secondary source claims $25M ARR at Dec 2025, which I could not confirm. [38]

**Why now:**
- **Agents need email.**
  - Resend says agents are its fastest-growing customer segment. [23]
  - Weekly npm downloads of the `resend` package rose from 1.4M to 6.8M in six months, and the npm API showed 13.2M for the week of Oct 6–12, 2026. [7][28]
  - AgentMail raised a $6M seed in Mar 2026 to build email for AI agents. [36]
- **Incumbents created switching moments.** SendGrid retired its free plan in May 2025. [35]
- **Tighter sender rules.** Gmail and Yahoo now require SPF/DKIM/DMARC and low spam rates for bulk senders, which favors managed senders. [37]

## Competition

| Competitor | Funding | Positioning | How Resend differs |
| --- | --- | --- | --- |
| Twilio SendGrid | Acquired by Twilio for about $3B in stock (2019) [45] | Incumbent email API at scale. Free plan replaced by a 60-day trial. [42] | Permanent free tier and focused developer experience |
| Postmark (ActiveCampaign) | Acquired in 2022, price not found in public sources [47] | Reliable transactional email. Free tier is 100 emails/mo. [43] | Free tier of 3,000/mo, inbound included, React Email |
| Mailgun (Sinch/Pathwire) | Pathwire acquired for about $1.9B enterprise value (2021) [46] | Developer email API with deliverability suite. $35 for 50K emails. [44] | $20 for 50K, modern TypeScript workflow |
| Amazon SES | Part of AWS | Raw sending at $0.10 per 1,000 emails. [34] | Bundles dashboard, logs, templates, webhooks and automations. About 4.6–9x SES's per-email price. [2][34] |
| Bird (SparkPost) | MessageBird bought SparkPost for $600M (2021) [57] | Multichannel (email, SMS, WhatsApp). Cheaper per message at the highest tiers. [52] | Email-only and developer-led |
| Loops | $3.2M seed, 2022 [58] | Email for SaaS lifecycle, priced by contacts. [48] | Infrastructure-first. Resend added Broadcasts and Automations to close the gap. [2] |
| Customer.io / Brevo | Brevo raised €500M (Dec 2025) [50]. Customer.io lists $95.8M per PitchBook. [53] | Marketing automation and CRM suites | Simpler and cheaper for pure sending. They are deeper on marketing. |
| AgentMail | $6M seed (Mar 2026) [36] | Inboxes built for AI agents. Argues "email APIs send mail; agents need an inbox." [59] | Resend now offers inboxes with API and MCP access, with a much larger base [2] |
| Notification layers (Knock, Courier, Novu) | Knock $18M total [51] | Orchestrate email, SMS, push and in-app | Resend is mostly the delivery layer beneath them |

**Defensibility (judgment):** The moat is distribution and brand, built on React Email and developer love, not infrastructure. SES prices out Resend at volume, and Resend's CEO frames incumbent consolidation as the opening. [23] If Resend keeps owning the agent and AI-native developer workflow, it can keep a premium. If email stays a commodity, pricing power will be pressured.

## Traction

**Funding history**

| Round | Date | Amount | Lead |
| --- | --- | --- | --- |
| Accelerator (YC W23) | Winter 2023 | $500K per PitchBook (third-party) [41] | Y Combinator |
| Seed | Announced Jul 2023 (the handbook dates it Apr 2023) [5][6] | $3M | SV Angel and YC named. Angels include Dylan Field, Guillermo Rauch and Paul Copplestone. [5] |
| Series A | Dec 4, 2024 | $18M | Andreessen Horowitz [3][4] |

- Total raised is about $21.5M. No later round or company-confirmed valuation was found. Airframe's $109M valuation estimate is unverified. [39]

**Other public signals** (company-reported unless noted):
- **Users:**
  - 249K at the start of 2025 and 1M by year end. [25]
  - 3M on Jun 3, 2026. [7]
  - The CEO cited about 4M in Sep 2026. [23]
- **Revenue and profitability:**
  - Resend says revenue grew 5x in 2025 and that it has been profitable since 2025. [25][27]
  - Absolute ARR is **not found in public sources**.
- **Paying customers.** This metric is inconsistent:

  | Date | Paying customers | Source |
  | --- | --- | --- |
  | Oct 2025 | 16K | [22] |
  | Jan 2026 | 30.5K | [26] |
  | Jun 2026 | 92K | [40] (third-party) |
  | Sep 2026 | about 100K (podcast intro) | [23] |

  The jump from 30K to about 100K in eight months needs verification.
- **Volume:** Tens of millions of emails a day (Dec 2025). [25]
- **Open source:** react-email has 19.8k GitHub stars [29], and about 5.5M weekly npm downloads of `react-email` and 7.6M of `@react-email/components`. [61]
- **Hiring:** 13 open roles, all remote. They are concentrated in backend, MTA, platform, security and trust-and-safety engineering, plus one Technical Account Executive. [20]
- **Customers:** 44 case studies, including Replit, Raycast, Gumroad, Tailwind, Mintlify, MrBeast and Lenny's Newsletter. [21] Named Fortune 500 logos were not found in public sources.
- **Launches and M&A:**
  - Acquired Mergent (Apr 2025) and Briefer (Aug 2025). [6][18]
  - Launched a CLI with 53 commands, Automations, a remote MCP server and agent skills during 2026. [6][7]
  - Shut down the new.email AI email builder (reported Aug 2026). [22]
- **Press:** No major-outlet coverage of the Series A was found. Podcast and interview coverage exists. [23][24]

## Bull case

- **Developer mindshare in the AI-native cohort.** Resend is the default email API recommended to and used by AI-native apps and coding agents, and its npm downloads are growing quickly. [7][24][28]
- **Capital-efficient compounding.** The company says it has been profitable since 2025 with only about $21.5M raised, which gives it room to expand into marketing, inbound and agent inboxes. [3][27]
- **Independent in a consolidated market.** SendGrid, Postmark, Mailgun and SparkPost all sit inside larger parents. Resend is the venture-backed independent with a modern stack. [23][45][46][47][57]

## Risks

- **Commoditization and price pressure.** SES costs $0.10 per 1,000 emails against Resend's $0.46–0.90, and AI coding tools make switching easier. [2][34] *De-risk:* net revenue retention by cohort, and the share of revenue above 1M emails/mo.
- **Deliverability and abuse.** Self-serve growth, free tiers and agents that sign up on their own raise shared-IP reputation risk (my inference). Sender rules are tightening. [37] *De-risk:* spam and complaint rates, IP reputation data, and the results of the $3M trust-and-safety commitment. [30]
- **Metric quality.** Paying-customer counts range from 16K to 100K within a year, and the 100K figure comes from a podcast intro. The $25M ARR figure is unconfirmed. [22][23][26][38] *De-risk:* get a revenue and customer export under diligence.
- **Focus dilution.** Resend has made two acquisitions, shut down new.email, and is moving into marketing, automations and inboxes, which puts it against Customer.io, Brevo and Loops. [6][18][22] *De-risk:* ask which bets are core and review the product roadmap.
- **Thin enterprise motion.** Resend hired its first sales staff only in 2026 and has no verified enterprise logos. [14][22] *De-risk:* check early enterprise pipeline, win rates and security reviews, including SOC 2 status.

## Questions for the founders

1. What are ARR, net revenue retention and gross margin today, and how do you define a "paying customer"? Why did the count move from about 30K to about 100K in 2026?
2. What share of revenue and email volume comes from agent-driven or AI-native signups, and what is their retention versus the rest of the base?
3. How do you keep pricing power against SES, and what share of volume is at risk from customers who build on SES themselves?
4. What are your abuse, complaint and IP-reputation metrics, and what has the $3M trust-and-safety commitment delivered?
5. Is the company raising a Series B, and what would the money fund (enterprise sales, marketing products, M&A)?

## Recommendation

**Take the meeting.** *(Judgment.)* Resend combines rare developer mindshare, reported 5x growth and profitability on modest capital, and sits at the center of the agents-need-email trend. Before pricing anything, diligence must resolve the paying-customer and ARR figures, the durability of pricing against SES, and deliverability and abuse risk.

## Sources

1. https://resend.com
2. https://resend.com/pricing
3. https://www.resend.com/blog/series-a
4. https://a16z.com/announcement/investing-in-resend/
5. https://resend.com/blog/resend-raises-3m-seed-round
6. https://www.resend.com/handbook/company/how-we-got-here
7. https://resend.com/blog/3-million-users
8. https://resend.com/about
9. https://resend.com/humans/zeno-rocha
10. https://zenorocha.com/about
11. https://resend.com/humans/bu-kinoshita
12. https://www.ycombinator.com/companies/resend
13. https://www.linkedin.com/posts/bkinoshita_resend-email-for-developers-activity-7016439316742565888-xpm7
14. https://resend.com/humans/jonni-lundy
15. https://www.finta.com/founders/resend
16. https://resend.com/blog/welcoming-zeh-fernandes
17. https://resend.com/blog/welcoming-erin-levine
18. https://resend.com/blog/resend-acquires-mergent
19. https://resend.com/humans
20. https://resend.com/careers
21. https://resend.com/customers
22. https://www.systemaic.com/teardowns/resend (third-party)
23. https://www.startupable.io/p/resend-ceo-why-great-startups-enter
24. https://startupeable.com/en/resend-zeno-rocha/
25. https://www.linkedin.com/posts/resend_in-2025-5xd-revenue-249k-1m-users-activity-7412146278580772864--VCb
26. https://www.linkedin.com/posts/zenorocha_3-years-ago-resend-was-incorporated-today-activity-7422655528134340608-NK-A
27. https://www.linkedin.com/posts/zenorocha_resend-is-profitable-its-been-the-case-activity-7443302076949921792-xEe5
28. https://api.npmjs.org/downloads/point/last-week/resend
29. https://github.com/resend/react-email
30. https://www.linkedin.com/posts/zenorocha_were-committing-3m-to-build-the-safest-activity-7379896910767222784-RDpR
31. https://www.theinsightpartners.com/reports/transactional-email-solution-market
32. https://reports.valuates.com/market-reports/QYRE-Auto-32U3993/global-transactional-email-software
33. https://www.slashdata.co/research/developer-population
34. https://aws.amazon.com/ses/pricing/
35. https://www.twilio.com/en-us/changelog/sendgrid-free-plan
36. https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/
37. https://support.google.com/mail/answer/81126
38. https://startupfounderstories.com/stories/zeno-rocha-resend-email-api (third-party, unconfirmed)
39. https://www.airframe.ai/product/resend-com/co-diligence (third-party)
40. https://www.altis.vc/research/company/resend (third-party)
41. https://pitchbook.com/profiles/company/523161-01 (third-party)
42. https://www.twilio.com/en-us/products/email-api/pricing
43. https://postmarkapp.com/pricing
44. https://www.mailgun.com/pricing/
45. https://www.goodwinlaw.com/en/news-and-events/news/2019/02/02_13_19-twilio-to-acquire-sendgrid
46. https://sinch.com/news/sinch-acquires-mailgun-and-mailjet/
47. https://www.activecampaign.com/news/press-releases/activecampaign-acquires-postmark
48. https://loops.so/pricing
50. https://techcrunch.com/2025/12/03/new-unicorn-brevo-raises-583m-to-challenge-crm-giants/
51. https://www.businesswire.com/news/home/20240215971006/en/Notification-Infrastructure-Provider-Knock-Announces-%2412-Million-Series-A-Led-by-Craft-Ventures
52. https://bird.com/en-us/pricing
53. https://pitchbook.com/profiles/company/63916-48 (third-party)
56. https://growthmarketreports.com/report/transactional-email-api-market and https://www.researchandmarkets.com/report/email-marketing-software
57. https://techcrunch.com/2021/04/28/messagebird-acquires-sparkpost-for-600m-using-800m-series-c-extension/
58. https://technical.ly/startups/email-tech-startup-loops-raised-3-2m-in-early-stage-funding/
59. https://www.agentmail.to/blog/info/blog/solution-recommendation/email-apis-send-mail-agents-need-an-inbox
61. https://api.npmjs.org/downloads/point/last-week/react-email and https://api.npmjs.org/downloads/point/last-week/@react-email/components