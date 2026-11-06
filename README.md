# Project Consultants Plus (PCP)
### ISM 4300 — Project 3 | Business Systems Modernization & Secure Web Presence

> **Status:** Planning and development · **Academic submission:** November 30, 2026  
> **Project type:** Academic case study, solution architecture, and functional website prototype  
> **Client:** Project Consultants Plus (PCP), a fictionalized case-study consulting business based in Las Vegas, Nevada

## Project Overview

Project Consultants Plus is a project-management consulting firm facing the challenges of growth, geographically distributed consultants, fragmented client records, and dependence on outsourced administrative services. The case describes a small office network, an aging Microsoft Access database with a Visual Basic front end, limited public web presence, and a need for more effective collaboration and remote access.

This project develops a **proposed business and IT modernization strategy** that connects four areas:

1. **Business-process migration:** Recommend how PCP could bring accounting, accounts payable/receivable, billing, payroll, and related services under internal management.
2. **Software selection and cost:** Compare appropriate commercial products and document current pricing, licensing assumptions, and implementation trade-offs.
3. **Network and communications:** Design a scalable, cloud-first solution for secure collaboration among office personnel and consultants.
4. **Website and employee portal:** Develop an approximately ten-page public-facing website and a demonstrative staff portal for client/contact lookup.

The deliverable combines a working static website prototype with supporting architecture, migration planning, cost analysis, and implementation documentation. **It is not a production deployment of PCP's financial, identity, or client-record systems.**

## Business Context

The case identifies approximately twenty consultants and two office staff, with the firm's founders frequently working remotely and serving clients domestically and internationally. PCP's initial technology constraints include:

- Three peer-to-peer office computers without a dedicated server.
- Limited office internet connectivity and secure remote-access capability.
- Client data maintained in a Microsoft Access/VB application.
- Payroll, billing, accounts payable and receivable handled by an outside provider.
- A minimally functional public website.
- Separate productivity and specialty software used by personnel and consultants.

**Business goal:** Centralize information, improve communication and client service, reduce avoidable operational friction, and establish a defensible path to internal business operations without overbuilding infrastructure for a small organization.

## Proposed Solution

| Area | Proposed approach | Delivery in this repository |
| --- | --- | --- |
| Public website | Responsive HTML, CSS, and JavaScript site | Functional prototype planned |
| Employee portal | Distinct portal entry point and role-oriented client directory | Demonstration with fictional data planned |
| Identity | Microsoft Entra ID, MFA, role-based access and conditional access | Architecture recommendation only |
| Remote access | Zero Trust Network Access (ZTNA) / identity-aware application access | Architecture recommendation only |
| Administrative access | Privileged management path using Azure Bastion where private VMs are required | Architecture recommendation only |
| Data | Centrally managed client records in an appropriately protected platform | Data model and migration recommendation |
| Collaboration | Microsoft 365, Teams, SharePoint and associated governance | Product and cost evaluation planned |
| Finance | Cloud-hosted accounting/payroll software, subject to feature and cost comparison | Vendor recommendation and migration plan |
| Security operations | Centralized logs, least privilege, access reviews, backups and recovery | Control and validation documentation |

Vendor selections are **provisional** until the team's comparison and pricing research is completed.

## Security Architecture

The proposed design uses **logical separation between public presentation, employee access, protected business applications, private data, and privileged administration**.

```text
                    Internet / Public Visitors
                              |
                   Public PCP Website (HTTPS)
                              |
                     "Employee Portal" link
                              |
                   Independent Portal Service
                              |
                    Entra ID / MFA / ZTNA
                              |
                     Authorized Application
                              |
                     Private Client Data Tier

    Remote Consultants ----------------> Authorized Portal / M365

    Privileged Administrators --> Dedicated Admin Identity + MFA
                              --> Controlled Management Access
                              --> Azure Bastion (if private VMs exist)
                              --> Restricted Management Targets
```

**Trust boundaries and intended controls**

- The public website does not directly query protected client data or expose private database endpoints.
- Employees use a separately authenticated portal with least-privilege, role-appropriate access.
- Protected application backends are the only services permitted to access their required data stores.
- Administrative access uses dedicated privileged identities and an isolated management path; general staff do not use the jump service.
- Logging, account lifecycle management, monitoring, backup/recovery, and periodic access review form part of the production recommendation.
- SaaS financial platforms retain their own vendor-supported security and access controls. They are not automatically integrated into the portal.

**Important:** A public static website or client-side JavaScript password check does **not** enforce real authentication, authorization, or data confidentiality. Any portal included in the academic prototype must use **synthetic records only**, be labeled as a demonstration, and must not be represented as a live Zero Trust implementation. No secrets or real user/client data should be committed to this public repository.

## Website Information Architecture

The initial sitemap targets approximately ten user-facing sections:

| Section | Intended purpose |
| --- | --- |
| Home | PCP mission, key capabilities, and calls to action |
| About | Company background, leadership, experience, and values |
| Services | Consulting capabilities overview |
| SDLC Project Management | Project management throughout the system development lifecycle |
| Systems Integration | Integration planning, implementation and coordination |
| Usability Testing | Evaluation, testing, and user-experience improvement |
| IT Auditing | Systems review, technology assessments and auditing |
| Consultants | Consultant expertise and PMI-certification emphasis |
| Contact | Inquiry and contact information (demonstration-safe) |
| Employee Portal | Separate portal entry point and illustrative client/contact lookup |

