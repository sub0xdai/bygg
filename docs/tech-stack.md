# Byggnad Tech Stack

This document captures the architectural decisions for the Byggnad protocol implementation.

## Stack Overview

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | SvelteKit + Bun | Lean DX, fast runtime, native TypeScript |
| **Smart Contracts** | Anchor (Rust) | Security guardrails, auto-generated IDL/clients, industry standard |
| **Database** | PostgreSQL + TimescaleDB | Stability, JSONB flexibility, native time-series for NAV |
| **Indexing** | Helius Webhooks | Managed blockchain indexing, event-driven, minimal infra |
| **Document Storage** | IPFS/Arweave (canonical) + R2 (cache) | Immutable source of truth + fast dashboard access |
| **Hosting** | Railway | Native Bun support, managed Postgres, simple deploys |
| **Wallet Integration** | Custom Svelte adapter on `@solana/wallet-adapter-base` | Full control, brand-consistent UI, no community dependency |

---

## Monorepo Structure

```
bygg/
├── apps/
│   ├── web/                 # SvelteKit dashboard
│   └── indexer/             # Helius webhook receiver (Bun)
├── packages/
│   ├── contracts/           # Anchor programs
│   ├── sdk/                 # Generated TypeScript client (from Anchor IDL)
│   ├── db/                  # Drizzle schema + migrations
│   └── wallet/              # Custom Svelte wallet adapter
├── docs/                    # Specifications and design docs
├── turbo.json
├── package.json
└── bun.lockb
```

### Package Responsibilities

| Package | Purpose |
|---------|---------|
| `apps/web` | SvelteKit dashboard: NAV charts, governance UI, wallet connection |
| `apps/indexer` | Bun service receiving Helius webhooks, writes to Postgres |
| `packages/contracts` | Anchor programs: token, governance, capital deployment, treasury |
| `packages/sdk` | Auto-generated TypeScript client from Anchor IDL, shared by web + indexer |
| `packages/db` | Drizzle ORM schema, migrations, database utilities |
| `packages/wallet` | Custom Svelte stores wrapping `@solana/wallet-adapter-base` |

---

## Key Libraries

### Frontend (apps/web)
- `svelte` / `@sveltejs/kit` — UI framework
- `@solana/web3.js` — Solana blockchain client
- `@solana/wallet-adapter-base` — Wallet connection primitives
- `drizzle-orm` — Type-safe database queries
- `layerchart` or `pancake` — Svelte-native charting

### Indexer (apps/indexer)
- `hono` — Lightweight Bun-native HTTP framework
- `drizzle-orm` — Database writes
- `@solana/web3.js` — Transaction parsing

### Smart Contracts (packages/contracts)
- `anchor` — Solana program framework
- `solana-program` — Core Solana types
- `spl-token` — Token program interactions

### Database (packages/db)
- `drizzle-orm` — Schema definition and queries
- `drizzle-kit` — Migrations
- `postgres` — Bun-compatible Postgres driver

---

## Infrastructure

### Railway Services
| Service | Type | Notes |
|---------|------|-------|
| `web` | SvelteKit | Main dashboard |
| `indexer` | Bun service | Webhook receiver |
| `postgres` | Managed DB | TimescaleDB extension enabled |

### External Services
| Service | Purpose |
|---------|---------|
| Helius | Solana RPC + webhooks |
| IPFS/Arweave | Immutable document storage |
| Cloudflare R2 | Document cache CDN |

---

## Design Principles

These principles flow from the protocol specification:

1. **Durability over optimization** — Simple, proven tech. Add complexity only when needed.
2. **Transparency** — All on-chain calculations auditable. Clear data flow.
3. **No reflexivity** — System doesn't create circular capital incentives.
4. **Modularity** — Off-chain ops independent from on-chain protocol.
5. **Brand consistency** — Nordic minimalist, institutional tone throughout.

---

## Decision Log

| Date | Decision | Alternatives Considered | Rationale |
|------|----------|------------------------|-----------|
| 2024-12-28 | SvelteKit over React | React/Next.js | Better DX, leaner bundles, team preference |
| 2024-12-28 | Bun over Node | Node.js, Deno | Native TS, faster, simpler toolchain |
| 2024-12-28 | PostgreSQL only | Postgres+Redis, Supabase, SQLite | Stability, TimescaleDB for time-series, avoid premature complexity |
| 2024-12-28 | IPFS+R2 hybrid | IPFS only, S3 only | Immutable canonical + fast cache |
| 2024-12-28 | Anchor over native Rust | Native Solana programs | Security guardrails, IDL generation, auditor familiarity |
| 2024-12-28 | Helius over self-hosted indexer | Subsquid, direct RPC polling | Managed infra, event-driven, low volume = low cost |
| 2024-12-28 | Railway over Vercel/Cloudflare | Vercel, Cloudflare, self-hosted | Native Bun, managed Postgres, simple pricing |
| 2024-12-28 | Custom wallet adapter | svelte-on-solana, wallet-standard only | Full control, brand-consistent UI, no community dependency |
