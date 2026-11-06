# PCP Project 3 — Contingency Report Assembly Pack
**ISM 4300 | Working draft | November 6, 2026 | Submission due November 30, 2026**

> **Status:** Independent working materials for potential integration. This directory is outside the Netlify `site/` publish root and is NOT part of the public-facing website. **However the repository itself is public, so this Git branch and its content are publicly readable on GitHub.** Do not store confidential information or claim this branch is access-restricted. No pull request has been created.

## How to assemble a final report quickly
1. Use [01-final-report-draft.md](01-final-report-draft.md) as the narrative spine. This includes the executive recommendation, case analysis, selected products, costs, migration sequence, network/communications recommendations, risks and conclusion.
2. Insert the [02-cost-model-and-sources.md](02-cost-model-and-sources.md) tables in the business-software section and update vendor prices/assumptions before submission.
3. Insert the implementation Gantt from [03-implementation-gantt.md](03-implementation-gantt.md) (Mermaid source plus dated dependency table). Render to an image or recreate in Excel/Project for the final submission. The professor specifically requires a Gantt.
4. Add [04-operating-model-migration-and-controls.md](04-operating-model-migration-and-controls.md) as appendices or expand its process, RACI, migration, acceptance, and risk material into the report.
5. Copy or capture already merged primary-source materials:
   - [Website storyboard](../storyboard/website-storyboard.md)
   - [Network architecture](../../site/network-architecture.html)
   - [Communications recommendation](../../site/communications.html)
   - [Context and Level 0 DFD](../../site/data-flow-diagrams.html)
   - [Website demonstration](../../site/index.html) and [portal](../../site/portal/dashboard.html)
6. Add course cover page, actual contributor attribution, screenshots, appropriately formatted references, and team-specific material. Make a final consistency pass between software costs, migration dates, access controls, and diagrams.

## Requirement traceability
| Professor requirement | Draft location | Readiness |
| --- | --- | --- |
| Bring outsourced payroll, AR/AP, billing, contracts into PCP | 01 §§4–5; 04 | Prepared proposal; business-owner validation required |
| Recommend actual off-the-shelf accounting software and pricing | 01 §3; 02 | Prepared with sourced snapshot; recheck at submission |
| Gantt chart for in-housing business functions | 03 | Mermaid Gantt and dependency worksheet prepared; export needed |
| Groupware/communications between office and mobile consultants | 01 §6; existing communications page | Draft and existing diagram ready |
| Client-facing approximately 10-page site and employee client lookup | Existing `site/` | Functioning academic prototype; user previously performed QA |
| Website storyboard made with software | Existing `docs/storyboard/` Mermaid markdown | Diagram available; export to visual software output for submission |
| Networks, context/Level 0 DFD, privileged admin pathway | Existing site docs | Supporting optional architecture material completed |
| Final submission | 01–04 plus figures | **Not submitted**; group review and source validation outstanding |

## What remains a decision, not a fact
- PCP's exact count of **W-2 payroll employees** versus independent contractors; case reports ~20 consultants and two office staff, but the founders' employment classification and contractor jurisdictions are unspecified.
- Current payments to Consolidated Business Services; therefore **no quantified savings or ROI claim** is defensible.
- Contractor and cross-border payment fees, service taxes, financial migration data quality, real client contract requirements, and whether foreign subsidiaries exist.
- Final license allocation: 22 collaboration seats is a budget scenario rather than proof that every contractor needs a full Microsoft 365 license.
- Whether PCP will host any private Azure VMs. **Do not budget or deploy Azure Bastion by default.**
- PIM requires suitable license coverage for role users; license scoping and vendor quotes need procurement confirmation.
- Course requirement may call for a *software-tool-produced* storyboard and *Gantt chart*; Markdown source alone should not be described as the final graphical deliverable.

## Branch-use instructions
For a future merge, update this branch from `main`, resolve conflicts, then open a PR **only when integration is appropriate**. Keep contingency drafts under `docs/contingency/` so they will not alter the working website or Netlify publish directory. A clean future PR can cherry-pick approved files instead of merging every draft indiscriminately.
