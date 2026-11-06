# Project Consultants Plus: Integrated Business Systems Modernization Proposal
**ISM 4300 — Project 3 | Report-ready working draft | November 6, 2026**

> **Academic solution proposal, not an account of a completed real-world deployment.** This report is written for the case company and is suitable as a master draft for team editing. Replace all provisional assumptions with approved group decisions and verify prices immediately before submission.

## Executive Summary
Project Consultants Plus (PCP), a Las Vegas project-management consultancy formed in 2015, has outgrown the informal infrastructure and outsourced administrative arrangements described in the course case. The firm operates with a geographically dispersed consulting workforce, a small office staff, and client relationships that extend beyond the United States. Its office uses three peer-connected computers, a low-capacity internet connection, and client/contact information kept in a Microsoft Access database with a Visual Basic front end on a founder's computer. Consolidated Business Services handles payroll, billing, and accounts payable/receivable. This arrangement separates financial operations and customer information from daily project-management activity and limits real-time visibility.

We recommend a staged, cloud-first modernization rather than purchasing a physical office server and placing sensitive records behind the existing public website. The recommended operating model combines **QuickBooks Online Plus** for financial accounting, invoicing, AP/AR and basic project financial tracking; **QuickBooks Workforce Payroll** for US employee payroll; **Microsoft 365 Business Premium** for communications, documents and managed endpoints; and an independently authenticated, server-authorized employee client application if PCP elects to build production software. A separate vendor-supported approach is required for international contractors and any non-US payroll needs. Contracts will be stored in controlled SharePoint libraries with metadata, owner review and retention; QuickBooks is **not** represented as a full contract-lifecycle-management system.

The transition should proceed in controlled stages with a verified financial baseline, mapped account and contact records, permissions, pilot training, parallel billing/payroll reconciliations, and signed go/no-go approval before the current outsourced functions are retired. A proposed December 2026 through August 2027 implementation timeline provides adequate sequencing without assuming the academic project itself performs that migration. Microsoft Entra identity, Conditional Access, device management, server-side authorization and targeted privileged administration are proposed security controls, not features implemented by the static demo site.

## 1. Business Context and Problem Statement
The case identifies founders **Joanne Schmidt and Alexis Green**, more than 30 years of combined software-development project-management experience, approximately 20 consultants, and a small administrative staff. Clients span domestic and international markets. PCP's mission is to “Bring practical Project Management principles to bear on real-world IT business solutions.” Consultants are expected to hold Project Management Institute credentials and the firm advertises a 100% service guarantee. The existing website does little to communicate those strengths.

Four constraints drive the project:
1. **Fragmented data:** Contact information on a single founder-controlled Access/VB workstation restricts reliable shared lookup and raises continuity concerns.
2. **Administrative outsourcing:** Payroll, billing and AP/AR processes handled externally limit local oversight and introduce handoff delays; the case provides no cost baseline proving savings.
3. **Geographic separation:** Mobile founders and consultants need timely collaboration, versioned documents, structured communication, and access appropriate to their assigned engagements.
4. **Limited infrastructure and internet:** Peer-to-peer office computers and DSL are inadequate foundations for a modern controlled information environment.

The objective is not to eliminate all third-party services. Cloud SaaS providers may handle payment rails, tax filings and hosting while **PCP personnel become responsible for approvals, records, account reconciliation, client communications and governance**. This is an important distinction between “bringing operations in-house” and building a custom payroll engine.

## 2. Requirements and Evaluation Method
The course explicitly requires a specific off-the-shelf accounting product with costs, a solution and Gantt for internalizing outsourced business functions, a communications/groupware solution, and an approximately ten-page client-facing website with employee client lookup and a storyboard produced using software. This proposal evaluates operational suitability, user access, security, cost transparency, implementation risk and the burden on two office employees.

The illustrative evaluation criteria are: (a) invoices, AR/AP, and reconciliation; (b) US payroll and contractor record support; (c) engagement-level expense visibility; (d) permission management and auditability; (e) remote access and ease of training; (f) vendor pricing and integration. The actual employment status and location of all contractors must be confirmed before payroll configuration. Personnel should not be added to US payroll merely because they appear in the firm's consultant directory.

