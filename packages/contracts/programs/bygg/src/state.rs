use anchor_lang::prelude::*;

/// Protocol treasury account
#[account]
#[derive(Default)]
pub struct Treasury {
    /// Authority that can manage the treasury
    pub authority: Pubkey,
    /// Total capital deployed to properties
    pub deployed_capital: u64,
    /// Reserve balance held in treasury
    pub reserve_balance: u64,
    /// Total distributions made to date
    pub total_distributions: u64,
    /// Number of active deployments
    pub deployment_count: u32,
    /// Timestamp of last update
    pub last_updated: i64,
    /// Bump seed for PDA
    pub bump: u8,
}

impl Treasury {
    pub const LEN: usize = 8 + // discriminator
        32 + // authority
        8 +  // deployed_capital
        8 +  // reserve_balance
        8 +  // total_distributions
        4 +  // deployment_count
        8 +  // last_updated
        1;   // bump
}

/// Governance proposal
#[account]
pub struct Proposal {
    /// Unique proposal identifier
    pub proposal_id: u64,
    /// Proposer's public key
    pub proposer: Pubkey,
    /// Title (max 64 chars)
    pub title: String,
    /// Description (max 256 chars)
    pub description: String,
    /// Votes in favor (token-weighted)
    pub votes_for: u64,
    /// Votes against (token-weighted)
    pub votes_against: u64,
    /// Required threshold (50 = simple majority, 60 = supermajority)
    pub threshold: u8,
    /// Voting start timestamp
    pub starts_at: i64,
    /// Voting end timestamp
    pub ends_at: i64,
    /// Whether proposal has been executed
    pub executed: bool,
    /// Bump seed for PDA
    pub bump: u8,
}

impl Proposal {
    pub const LEN: usize = 8 +  // discriminator
        8 +   // proposal_id
        32 +  // proposer
        (4 + 64) +  // title (string prefix + max chars)
        (4 + 256) + // description (string prefix + max chars)
        8 +   // votes_for
        8 +   // votes_against
        1 +   // threshold
        8 +   // starts_at
        8 +   // ends_at
        1 +   // executed
        1;    // bump
}

/// Individual vote record
#[account]
pub struct VoteRecord {
    /// The proposal being voted on
    pub proposal: Pubkey,
    /// The voter
    pub voter: Pubkey,
    /// Vote weight (based on token balance)
    pub weight: u64,
    /// Support (true = for, false = against)
    pub support: bool,
    /// Timestamp of vote
    pub voted_at: i64,
    /// Bump seed for PDA
    pub bump: u8,
}

impl VoteRecord {
    pub const LEN: usize = 8 + // discriminator
        32 + // proposal
        32 + // voter
        8 +  // weight
        1 +  // support
        8 +  // voted_at
        1;   // bump
}

/// Capital deployment record
#[account]
pub struct Deployment {
    /// Unique deployment identifier
    pub deployment_id: u64,
    /// Amount deployed in lamports
    pub amount: u64,
    /// Off-chain recipient identifier
    pub recipient: String,
    /// Purpose of deployment
    pub purpose: String,
    /// Proposal that authorized this (if any)
    pub proposal: Option<Pubkey>,
    /// Timestamp of deployment
    pub deployed_at: i64,
    /// Whether deployment is active
    pub active: bool,
    /// Bump seed for PDA
    pub bump: u8,
}

impl Deployment {
    pub const LEN: usize = 8 +  // discriminator
        8 +   // deployment_id
        8 +   // amount
        (4 + 64) +  // recipient
        (4 + 128) + // purpose
        (1 + 32) +  // proposal (Option)
        8 +   // deployed_at
        1 +   // active
        1;    // bump
}
