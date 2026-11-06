# Operating Procedures, Data Migration, RACI and Acceptance Appendix
**PCP Project 3 | Proposed implementation controls | November 2026**

This appendix is designed for direct use in a final report. The case does not specify actual staff skills, compensation, contractor classifications, data quality or financial balances. All named job functions below are **proposed** roles, not a claim that PCP already employs full-time specialists.

## A. Proposed financial and administrative workflows

### A1. Client onboarding and contracts
1. Engagement lead requests a client record using a standardized intake form.
2. Office staff checks for duplicates and validates contact details with a business owner.
3. Contract owner reviews scope, rates, milestones, billing terms and legal obligations.
4. An approved contract is stored in a restricted SharePoint library with version history, owner, renewal date and retention category.
5. Office staff creates or updates customer master data in QuickBooks using a contract reference; only minimum non-sensitive client/contact metadata is synchronized to a protected staff portal if implemented.
6. Changes to rates, parties or engagement scope require approval and an audit trail.

**Control point:** The website demo cannot independently create a binding client relationship or store contract documents as a protected production service.

### A2. Billing and accounts receivable
1. Consultant submits supported milestone/time/expense evidence.
2. Engagement owner verifies contract alignment and deliverable acceptance.
3. Office staff generates invoice in accounting platform after authorization.
4. Invoice is sent to approved client billing contact and entered in AR ledger.
5. Office staff monitors aging and escalates disputed/overdue items.
6. Bank receipts are matched to invoices; credit memos or write-offs require independent approval.

**Evidence:** signed scope/milestone, approved timesheet/expense, issued invoice, customer receipt, AR aging and adjustment history.

### A3. Accounts payable
1. Supplier submits invoice with vendor identifier and purchase/contract reference.
2. Office staff verifies vendor identity, duplicate-payment flags and receipt evidence.
3. Designated approver reviews amount, budget and payment details.
4. Finance operator schedules payment through approved bank/vendor platform.
5. Independent reviewer reconciles payment and bank data, especially changes to payment instructions.

**Control point:** Separate the ability to enter vendors/payments from approval of high-risk disbursements. In a two-person office, founders can provide secondary approval rather than weakening controls.

### A4. Employee payroll and contractors
1. Identify actual W-2 workers and separately classify 1099 and international consultants, with professional guidance where necessary.
2. Office staff collect approved hours, salary changes, leave and deductions.
3. Payroll preview/register is reviewed for anomalies and control totals.
4. Authorized approver releases payroll after verifying pay date and funds.
5. Vendor executes supported filings/remittances and posts accounting entries.
6. Office staff reconciles payroll liability, bank funding, tax notices and 1099/contractor reporting, with specialist review as appropriate.

**Boundary:** Cloud payroll software does not convert all international consulting arrangements into compliant US payroll or automatically satisfy every foreign tax/labor obligation.

### A5. Month-end close and reporting
1. Reconcile bank accounts and merchant settlement balances.
2. Review open AR/AP and disputed balances; validate invoice numbering and missing documents.
3. Reconcile payroll liabilities, taxes and vendor/contractor payments.
4. Confirm project/engagement reporting matches approved contract terms.
5. Founder or independent reviewer signs off on month-end statements and outstanding exceptions.

## B. RACI matrix
R = responsible for doing work; A = accountable for approval/outcome; C = consulted; I = informed. Where multiple people may participate, a single primary accountable role should be designated before implementation.

| Activity | Founders / sponsor | Office process owner | Office finance operator | Engagement lead | IT/security lead | External specialist |
| --- | --- | --- | --- | --- | --- | --- |
| Approve software and budget | A | C | C | I | C | C |
| Maintain client/contact master data | I | A | R | C | C | I |
| Approve new contract and billing terms | A | R | C | C | I | C |
| Prepare client invoices | I | A | R | C | I | I |
| Approve high-impact AP payments | A | R | C | I | I | C |
| Prepare/payroll input | I | A | R | I | I | C |
| Authorize payroll release | A | R | C | I | I | C |
| Reconcile statements and payroll liabilities | A | R | R | I | I | C |
| Configure identity/endpoint controls | I | C | I | I | A/R | C |
| Approve production cutover | A | R | C | I | C | C |
| Incident response and restore testing | I | C | I | I | A/R | C |

**Segregation caveat:** The person preparing a transaction should not serve as sole high-risk payment approver; where the organization is too small for complete separation, documented executive review is an essential compensating control.

## C. Legacy Access/VB client data migration mapping
| Source data in legacy application | Proposed target | Validation |
| --- | --- | --- |
| Client primary key / name | Stable customer/client identifier and display name | Unique ID, canonical name, duplicate resolution |
| Company address / location | Address fields, restricted if sensitive | Normalization and country/state validation |
| Contact names and roles | Client-linked contact entities | Accurate relationship, preferred contact and consent basis |
| Phones and email addresses | Contact methods | Syntax checks and owner-confirmed corrections |
| Current engagement details | Engagement record and ownership | Valid project reference, active status and lead |
| Contract / billing references | Restricted document pointer and accounting customer mapping | Signed agreement exists, no uncontrolled attachment copies |
| Notes and miscellaneous free text | Reviewed, classified and selectively migrated | Exclude unneeded personal/sensitive data; owner signoff |
| Duplicate / archived records | Merged/archive targets with audit provenance | Reversible mapping and exception log |