The website should communicate PCP's mission: **“Bring practical Project Management principles to bear on real-world IT business solutions.”**

### Planned repository structure

This is a **target structure**, not a claim that every file has already been implemented:

```text
.
├── index.html
├── about.html
├── services.html
├── project-management.html
├── systems-integration.html
├── usability-testing.html
├── auditing.html
├── consultants.html
├── contact.html
├── portal/
│   ├── index.html
│   └── dashboard.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── portal-demo.js
├── assets/
│   └── images/
├── docs/
│   ├── storyboard/
│   ├── architecture/
│   └── project-planning/
└── README.md
```

The frontend is intended to reuse proven patterns from an earlier academic website project while remaining in its **own independent repository and deployment**. That avoids modifications to the author's existing portfolio repository.

## Project Timeline

### Phase I — Academic development and solution design (November 2–30, 2026)

| Dates | Activities |
| --- | --- |
| Nov 2–6 | Requirements, scope, initial architecture decisions, coordination and work allocation |
| Nov 9–13 | Website storyboard, network/security design, software research |
| Nov 16–22 | Public site and portal prototype, product recommendations, migration planning, Gantt development |
| Nov 23–25 | Documentation integration, functional testing, security review and quality assurance |
| Nov 26–29 | Contingency, corrections and final packaging |
| Nov 30 | Academic submission deadline |

**Internal target:** November 25 for an integrated candidate, allowing contingency before the November 30 submission.

### Phase II — Hypothetical PCP implementation (December 2026–August 2027)

The implementation plan models a **proposed real-world rollout**, not work that the team claims to complete:

| Period | Proposed activities |
| --- | --- |
| Dec 2026 | Discovery validation, leadership approval, budget and vendor selection |
| Jan–Feb 2027 | Cloud/network foundation, identity controls, collaboration setup |
| Feb–Mar 2027 | Privileged administrative access, security policy and access verification |
| Mar–May 2027 | Production application configuration, client-data preparation, accounting setup |
| May–Jun 2027 | Integrated testing, security testing, pilot users and training |
| Jun–Jul 2027 | Reconciliation and representative parallel financial processing |
| Aug 2027 | Authorized cutover, stabilization, knowledge transfer and closeout |

No accounting or payroll cutover should occur without **verified reconciliation, staff readiness, tested recovery procedures and business-owner approval**. Actual dates depend on vendor contracts, migration complexity, regulatory requirements and PCP's approval.

## Expected Project Artifacts

- [ ] Responsive public website and approximately ten-page sitemap
- [ ] Employee portal demonstration with fictional client/contact records
- [ ] Website storyboard and user navigation flow
- [ ] Logical cloud/network architecture with trust boundaries
- [ ] Identity, role-based access and privileged administration rationale
- [ ] Communications/groupware recommendation and cost comparison
- [ ] Accounting/payroll software recommendation with documented pricing assumptions
- [ ] Business-process and data migration strategy
- [ ] November academic development Gantt
- [ ] December–August proposed implementation Gantt, milestones and dependencies
- [ ] Integrated functional/security QA and project handoff documentation

Where useful, supporting data-flow diagrams (DFDs) and risk/control matrices may be added to clarify the proposed system. These are supporting design artifacts rather than evidence of production deployment.

## Local Development

Once the site files are added, a static local web server can be used for preview:

```bash
git clone https://github.com/matthewkniskern-source/PCP-Project-Management-Consulting.git
cd PCP-Project-Management-Consulting
python -m http.server 8000
```

Then open **http://localhost:8000**. Python's local server is for development preview, not for production hosting.

A static hosting service such as GitHub Pages or Netlify may be used for the public prototype. **Hosting configuration and a live URL should only be documented after deployment is verified.**

## Team and Collaboration

Course project team: **Matthew Kniskern, Fernando, and Gabriella**.

Technical areas currently proposed for Matthew include the website framework, portal demonstration, and network/communications architecture, with input into Gantt charts, data-flow diagrams, and integration documentation. Other responsibilities and final submission ownership will be confirmed collaboratively. Attribution should reflect completed contributions rather than presumed assignments.

## Assumptions and Limitations

- This repository represents a **course case-study solution**, not an official PCP-owned corporate website.
- Specific people, records, contact details and transactions shown in the portal should be clearly fictional.
- The case materials contain inconsistent names and dates; design assumptions should be stated rather than silently treated as verified facts.
- Licensing prices, available product capabilities, cloud costs and third-party integrations require verification at the point of recommendation.
- Azure Bastion is a proposed privileged access mechanism **only for workloads that actually require private VM administration**. A fully SaaS/PaaS implementation may not need such VMs.
- Production deployment would require separate security review, tenant setup, actual identity integration, risk assessment, operations processes and organizational authorization.

## Repository Purpose

The goal is to demonstrate how a small consulting organization can modernize business processes and its public web presence **without compromising the security and maintainability of its internal information systems**.

The project emphasizes practical IT management, security-aware architecture, controlled migration, realistic implementation planning and clear communication of technical trade-offs.

---

*Developed for ISM 4300, Project 3. Academic prototype and recommendations; not an affiliated or operational PCP service.*
