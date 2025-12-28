# Cash-Flow, Capital Injection & Risk Model (Final)

This section defines the **exact movement of funds**, **contractual logic**, and **downside behavior** of the protocol. All language is written to be disclosure-safe, MetaDAO-compatible, and legally conservative.

---

## 1. Cash-Flow Waterfall (Verbatim Specification)

### 1.1 Definitions

- **Gross Rent (GR):** Total rent collected from tenants for a given period.
- **Property-Level Liabilities (PLL):** Mandatory expenses paid before any profit sharing, including:
  - Mortgage principal and interest
  - Property taxes
  - Insurance
  - Repairs and maintenance
  - Letting / management costs
- **Net Distributable Rent (NDR):**

> `NDR = Gross Rent – Property-Level Liabilities`

If NDR is zero or negative, or if NDR is less than or equal to the applicable property management costs, no distributions occur and no payment obligation arises for that period.

---

### 1.2 Rent Split Mechanism

Once NDR is calculated, it is split contractually as follows:

- **50% → Property Holding Company**
- **50% → Protocol Revenue Pool**

This split represents compensation to the protocol for providing capital under a Capital Injection Agreement and does **not** convey ownership of the property or equity in the holding entity.

---

### 1.3 Founder Compensation (Final)

- Founders are compensated solely via a **fixed 5% management fee** applied **only to the protocol’s 50% share of NDR**.
- The fee is:
  - Paid only if NDR > 0
  - Linear and non-performance-based
  - Not drawn from gross rent
  - Not paid by the property company

> `Founder Fee = 5% × Protocol Share`

---

### 1.4 Protocol Net Funds

After the founder fee is deducted, remaining protocol funds are allocated according to governance rules:

- Liquidity pool support (e.g., buy-side depth)
- Capital recycling for future injections
- Treasury reserves for volatility management

No distributions are guaranteed. All allocations are conditional on surplus availability.

---

## 2. Capital Injection Agreement (CIA) – Logic Outline

### 2.1 Nature of the Agreement

The Capital Injection Agreement is a **commercial revenue participation contract**, not:
- Equity
- Debt
- A security representing ownership

The protocol provides capital to the property company under agreed terms in exchange for a share of net rental surplus.

---

### 2.2 Core Clauses (Logical Form)

**Clause 1 – Capital Use Restriction**
- Injected capital may only be used for:
  - Property acquisition
  - Mortgage reduction
  - Renovation that improves rental yield

**Clause 2 – No Ownership Rights**
- The protocol acquires no title, lien, or beneficial ownership over the property.

**Clause 3 – Revenue Participation**
- The property company agrees to remit 50% of NDR to the protocol on a monthly basis.

**Clause 4 – Priority of Payments**
- All Property-Level Liabilities must be paid before NDR is calculated.
- If NDR ≤ 0, no payment obligation exists for that period.

**Clause 5 – Term & Termination**
- Agreement remains active until:
  - Capital is voluntarily repaid, or
  - Agreement is terminated by mutual consent, or
  - Property is sold (see Clause 6)

**Clause 6 – Property Sale Event**
- Upon sale:
  - Outstanding injected capital may be repaid first (optional, jurisdiction-dependent)
  - No claim on capital gains unless explicitly agreed

---

## 3. Worst-Case Scenario Modeling

### 3.1 Zero Rent Month (Vacancy or Shock)

**Assumptions:**
- Gross Rent = 0
- Liabilities still partially exist

**Outcomes:**
- NDR = 0 or negative
- Protocol receives: £0
- Founder fee: £0
- Token holders receive: £0
- Property company absorbs losses

**Key Insight:**
> The protocol does not socialise property losses.

---

### 3.2 Prolonged Vacancy (3–6 Months)

- Protocol revenue pauses
- No forced capital calls
- No dilution events
- Treasury reserves (if any) may be used for liquidity support

Protocol survival is **not dependent on continuous inflows**.

---

### 3.3 Interest Rate Spike

- Higher mortgage costs reduce NDR
- Rent split automatically adjusts downward
- No yield smoothing
- No protocol leverage escalation

This protects against reflexive risk-taking.

---

## 4. Capital Loop (Explicitly Non-Reflexive)

1. Protocol injects capital into property company
2. Property generates rent
3. Liabilities paid
4. NDR calculated
5. 50% flows to protocol
6. Protocol allocates funds
7. Optional future injections gated by governance

There is **no automatic reinvestment mandate**.

---

## 5. Pitch Diagram (Clean & Explainable)

```
Tenant Rent
    |
    v
Property Holding Company
    |
    |  Pay Liabilities (Mortgage, Tax, Repairs)
    v
Net Distributable Rent (NDR)
    |
    |  50%            50%
    |--------------------|
    v                    v
Property Co        Protocol Revenue Pool
                         |
                         | 5% Management Fee
                         v
                    Founders / Ops
                         |
                         v
                  Reserves / LP Support
```

---

## 6. Design Philosophy (Explicit Statement)

- No guaranteed yield
- No leverage at token layer
- No dependency on new capital
- No opaque cash flows

> The protocol prioritizes **durability over optimization**.

---

## 7. Disclosure Sentence (Recommended)

> “The protocol participates only in net rental surplus after property-level liabilities and bears no entitlement during periods of underperformance.”

---

---

## 8. Capital Raise & Governance Controls (MetaDAO)

### 8.1 Raise Parameters

- **Target Deployment Cap:** USD 1.8M  
- **Soft Cap:** USD 1.4M  
- **Minimum Viable Capital (MVC):** USD 800k

The protocol is designed to operate safely at the MVC level. Capital raised above the deployment cap is not automatically deployed.

---

### 8.2 Oversubscription Handling

- Capital raised **above USD 1.8M** is routed directly into the **DAO Treasury**.
- Treasury-held capital:
  - Remains idle by default
  - Earns no implied yield
  - Is not deployable into property injections without explicit governance approval

---

### 8.3 Treasury Use Restrictions

Treasury capital **may only** be used for:
- Future capital injections (post-vote)
- Liquidity buffers and risk reserves
- Legal, audit, compliance, and reporting costs

Treasury capital **may not** be used for:
- Founder compensation
- Guaranteed yield support
- Emergency bailouts of underperforming properties
- Automatic portfolio expansion

---

### 8.4 Governance Thresholds

- **Simple Majority (50%+):**
  - Non-deployment treasury expenses (legal, reporting, infrastructure)

- **Supermajority (≥ 60%):**
  - Any deployment of treasury capital into new property injections
  - Any modification to rent-split or fee parameters

---

### 8.5 Time-Based Safeguard

Treasury-held capital may not be deployed into new property injections until the protocol has demonstrated a minimum of **six (6) months of continuous operating history**.

---

**End of Section**

