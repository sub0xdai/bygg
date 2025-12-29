use anchor_lang::prelude::*;

pub mod instructions;
pub mod state;

use instructions::*;

declare_id!("Bygg111111111111111111111111111111111111111");

#[program]
pub mod bygg {
    use super::*;

    /// Initialize the protocol treasury
    pub fn initialize_treasury(ctx: Context<InitializeTreasury>) -> Result<()> {
        instructions::initialize_treasury(ctx)
    }

    /// Create a new governance proposal
    pub fn create_proposal(
        ctx: Context<CreateProposal>,
        title: String,
        description: String,
        threshold: u8,
        voting_period: i64,
    ) -> Result<()> {
        instructions::create_proposal(ctx, title, description, threshold, voting_period)
    }

    /// Cast a vote on a proposal
    pub fn cast_vote(ctx: Context<CastVote>, support: bool) -> Result<()> {
        instructions::cast_vote(ctx, support)
    }

    /// Execute a passed proposal
    pub fn execute_proposal(ctx: Context<ExecuteProposal>) -> Result<()> {
        instructions::execute_proposal(ctx)
    }

    /// Record a capital deployment
    pub fn record_deployment(
        ctx: Context<RecordDeployment>,
        amount: u64,
        recipient: String,
        purpose: String,
    ) -> Result<()> {
        instructions::record_deployment(ctx, amount, recipient, purpose)
    }

    /// Record surplus distribution
    pub fn record_distribution(ctx: Context<RecordDistribution>, amount: u64) -> Result<()> {
        instructions::record_distribution(ctx, amount)
    }
}
