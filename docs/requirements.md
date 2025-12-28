# Requirements Gathering Document: Scottish Property RWA

---

## 1. Project Vision & Goals
*We need to define the high-level purpose of the project before discussing features.*

**1.1 What is the primary objective of tokenizing this property?**
*(e.g., To raise capital for renovations, to provide liquidity to existing owners, or to create a community-governed estate?)*
> **Answer:**
>The primary objective of the project is to build an on-chain Capital-as-a-Service (CaaS) protocol that:

Raises crypto-native capital

Injects that capital into independently operated Scottish property businesses

Receives contractual rent-based and profit-based surplus

Routes surplus back on-chain as real yield

Recycles capital responsibly to expand the underlying property portfolio

The protocol does not tokenize property ownership and does not hold real estate assets.
>

**1.2 What is the "Elevator Pitch" for the potential investor?**
*(Why would someone buy this token instead of a REIT or another crypto asset?)*
> **Answer:**
>This protocol turns real-world property cash flows into on-chain liquidity without tokenizing deeds, selling equity, or promising fixed yield. Instead of owning property, token holders participate in a governed capital engine that injects funds into conservative Scottish property operators and shares in surplus cash flows under strict risk constraints.
>

**1.3 Who is the target audience?**
*(e.g., Crypto-natives/DeFi users, traditional real estate investors, or a mix?)*
> **Answer:**
>Primary

Crypto-native users seeking sustainable, non-emissions-based yield

DeFi participants interested in real-world cash flows

Long-term token holders, not short-term traders

Secondary

Crypto-curious real estate investors

Family offices and private investors accessing via structured routes

This is not designed for speculative flipping or short-term APY farming.
>

---

## 2. The Asset (Scottish Property)
*Technical details about the physical asset are required to determine the data structure.*

**2.1 What is the current status of the property?**
*(e.g., Already owned, currently under offer, or needs to be purchased with raised funds?)*
> **Answer:**
>2.1 Property Status

Properties are owned and operated by independent UK property companies

Some properties are already owned by operating partners

Additional properties are acquired progressively using injected capital

The protocol does not require a single raise or single property.
>

**2.2 What specific type of property is it?**
*(e.g., Residential apartment, commercial unit, historic estate/castle, or land for development?)*
> **Answer:**
>Initial focus:

Residential buy-to-let properties

Small multi-unit residential blocks

Stable-demand Scottish regions

>Future expansion (subject to governance risk parameters):

**2.3 How will the legal ownership be structured?**
*(e.g., Will the token represent shares in a Special Purpose Vehicle (SPV/Ltd Company) that owns the deed, or is there another legal framework in mind?)*
> **Answer:**
>Legal title remains with UK-based SPVs

Crypto protocol:

Does not own property

Does not hold equity

Does not appear on land registries

Does not manage real-world operations

>The protocol is a capital counterparty, not an asset owner.

---

## 3. Tokenomics & Financial Model
*How does the money move between the real world and the blockchain?*

**3.1 What rights does the token grant the holder?**
*(e.g., A claim on rental income, voting rights on renovations, or purely speculative value based on property appreciation?)*
> **Answer:**
>Economic participation in protocol surplus

Protocol-level governance rights over:

Risk parameters

Capital deployment limits

Distribution frameworks

Transparency standards

The token does not grant:

Property ownership

Speculative value based on property appreciation, and token appreciation through buy back that deepens liquidity

Equity

Voting rights over real-world operations
>

**3.2 How does yield/revenue flow back to the token holder?**
*(e.g., Monthly airdrops of stablecoins, automatic buy-back and burn of the token, or adding to a liquidity pool?)*
> **Answer:**
>
>

**3.3 What happens if the property needs maintenance or emergency funds?**
*(e.g., Is a portion of revenue held back in a treasury reserve?)*
> **Answer:**
>Capital injected by the protocol:

Ranks below senior mortgages

Ranks above equity holders

Is serviced only from distributable surplus

