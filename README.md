# Project Consultants Plus (PCP)

**ISM 4300 · Project 3 — Business Systems Modernization and Secure Web Presence**

> **Current status (November 6, 2026):** Public website, employee workspace demonstration, and technical design documentation are published. Business software selection, financial/process migration recommendations, consolidated implementation planning, and final group submission remain in progress.  
> **Course deadline:** November 30, 2026  
> **Scenario:** Fictional project-management consulting organization based in Las Vegas, Nevada. This repository is an academic project, not a website or system operated by an actual PCP business.

**[View the live website](https://pcp-consulting-project.netlify.app/)** · **[Technical documentation](https://pcp-consulting-project.netlify.app/documentation.html)** · **[Employee portal demonstration](https://pcp-consulting-project.netlify.app/portal/)** · **[Academic Gantt](https://pcp-consulting-project.netlify.app/academic-gantt.html)**

## Project overview

PCP's scenario combines a limited public web presence, an aging Microsoft Access/Visual Basic client database, decentralized information practices, geographically distributed consultants, and outsourced accounting, payroll, accounts payable/receivable, and billing. The assignment calls for a coordinated business and technology response—not merely a redesigned website.

The current repository documents and demonstrates the **technical workstream**: a public website, sample-data employee workspace, proposed Zero Trust network and identity architecture, communications/collaboration design, data-flow analysis, website storyboard, and academic development schedule. The full organizational recommendation remains subject to the team's business inputs and final integration.

The case describes approximately twenty consultants and two office staff, with a small peer-to-peer office network and a need for secure remote collaboration.

## What can be reviewed today

| Deliverable | Current evidence | Status / limitation |
| --- | --- | --- |
| Public consulting website | [Website](https://pcp-consulting-project.netlify.app/) · [HTML source](site/index.html) | **Implemented**: responsive static pages for company information and service discovery |
| Employee workspace | [Portal entry](https://pcp-consulting-project.netlify.app/portal/) · [Demonstration JavaScript](site/portal/demo.js) | **Implemented demonstration**: fictional client records, search, record handling, and workflow states; simulated role views, **not** real authentication |
| Network / Zero Trust design | [Architecture documentation](https://pcp-consulting-project.netlify.app/network-architecture.html) | **Proposed architecture**: separate public, staff, data and privileged administrative trust boundaries |
| Communications and groupware | [Communications plan](https://pcp-consulting-project.netlify.app/communications.html) | **Proposed design**: Microsoft 365/Teams/SharePoint, managed identities, document governance and remote collaboration |
| Business data flows | [Context and Level 0 diagrams](https://pcp-consulting-project.netlify.app/data-flow-diagrams.html) | **Documented models**: client, consultant, office and finance interactions |
| Website storyboard | [Visual storyboard](https://pcp-consulting-project.netlify.app/website-storyboard.html) · [Source notes](docs/storyboard/website-storyboard.md) | **Completed design artifact**: site hierarchy, navigation, and example user journeys |
| Academic development schedule | [November 2–30 Gantt](https://pcp-consulting-project.netlify.app/academic-gantt.html) | **Published planning artifact**: development milestones and submission checkpoints |

**Important distinction:** The website and employee workspace are functioning *browser demonstrations*. The identity platform, protected production portal, private database, privileged administration path, accounting systems, and enterprise controls are *design recommendations*, not deployed services.

## Technical approach

### Public website and staff demonstration

The public experience is built with static **HTML, CSS, and vanilla JavaScript**, published through Netlify. Public pages cover the organization's profile, services, project management, systems integration, usability testing, IT auditing, consultants and contact details.

The employee portal link leads to a visibly labeled simulation. Its fictional records and client-side interaction support demonstration of proposed user workflows without exposing real business data. Browser state, role selectors, and presentation logic should not be interpreted as production access controls.

### Proposed security architecture

The future-state design separates:

1. A public informational website with no direct connection to sensitive business records.
2. Staff identity and application access using Microsoft Entra ID, MFA, Conditional Access, compliant devices and application-specific authorization.
3. Protected business applications with server-side access decisions and private data access.
4. Privileged administration with dedicated identities, hardened privileged-access workstations, time-limited elevation, and controlled management paths. Azure Bastion is considered only if private VM administration is required.
5. Logging, backup/recovery, vendor access governance, and continuing access review.

These are **conceptual controls and target-state components**. The live Netlify portal does not enforce Entra authentication, ZTNA, server-side RBAC, or private data-tier isolation.

### Collaboration and information flows

The recommended communications approach favors managed collaboration and controlled shared documents rather than ad hoc file transfers or directly accessible office systems. The context and Level 0 DFDs show the separation of client requests, engagement coordination, billing and collaboration from their associated data stores.

## Work still requiring group integration

The following items are **not represented as final, approved business recommendations** in this published branch:

- Comparative accounting/payroll software selection and documented licensing or implementation costs.
- Specific processes, ownership, staffing and controls for moving payroll, accounts payable/receivable, and billing in-house.
- Approved migration approach for existing financial and client data, including reconciliation and cutover requirements.
- The organization-facing implementation Gantt, dependencies, decision gates and realistic adoption timeline.
- The integrated team report, combined verification evidence and final submission package.

These components depend on other team members' research, choices and coordination. They will be reflected here **after team review and integration**; work prepared independently or in a contingency branch is not automatically a team-approved outcome.

### Project coordination and ownership

**Team:** Matthew Kniskern, Fernando and Gabriella. **Gabriella is the assigned project manager.**

Matthew has contributed the website framework and employee demonstration, technical network/security and communications architecture, data-flow documentation, storyboard, academic Gantt, and repository implementation/refactoring work. These are **technical workstream contributions**, not a claim of responsibility for the group's financial recommendations, project-management decisions, or final submission.

The project manager coordinates overall integration and submission, with business recommendations and final ownership confirmed collaboratively. Technical readiness does not imply that outstanding group work has been completed or approved.

## Project schedule

**Academic development:** November 2–30, 2026. The [academic Gantt](https://pcp-consulting-project.netlify.app/academic-gantt.html) tracks the technical work and planned integration checkpoints. Remaining group inputs and final review are needed before submission.

**Hypothetical company implementation:** A separate proposed modernization effort would require business sponsorship, verified vendor selection, data readiness, identity/security configuration, pilot testing, financial reconciliation, training, authorized cutover, and operational handoff. Its final sequence, costs and dates are **pending the group's consolidated recommendations**. An academic development Gantt is not a substitute for the company's implementation schedule.

## Repository layout and local preview

```text
README.md
netlify.toml                 Netlify publish/build and response headers
scripts/build-site.mjs       Dependency-free HTML template build
src/pages/                   Authoritative HTML page sources
src/partials/                Shared header/navigation and footer fragments
site/                        Generated static website published by Netlify
site/portal/demo.js          Fictional employee-workspace interactions
site/styles.css              Common presentation rules
site/portal.css              Portal-specific presentation
site/documentation.css       Technical-documentation presentation
docs/storyboard/             Storyboard supporting notes
```

To preview locally, clone the repository, regenerate the HTML from source, then serve the **`site/`** directory:

```bash
git clone https://github.com/matthewkniskern-source/PCP-Project-Management-Consulting.git
cd PCP-Project-Management-Consulting
node scripts/build-site.mjs
python -m http.server 8000 --directory site
```

Open `http://localhost:8000`. The build uses Node.js built-in modules; no package-install step is required. Netlify runs `node scripts/build-site.mjs` before publishing `site/`. Update `src/pages/` and `src/partials/` rather than hand-editing generated HTML, and commit the regenerated output alongside source changes.

## Next acceptance steps

- Integrate the group's approved business recommendations and implementation schedule.
- Review the completed report for consistency between business assumptions and technical architecture.
- Record functional, responsive and accessibility checks; resolve material issues.
- Confirm contribution attribution and package the final course deliverables.

These are remaining steps, **not completed-test claims**.

## Limitations and purpose

All names, client records and portal workflows shown in the demonstration are fictional. This repository does not contain live customer information, operational finance systems, or a deployed production identity/security architecture. Licensing and product assumptions require current confirmation before being used for a real procurement decision.

The goal is to show how a modest-sized consulting organization could connect practical systems analysis, a usable web presence, secure collaboration, explicit access boundaries and an appropriately governed business-modernization plan.

*ISM 4300 academic project. No affiliation with an operational Project Consultants Plus business is implied.*
