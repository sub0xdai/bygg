/**
 * Type definitions for Byggnad protocol
 * These will be augmented by generated types from the Anchor IDL
 */

export interface Treasury {
  authority: string;
  deployedCapital: bigint;
  reserveBalance: bigint;
  totalDistributions: bigint;
  deploymentCount: number;
  lastUpdated: bigint;
  bump: number;
}

export interface Proposal {
  proposalId: bigint;
  proposer: string;
  title: string;
  description: string;
  votesFor: bigint;
  votesAgainst: bigint;
  threshold: number;
  startsAt: bigint;
  endsAt: bigint;
  executed: boolean;
  bump: number;
}

export interface VoteRecord {
  proposal: string;
  voter: string;
  weight: bigint;
  support: boolean;
  votedAt: bigint;
  bump: number;
}

export interface Deployment {
  deploymentId: bigint;
  amount: bigint;
  recipient: string;
  purpose: string;
  proposal: string | null;
  deployedAt: bigint;
  active: boolean;
  bump: number;
}

export type ProposalStatus = 'active' | 'passed' | 'rejected' | 'executed';
