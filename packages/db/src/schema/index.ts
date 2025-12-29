import {
  pgTable,
  uuid,
  text,
  timestamp,
  numeric,
  integer,
  boolean,
  jsonb,
} from 'drizzle-orm/pg-core';

// Governance proposals
export const proposals = pgTable('proposals', {
  id: uuid('id').primaryKey().defaultRandom(),
  onChainId: text('on_chain_id').unique().notNull(),
  title: text('title').notNull(),
  description: text('description'),
  proposer: text('proposer').notNull(),
  status: text('status').notNull().default('active'),
  votesFor: numeric('votes_for').notNull().default('0'),
  votesAgainst: numeric('votes_against').notNull().default('0'),
  threshold: numeric('threshold').notNull(),
  startsAt: timestamp('starts_at').notNull(),
  endsAt: timestamp('ends_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Individual votes
export const votes = pgTable('votes', {
  id: uuid('id').primaryKey().defaultRandom(),
  proposalId: uuid('proposal_id')
    .references(() => proposals.id)
    .notNull(),
  voter: text('voter').notNull(),
  amount: numeric('amount').notNull(),
  support: boolean('support').notNull(),
  txSignature: text('tx_signature').unique().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Capital deployments
export const deployments = pgTable('deployments', {
  id: uuid('id').primaryKey().defaultRandom(),
  onChainId: text('on_chain_id').unique().notNull(),
  proposalId: uuid('proposal_id').references(() => proposals.id),
  amount: numeric('amount').notNull(),
  recipient: text('recipient').notNull(),
  purpose: text('purpose').notNull(),
  status: text('status').notNull().default('pending'),
  txSignature: text('tx_signature'),
  executedAt: timestamp('executed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Off-chain attestations (property reports, rent statements)
export const attestations = pgTable('attestations', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: text('type').notNull(), // 'rent_statement' | 'property_report' | 'audit'
  period: text('period').notNull(), // e.g., '2024-Q1'
  ipfsHash: text('ipfs_hash'),
  arweaveId: text('arweave_id'),
  data: jsonb('data'),
  attestedBy: text('attested_by').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Treasury snapshots (time-series for NAV tracking)
export const treasurySnapshots = pgTable('treasury_snapshots', {
  id: uuid('id').primaryKey().defaultRandom(),
  timestamp: timestamp('timestamp').notNull(),
  totalValue: numeric('total_value').notNull(),
  deployedCapital: numeric('deployed_capital').notNull(),
  reserveBalance: numeric('reserve_balance').notNull(),
  pendingDistributions: numeric('pending_distributions').notNull().default('0'),
  slot: integer('slot').notNull(),
});

// Type exports
export type Proposal = typeof proposals.$inferSelect;
export type NewProposal = typeof proposals.$inferInsert;
export type Vote = typeof votes.$inferSelect;
export type NewVote = typeof votes.$inferInsert;
export type Deployment = typeof deployments.$inferSelect;
export type NewDeployment = typeof deployments.$inferInsert;
export type Attestation = typeof attestations.$inferSelect;
export type NewAttestation = typeof attestations.$inferInsert;
export type TreasurySnapshot = typeof treasurySnapshots.$inferSelect;
export type NewTreasurySnapshot = typeof treasurySnapshots.$inferInsert;