No fixed payments are guaranteed.
>

---

## 4. Technical Requirements
*Determining the technology stack based on needs, not preferences.*

**4.1 Do you have a preferred blockchain network?**
*(If yes, why? If no, what are your priorities: Low transaction fees, high security, or specific ecosystem access?)*
> **Answer:**
>Solana, low fees, high throughput
>

**4.2 What functionality does the user dashboard need?**
*(e.g., View current property valuation, claim rental yield, vote on governance proposals, view renovation photos?)*
> **Answer:**
>NAV chart, Rental yield, Treasury
>

**4.3 How will we verify "Proof of Life" / Project Progress?**
*(e.g., Do you need a system to upload invoices, photos, or bank statements to the blockchain to prove work is being done?)*
> **Answer:**
>Periodic off-chain attestations

Property rent or profit sharing statements

Portfolio-level reporting
>

---

## 5. Governance & Operations
*Defining how decisions are made.*

**5.1 How "decentralized" should decision-making be?**
*(e.g., Do token holders vote on every paint color, or do they only vote on major events like "Sell the house"?)*
> **Answer:**
>Governance is protocol-level only.
>Governance does not extend to the property holding company.
No voting rights on
>Individual properties

>Refinancing decisions

>Operational matters

**5.2 Who manages the physical property?**
*(Is this an internal team or an external property management company?)*
> **Answer:**
>Property Management company servicing under property holding company
>

---

## 6. Compliance & Legal
*Identifying regulatory constraints.*

**6.1 Are there specific regions we must block?**
*(e.g., Do we need to geo-block US users to avoid SEC issues?)*
> **Answer:**
>the US
>Other high-risk jurisdictions

**6.2 Is KYC (Know Your Customer) required?**
*(Must every user provide ID to buy the token, or is it permissionless?)*
> **Answer:**
>The token is protocol-level that injects capital, receives an agreed amount of profit/rental yield, and is permissionless
>

---

## 7. Design & User Experience
*Defining the look and feel without pre-conceived themes.*

**7.1 What emotions should the visual design evoke?**
*(e.g., Trust and Heritage, Modern and Tech-forward, or Exclusive and Luxury?)*
> **Answer:**
>Trust

Stability

Discipline

Professionalism

Minimalism
>This is not meme-driven or hyper-speculative.

**7.2 Do you have existing brand assets?**
*(Logos, color palettes, or style guides we must adhere to?)*
> **Answer:**
>Byggnad, grey color with some slightly darker tones, in Nordic style
>Logo can be BYGG shaped into 4 buildings representing 4 letters

**7.3 Can you provide 2-3 examples of websites (crypto or non-crypto) that you like?**
*(Please explain what you like about them—e.g., "I like the simplicity of X" or "I like the data visualization on Y".)*
> **Answer:**
>MakerDAO — governance clarity

Aave — risk transparency

BlackRock product pages — institutional tone
>

---

## 8. Success Metrics
**What does "Success" look like 12 months from now?**
*(e.g., "Property is fully renovated and rented," or "Token market cap reaches $X"?)*
> **Answer:**
>minimum 2 properties acquired and rented. maximum target of 4 properties.
>
## 9. Capital Lifecycle
>
Capital raised on-chain

Capital deployed off-chain

Cash flows generated

Surplus routed on-chain

Capital recycled or retained

## 10. Events that will be considered and classified as emergency
>
Capital deployment pauses

Surplus distributions halted

Treasury ring-fenced

Governance notified

## 11. Disclaimer
>
This protocol:

Does not represent property ownership

Does not guarantee returns

Does not provide investment advice

Is subject to real-world risks

Participants engage at their own risk.

## 12. Final Note (Founder-Level)

This PRD now describes a project that:

Can survive regulation

Can survive bear markets

Can scale responsibly

Can attract serious capital

A legally separated

risk-disciplined

capital-first

real-yield crypto protocol

It is not a tokenized REIT.
It is on-chain private capital infrastructure.