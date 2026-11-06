# Software Selection, License Budget and Evidence
**Pricing snapshot:** November 6, 2026 (public US vendor pages). **Currency:** USD. Figures are regular/list prices, not limited-term promotional offers. All quantities are assumptions until PCP validates staffing, jurisdictions, integrations and purchase terms.

## A. Vendor selection matrix
| Requirement | QuickBooks Online Plus + Workforce Payroll | Xero Established + Gusto Simple | QuickBooks Online Advanced + Workforce Payroll |
| --- | --- | --- | --- |
| General ledger, invoicing and AR/AP | Accounting plan supports standard invoicing, bills and reconciliation | Xero accounting plan includes invoices, bill management and reconciliation | Includes accounting plus enhanced workflows and reporting |
| US employee payroll | Separate QuickBooks Payroll subscription | Separate Gusto Payroll subscription | Separate QuickBooks Payroll subscription |
| Consulting project financial visibility | Plus is designed for project-cost visibility; validate reporting by engagement | Established adds project time/cost tracking | Adds complexity, reporting and user capacity |
| Accounting seats | Plus supports up to 5 billable users (not all 20 consultants) | Xero US advertises no per-user license fees; verify permission suitability | Up to 25 users per vendor comparison |
| Multi-state/international contractor processing | Verify jurisdictions, contractor workflows and foreign-currency needs; not universally covered | Gusto Simple is for basic single-state payroll; Gusto Plus may be needed for other states | Same separate payroll/contractor validation |
| Implementation complexity | Accounting and same-vendor payroll; still separate setup and reconciliation | Two vendors and mapping between systems | Potentially excessive for small administrative office |
| Published regular accounting monthly price | $140 | $97 current US Established presentation, may vary by page/promotion | $340 |
| Published basic US payroll monthly price | $50 + $7/employee | $49 + $6/person | $50 + $7/employee |

**Recommendation:** Start procurement evaluation with QuickBooks Online Plus + basic Workforce Payroll. The price is not the lowest; the rationale is adequacy for a two-person finance/admin team, simple accounting access scope, common vendor coverage for US payroll, and avoidance of features aimed at larger accounting departments. Obtain a demonstration, contractor-classification review, and written quote before adoption. Xero/Gusto remains a plausible lower-cost alternative if accounting-to-payroll workflow tests and multi-jurisdiction needs are satisfied. **Do not claim a quantified ROI or lower outsourcing cost** because the course case supplies no current outside-provider charges.

## B. Primary scenario — 22 collaboration users, 4 US W-2 payroll persons, 2 privileged administrators
| Item | Basis | Monthly | Annual |
| --- | --- | ---: | ---: |
| QuickBooks Online Plus | 1 plan × $140 | $140 | $1,680 |
| QuickBooks Workforce Payroll | Base $50 + 4 × $7 | $78 | $936 |
| Microsoft 365 Business Premium (with Teams) | 22 × $22 | $484 | $5,808 |
| Microsoft Entra ID P2 | 2 × $10; PIM eligibility/license scope must be confirmed | $20 | $240 |
| **Core subscription subtotal** | | **$722** | **$8,664** |

**Important:** Case describes 20 consultants and two office staff but does not establish all consultants are employees or that the founders are in payroll. The four-person W-2 payroll assumption is a **model parameter**, not sourced case fact. Similarly, 22 Microsoft 365 seats is a budgeting ceiling scenario, not a licensing determination. Contractors may use scoped guest access depending on collaboration requirements and subscription terms.

| Optional / excluded line | Status |
| --- | --- |
| QuickBooks Contractor Payments | Optional standalone list price $25/month (with published included-contractor threshold); determine overlap with Workforce Payroll and actual payment workflows before adding. |
| Azure Bastion | $0 **assumed purchased**, because no production private Azure VM is yet approved. Not a statement that Bastion has no cost. |
| Production employee portal | **Unpriced**: backend, authentication integration, hosting, database, security testing and support require scope/quote. |
| Payroll taxes, card processing, bank/wire, international and contractor transfers | **Unpriced**: vary by transaction, jurisdiction and vendor. |
| Network hardware, office internet upgrade, backup, cybersecurity tooling and support | **Unpriced**: quotes required. |
| Office staff labor to assume outsourced functions | **Unpriced recurrent operating cost**. Included in business-case comparison only after wage/time study. |
| SharePoint advanced contract lifecycle management | **Not included**; baseline document repository is not an end-to-end CLM platform. |