## 3. Recommended Products and Pricing
### 3.1 Accounting and payroll
**Primary recommendation:** QuickBooks Online Plus combined with QuickBooks Workforce Payroll at the baseline tier, subject to procurement validation. Plus provides small-business accounting functionality for invoices, bills, expense tracking and project-related reporting with up to five billable users; PCP's two office staff and limited owner/bookkeeping access can fit inside that assumption, but twenty consultants should **not** be given general-purpose accounting accounts. Business application users are distinct from accounting license users.

Published US list prices observed November 6, 2026: QuickBooks Online Plus **$140/month** and QuickBooks Workforce Payroll **$50/month plus $7 per employee/month**. For an *illustrative four-US-employee* payroll scenario, this is **$218/month or $2,616/year** before taxes, processing fees, optional contractor-payment subscriptions, migration labor and promotions. This is not a confirmed actual PCP employee count. Source: Intuit, https://quickbooks.intuit.com/products/ .

**Alternatives considered:** Xero Established + Gusto Simple offers separate accounting and payroll applications; Xero lists an established-plan regular rate around **$97/month** on one current US pricing presentation, while Gusto Simple lists **$49/month + $6 per person/month**. At four assumed payroll employees that is about **$170/month** before integrations, contractor-specific transactions and taxes. It may be attractive on recurring sticker cost but requires confirming the two-vendor workflow and whether simple US payroll covers PCP's real employment jurisdictions. Xero prices and promotions change; check https://www.xero.com/us/pricing-plans/ and https://gusto.com/product/pricing. QuickBooks Advanced at **$340/month** offers expanded user and automation capacity but is not justified solely by a 20-person consultant roster and two office workers; reconsider if concurrent accounting users or advanced approval workflows require it.

International contractors, foreign-currency invoicing, W-9/1099 handling, and contract management must be evaluated separately against actual transactions. An optional QuickBooks Contractor Payments product may add cost. Do **not** count a separate contractor subscription automatically without verifying whether the selected payroll plan already fulfills the requirements.

### 3.2 Collaboration, identity, and endpoint management
**Microsoft 365 Business Premium** is recommended for Teams, Exchange Online, SharePoint, OneDrive, Office applications and baseline device/security capabilities. Official US annual-commitment pricing observed is **$22/user/month** including Teams. An **illustrative 22-seat** budget is **$484/month or $5,808/year**; licenses for contractors, owners and guests must be scoped, and some may need guest access instead of a full seat. Source: https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-premium .

Microsoft 365 Business Premium includes Entra ID P1, **not P2**. If PCP deploys Entra Privileged Identity Management, administrators and other in-scope users will require appropriate licensing. One candidate is Entra ID P2 at **$10/user/month**; **two additional P2 licenses = $20/month** for a narrow illustrative budget, subject to current license entitlement and role coverage requirements. Source: https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing . Azure Bastion is **not included in baseline cost** because the proposed SaaS-first model may not require private Azure VMs.

### 3.3 Baseline recurring cost
Assuming 22 Microsoft 365 Business Premium seats, two Entra P2 users, QuickBooks Online Plus and four US payroll employees, recurring software subscriptions total **$722/month or $8,664/year** (484 + 20 + 140 + 50 + 28). This **does not include** payment processing, contractor-specific services, implementation work, PAW hardware, an actual protected employee app/backend, backup products, communication hardware, taxes or support. It should not be presented as total project cost. See the cost-model appendix for scenario sensitivity and one-time illustrative estimates.

## 4. Target Operating Model for Business Functions
**Customer intake and contracts:** Authorized office personnel establish verified client/contact records, assign an engagement owner, record a contract identifier, and place the approved agreement in a restricted SharePoint location. The client system stores minimal references rather than unrestricted copies of financial or legal documents. Engagement leads approve scope changes before billing changes are entered.