**Sequence:** secure export → preserve read-only source snapshot and checksum → classify and clean → map fields → trial import → source/target counts and sample comparison → business-owner approval → staged production import → verification and record retention. Exact schema depends on discovered source fields and future chosen database/application, not on the academic browser-local prototype.

## D. Outsourced financial migration controls
| Dataset | Required baseline and cross-check |
| --- | --- |
| Chart of accounts | Account numbers, classification, retained history; reconcile trial balance |
| Customers and outstanding invoices | Invoice IDs, due dates, net aging and open AR; no duplicates |
| Suppliers and unpaid bills | Vendor IDs, payment instructions, due dates, open AP |
| Bank reconciliations | Last reconciled closing balances, uncleared transactions |
| Payroll YTD and filings | W-2/1099 classification, employer accounts, pay rates, taxes/benefits, YTD withholding, outstanding liabilities |
| Contracts / engagement terms | Signed original, amendment history, rates, billing schedule, owner and renewal |
| Historical records | Retention and accessibility agreement, export format, secure custody and reference controls |

**Parallel-run acceptance:** Compare representative invoice totals and open balances, payables, approved payment amounts, payroll gross/net/tax components and financial reporting to the verified source for at least two appropriate cycles where feasible. Exceptions are investigated rather than disguised by accepting arbitrary difference thresholds. Independent signoff is required before switching live processing.

## E. Proposed nonfunctional and security acceptance tests
| Test | Success criterion / evidence |
| --- | --- |
| Public website separation | No protected client data on public Netlify site or public static bundles |
| Authenticated portal | Production path requires real identity provider and authenticated backend (not localStorage or UI-only role changes) |
| Role denial | Consultant cannot query another client's private records without appropriate authorization |
| Accounting segregation | Portal user cannot approve arbitrary AP payments or access accounting-wide administrator tools |
| Admin elevation | Managed PAW, separate admin identity, time-bound PIM role activation where licensed |
| Bastion decision | Evidence of private Azure VM requirement before purchasing/deploying Bastion |
| Auditability | Identity, privileged actions, key financial transactions and data modifications have attributable event records |
| Backup/restore | Test recovery of critical business data and document recovery process |
| Invoice continuity | Approved invoice can be created, delivered, recorded and reconciled without loss |
| Payroll continuity | Validated register and authorized release match source records; tax obligations reviewed |
| Collaboration offboarding | External consultant's access removed when assignment ends; guest links expire |

## F. Risk register / mitigation owners
| ID | Risk and trigger | Impact | Mitigation | Owner | Escalation |
| --- | --- | --- | --- | --- | --- |
| R1 | Inaccurate client export or duplicates | Misdirected communications, billing mistakes | Field mapping, dedup, signed import checks | Office process owner | Stop client import |
| R2 | Outsourced provider delay or export limits | Schedule and reconciliation delay | Early written export requirements and retention agreement | Founders | Extend parallel arrangement |
| R3 | Unclear worker classification/jurisdictions | Compliance and financial exposure | Specialist legal/tax review, separate contractor workflows | Founders | Defer affected payroll population |
| R4 | Incorrect financial opening balances | Misleading reports | Double-run reconciliations with evidence | Finance owner | Block cutover |
| R5 | Privileged access sprawl or unauthorized staff lookup | Confidentiality/integrity breach | Least privilege, MFA, PAWs, PIM where appropriate, logging | IT/security | Security incident process |
| R6 | Staff workload exceeds capacity | Missed invoice/payroll deadlines | SOPs, backup approver, training, phased cutover | Founders | Retain partial outsourced support |
| R7 | Subscription scope/fees change | Unexpected operating cost | Dated vendor quote, seat audit, fee sensitivity | Sponsor / procurement | Reapprove budget |
| R8 | SaaS outage or incomplete restore | Business interruption | Vendor continuity and export plans, restoration testing | IT/operations | Activate continuity procedure |
| R9 | Incomplete contract migration | Billing disputes or renewal lapse | Owner validation of agreements/renewals before conversion | Contract owner | Hold affected client migration |

## G. Final report evidence / figures checklist
- Cover, date, course, authors and actual division of contributions.
- Executive summary and source-backed PCP case background.
- Selected software, comparison table, vendor pricing evidence and explicit assumptions.
- Annual and monthly cost model, exclusions and conditional alternatives.
- Business-process swimlane/flow narrative and RACI.
- Rendered Gantt, dated phase schedule, dependencies and stage gates.
- Public website screenshots including services, PMI link and portal demo client lookup.
- Software-created website sitemap/storyboard (Mermaid or redrawn in approved tool; **render before submission**).
- Network diagram with separated public/staff/admin paths, PAW/PIM and conditional Bastion.
- Context DFD and Level 0 DFD images and data-flow explanation.
- Risks, data migration validation and evidence-based go/no-go.
- In-text citation/reference reconciliation with source dates.
- Explicit academic demonstration vs proposed production distinction and team review.