## C. License and payroll sensitivity
Use the formulas:
- QuickBooks + US payroll = **$190 + $7 × employee_count** monthly.
- Microsoft 365 = **$22 × licensed_user_count** monthly.
- P2 allowance = **$10 × licensed_p2_count** monthly.
- Core monthly = **190 + 7E + 22U + 10P**.
- Annual core = monthly × 12. No discounts or tax.

| Employees E | M365 users U | P2 users P | Monthly | Annual |
| ---: | ---: | ---: | ---: | ---: |
| 2 | 22 | 2 | $708 | $8,496 |
| 4 | 22 | 2 | $722 | $8,664 |
| 8 | 22 | 2 | $750 | $9,000 |
| 4 | 10 | 2 | $458 | $5,496 |
| 4 | 24 | 2 | $766 | $9,192 |

**Alternative reference:** Xero Established $97 + Gusto Simple $49 + four users × $6 = $170/month for the financial software (vs $218 QuickBooks baseline). With the same 22 M365 and two P2 seats, this hypothetical comparison would be **$674/month / $8,088/year**, excluding integrations/fees and payroll suitability. Do not compare as equivalent without feature and jurisdiction testing.

## D. One-time illustrative effort / equipment allowance (not vendor quotes)
| Planning allowance | Formula | Amount |
| --- | --- | ---: |
| Migration and integration project work | 80 hours × assumed $50/hour | $4,000 |
| Staff training and procedure development | 24 hours × assumed $40/hour | $960 |
| Two dedicated administrator workstations | 2 × assumed $1,200 | $2,400 |
| Subtotal | | $7,360 |
| Contingency planning reserve | 15% of subtotal | $1,104 |
| **Illustrative setup allowance** | | **$8,464** |

**Illustrative year-one minimum** = $8,464 one-time allowance + $8,664 annual core subscriptions = **$17,128**. This is not a total cost of ownership or a quote: the unpriced categories above could materially change the total. Existing computers may reduce device costs, while staff workload or contractor-processing complexity could increase them.

## E. Savings / ROI decision rule
Only calculate a payback or NPV once PCP supplies its actual outsourced service cost, transaction volumes and labor requirements. Let:
- **Avoided annual outsourcing cost** = verified contractual fees discontinued.
- **New annual operational cost** = recurring software + processing + ongoing internal labor + support + other incremental fees.
- **Annual net benefit** = avoided annual outsourcing − new annual operational cost.
- **Simple payback years** = validated one-time transition cost / positive annual net benefit.

If net annual benefit is zero/negative or source costs are unknown, do not present a positive payback period. Improved visibility, continuity and control may still be meaningful qualitative benefits.

## F. Source ledger — vendor websites checked November 6, 2026
1. Intuit, *Compare QuickBooks Products & Pricing*: https://quickbooks.intuit.com/products/ — online Plus $140; Advanced $340; Workforce Payroll $50 base + $7 per employee; promotional discounts present but excluded.
2. Intuit, *Learn about usage limits*: https://quickbooks.intuit.com/learn-support/en-us/help-article/intuit-subscriptions/learn-usage-limits-quickbooks-online/L6THMltE4_US_en_US — Plus max five billable users; non-billable special roles are distinct.
3. Intuit, *QuickBooks Contractor Payments*: https://quickbooks.intuit.com/payroll/contractor/ — $25 standard monthly list price with 20 included contractors on displayed plan; confirm bundle overlap, transaction and eligibility rules.
4. Microsoft, *Business Premium*: https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-premium — $22/user/month billed annually, with Teams.
5. Microsoft, *Entra pricing*: https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing — P2 $10/user/month annual commitment; PIM is a P2 capability. M365 Business Premium includes P1, not P2.
6. Xero, *US plans*: https://www.xero.com/us/pricing-plans/ — Established list rate has been displayed at $90–$97 in indexed vendor results; **$97 planning figure must be reconfirmed at purchase**.
7. Gusto, *Pricing*: https://gusto.com/product/pricing — Simple $49/month + $6/person; Plus $80 + $12/person and broader multi-state features.

**Validation rules:** Save a dated vendor screenshot/PDF for any final submitted price; check whether promotions changed, distinguish annual from monthly billing, do not equate employee count with consultant headcount, verify local taxes and international coverage, and record all assumptions directly below the final table.