**Billing and AR:** Consultants submit milestones, approved billable time or expenses to an office queue. Office staff validate deliverables and contract billing terms, generate invoices in the accounting platform, send them through an approved channel, track receivables, and escalate aging balances to a designated owner. The invoice record, not the prototype portal, remains the accounting system of record.

**AP and vendor payments:** Office staff register supplier bills and verify contract, amount, and receipt evidence. A separate authorized approver releases payments, with documented thresholds. Finance records are reconciled against bank activity; the initiator should not independently approve their own high-value vendor payment.

**Payroll and consultant payments:** Office personnel collect approved timesheets/compensation changes, validate payroll inputs, and review system-generated payroll registers before a named authorized manager approves release. Tax filing/payment functions may remain vendor-hosted. Consultant classification, 1099 treatment, international payments and withholding obligations require specialized review before migration.

**Contracts:** PCP owns templates, approvals, document retention, renewal dates and access governance. SharePoint can serve as the controlled document repository; workflow/contract lifecycle features beyond its baseline capabilities may require further software and cost evaluation.

**Management reporting:** At defined monthly close, office personnel reconcile cash, AR aging, AP aging, payroll liabilities and project-level profitability. Owners receive management reports; consultants see only engagement information authorized for their assignments.

## 5. Migration Strategy and Gantt Overview
**Phase 1 — December 2026: discovery and authorization.** Inventory existing Access/VB fields, client/contact ownership, contractual data, outside-provider exports, payroll jurisdictions, employment classifications, account balances and supplier obligations. Approve data-retention, software licensing and role matrix.

**Phase 2 — January–February 2027: foundation.** Configure Microsoft 365 tenant, managed identities, devices, collaboration sites and finance tenancy. Set least-privilege roles, MFA/Conditional Access and administrative account separation; validate bandwidth and recovery options. Select a production backend only if the protected client portal is approved for development.

**Phase 3 — March–April 2027: configuration and data migration.** Map Access records to controlled client/contact entities, eliminate duplicate or incomplete records, configure chart of accounts and customer/vendor masters, and test sample imports. Capture a documented source-to-target mapping and discrepancy log.

**Phase 4 — May–June 2027: pilot and reconciliations.** Train office staff and a limited consultant cohort. Execute supervised parallel trial runs for billing, AP, payroll and reporting; compare totals, taxes, liabilities and open invoices to verified outsourced-provider records. Test permissions, backup/restore and denial scenarios. No real funds move through a test environment without authorization.

**Phase 5 — July–August 2027: cutover and stabilization.** Obtain signed approvals after reconciliation; freeze and revalidate closing data, transfer responsible processing duties, retain export evidence, reconcile first production cycles, and preserve contracted rollback/assistance provisions. Avoid a big-bang switch across all financial functions on the same day.

The schedule depends on payroll setup, vendor export rights, staff availability, integration feasibility and reconciliation success. A complete, dated Gantt and predecessor matrix is in the implementation appendix.

## 6. Network, Communications, Data Flows and Security
The proposed communications environment puts Teams channels, business email and SharePoint documents under centralized identity governance. Field consultants should collaborate through managed user accounts or carefully scoped external access while business information is classified and shared according to engagement need. This is a remote-friendly operating model, not a requirement to route all collaboration through PCP's small office DSL connection.

The public website provides service information and a link into the separately proposed staff environment. A future protected application would enforce user authentication, server-side authorization, audited account/engagement operations and access to a private data service. A public static Netlify deployment cannot supply those protections by itself. The academic employee portal therefore uses entirely fictional records, client-side role states and browser local storage solely to illustrate workflows.

The network architecture distinguishes public presentation, authenticated staff applications, private information, and a separately governed administrative management plane. Administrative users should work from dedicated privileged-access workstations (PAWs), use distinct identities, satisfy Conditional Access, and activate time-limited rights through PIM where licensed. Azure Bastion is optional and would be justified only for approved private VM administration, not as a mandatory gateway to SaaS services.

The context and Level 0 DFDs represent clients, consultants, office staff and finance services exchanging data through four logical processes: client management, engagement coordination, billing and collaboration. Data stores hold client/contact records, engagement information, financial records and controlled documents. These are information-flow models, **not** network connectivity diagrams or proof that the demo implements real protected backends.

## 7. Principal Risks and Controls
| Risk | Likely effect | Proposed mitigation and accountable owner |
| --- | --- | --- |
| Incomplete or inconsistent legacy client records | Incorrect contact and invoice data | Profile, deduplicate, map and reconcile before import; office data owner |
| Accounting / payroll migration error | Duplicate payments, missed taxes or invoices | Parallel test, signed reconciliation, controlled first cycle; financial owner |
| Contractor classification and international obligations | Tax/compliance exposure | Determine actual worker status and jurisdictions with qualified advisor; business owner |
| Two-person office capacity | Approval bottleneck and key-person dependency | Assign backup approver, SOPs and training; owners |
| Excessive data access | Unauthorized disclosure or modification | Least privilege, protected services, audit events and periodic review; IT/security lead |
| SaaS outage or compromised endpoint | Interrupted communications and financial processing | Recovery contacts, device protection, data exports and documented continuity; IT lead |
| Cost or vendor-scope change | Over-budget purchase | Reconfirm quotes, license inventory, TCO sensitivity and change approval; procurement owner |
| Unplanned technical complexity | Delay or new security cost | Pilot integrations, defer custom portal production and omit unneeded VMs/Bastion; project lead |

## 8. Implementation Governance and Acceptance Criteria
A small steering group consisting of PCP founders, the office process owner, finance/bookkeeping support and IT/project lead should authorize each stage. Gate 1 validates scope, product selection and budget. Gate 2 approves permissions, records mapping and a recoverable pilot environment. Gate 3 requires matched trial runs, correct tax/contractor classification review, user training and security test outcomes. Gate 4 is the production cutover decision; rollback is triggered by irreconcilable balances, payroll test failures, unauthorized access or inability to meet critical invoice deadlines.

Acceptance should be **evidence-based**: complete inventory, signed data mapping, representative reconciliations without material unexplained variances, documented access tests (including denied access), published support procedures, completed role training, recovery exercise, and owner signoff. Reports should clearly distinguish the class website prototype from real implementation status.

## 9. Conclusion
PCP can improve service responsiveness and financial oversight without building a bespoke accounting platform or overinvesting in on-premises infrastructure. A cloud-based accounting/payroll package and Microsoft 365 collaboration suite fit the case's small administrative footprint and dispersed consulting model, provided the company validates payroll populations, vendor fees, contract workflows, and international obligations before purchase. The recommended phased migration prioritizes ownership, accounting control, reconciliation and staff readiness over arbitrary deadlines. The current website and employee portal serve as demonstrations of the target client experience; the protected business systems and identity services remain proposals requiring implementation.

## Source notes and references
**Course case:** ISM4300, “Project 3 — Project Consultants Plus (PCP),” revision May 2025, two pages (primary case and assignment requirements).
- Intuit. (2026). *Compare QuickBooks products*. https://quickbooks.intuit.com/products/ (list prices captured Nov. 6, 2026).
- Intuit. (2026). *QuickBooks Online usage limits*. https://quickbooks.intuit.com/learn-support/en-us/help-article/intuit-subscriptions/learn-usage-limits-quickbooks-online/L6THMltE4_US_en_US
- Microsoft. (2026). *Microsoft 365 Business Premium*. https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-premium
- Microsoft. (2026). *Microsoft Entra plans and pricing*. https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing
- Xero. (2026). *US plans and pricing*. https://www.xero.com/us/pricing-plans/
- Gusto. (2026). *Pricing*. https://gusto.com/product/pricing
- Existing PCP design artifacts: `site/network-architecture.html`, `site/communications.html`, `site/data-flow-diagrams.html`, `docs/storyboard/website-storyboard.md` on the GitHub project.

**Before submission:** Align in-text references with the professor's citation preferences, add rendered diagrams/screenshots and a proper cover page, recheck dated prices, and explicitly disclose any final assumptions. This draft does not assert that operations have already been migrated.
