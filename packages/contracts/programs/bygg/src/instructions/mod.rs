use anchor_lang::prelude::*;

use crate::state::*;

// ============================================================================
// Initialize Treasury
// ============================================================================

#[derive(Accounts)]
pub struct InitializeTreasury<'info> {
    #[account(
        init,
        payer = authority,
        space = Treasury::LEN,
        seeds = [b"treasury"],
        bump
    )]
    pub treasury: Account<'info, Treasury>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn initialize_treasury(ctx: Context<InitializeTreasury>) -> Result<()> {
    let treasury = &mut ctx.accounts.treasury;
    treasury.authority = ctx.accounts.authority.key();
    treasury.deployed_capital = 0;
    treasury.reserve_balance = 0;
    treasury.total_distributions = 0;
    treasury.deployment_count = 0;
    treasury.last_updated = Clock::get()?.unix_timestamp;
    treasury.bump = ctx.bumps.treasury;
    Ok(())
}

// ============================================================================
// Create Proposal
// ============================================================================

#[derive(Accounts)]
#[instruction(title: String, description: String)]
pub struct CreateProposal<'info> {
    #[account(
        init,
        payer = proposer,
        space = Proposal::LEN,
        seeds = [b"proposal", treasury.key().as_ref(), &treasury.deployment_count.to_le_bytes()],
        bump
    )]
    pub proposal: Account<'info, Proposal>,

    #[account(mut)]
    pub treasury: Account<'info, Treasury>,

    #[account(mut)]
    pub proposer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn create_proposal(
    ctx: Context<CreateProposal>,
    title: String,
    description: String,
    threshold: u8,
    voting_period: i64,
) -> Result<()> {
    require!(threshold >= 50 && threshold <= 100, ErrorCode::InvalidThreshold);
    require!(title.len() <= 64, ErrorCode::TitleTooLong);
    require!(description.len() <= 256, ErrorCode::DescriptionTooLong);

    let clock = Clock::get()?;
    let proposal = &mut ctx.accounts.proposal;

    proposal.proposal_id = ctx.accounts.treasury.deployment_count as u64;
    proposal.proposer = ctx.accounts.proposer.key();
    proposal.title = title;
    proposal.description = description;
    proposal.votes_for = 0;
    proposal.votes_against = 0;
    proposal.threshold = threshold;
    proposal.starts_at = clock.unix_timestamp;
    proposal.ends_at = clock.unix_timestamp + voting_period;
    proposal.executed = false;
    proposal.bump = ctx.bumps.proposal;

    Ok(())
}

// ============================================================================
// Cast Vote
// ============================================================================

#[derive(Accounts)]
pub struct CastVote<'info> {
    #[account(
        init,
        payer = voter,
        space = VoteRecord::LEN,
        seeds = [b"vote", proposal.key().as_ref(), voter.key().as_ref()],
        bump
    )]
    pub vote_record: Account<'info, VoteRecord>,

    #[account(mut)]
    pub proposal: Account<'info, Proposal>,

    #[account(mut)]
    pub voter: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn cast_vote(ctx: Context<CastVote>, support: bool) -> Result<()> {
    let clock = Clock::get()?;
    let proposal = &mut ctx.accounts.proposal;

    require!(clock.unix_timestamp >= proposal.starts_at, ErrorCode::VotingNotStarted);
    require!(clock.unix_timestamp <= proposal.ends_at, ErrorCode::VotingEnded);

    // TODO: Get actual token balance for vote weight
    let weight: u64 = 1;

    let vote_record = &mut ctx.accounts.vote_record;
    vote_record.proposal = proposal.key();
    vote_record.voter = ctx.accounts.voter.key();
    vote_record.weight = weight;
    vote_record.support = support;
    vote_record.voted_at = clock.unix_timestamp;
    vote_record.bump = ctx.bumps.vote_record;

    if support {
        proposal.votes_for = proposal.votes_for.checked_add(weight).unwrap();
    } else {
        proposal.votes_against = proposal.votes_against.checked_add(weight).unwrap();
    }

    Ok(())
}

// ============================================================================
// Execute Proposal
// ============================================================================

#[derive(Accounts)]
pub struct ExecuteProposal<'info> {
    #[account(mut)]
    pub proposal: Account<'info, Proposal>,

    #[account(mut)]
    pub treasury: Account<'info, Treasury>,

    pub executor: Signer<'info>,
}

pub fn execute_proposal(ctx: Context<ExecuteProposal>) -> Result<()> {
    let clock = Clock::get()?;
    let proposal = &mut ctx.accounts.proposal;

    require!(clock.unix_timestamp > proposal.ends_at, ErrorCode::VotingNotEnded);
    require!(!proposal.executed, ErrorCode::AlreadyExecuted);

    let total_votes = proposal.votes_for + proposal.votes_against;
    require!(total_votes > 0, ErrorCode::NoVotes);

    let approval_rate = (proposal.votes_for * 100) / total_votes;
    require!(approval_rate >= proposal.threshold as u64, ErrorCode::ThresholdNotMet);

    proposal.executed = true;

    Ok(())
}

// ============================================================================
// Record Deployment
// ============================================================================

#[derive(Accounts)]
#[instruction(amount: u64, recipient: String, purpose: String)]
pub struct RecordDeployment<'info> {
    #[account(
        init,
        payer = authority,
        space = Deployment::LEN,
        seeds = [b"deployment", treasury.key().as_ref(), &treasury.deployment_count.to_le_bytes()],
        bump
    )]
    pub deployment: Account<'info, Deployment>,

    #[account(
        mut,
        has_one = authority
    )]
    pub treasury: Account<'info, Treasury>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn record_deployment(
    ctx: Context<RecordDeployment>,
    amount: u64,
    recipient: String,
    purpose: String,
) -> Result<()> {
    let clock = Clock::get()?;
    let treasury = &mut ctx.accounts.treasury;
    let deployment = &mut ctx.accounts.deployment;

    deployment.deployment_id = treasury.deployment_count as u64;
    deployment.amount = amount;
    deployment.recipient = recipient;
    deployment.purpose = purpose;
    deployment.proposal = None;
    deployment.deployed_at = clock.unix_timestamp;
    deployment.active = true;
    deployment.bump = ctx.bumps.deployment;

    treasury.deployed_capital = treasury.deployed_capital.checked_add(amount).unwrap();
    treasury.deployment_count = treasury.deployment_count.checked_add(1).unwrap();
    treasury.last_updated = clock.unix_timestamp;

    Ok(())
}

// ============================================================================
// Record Distribution
// ============================================================================

#[derive(Accounts)]
pub struct RecordDistribution<'info> {
    #[account(
        mut,
        has_one = authority
    )]
    pub treasury: Account<'info, Treasury>,

    pub authority: Signer<'info>,
}

pub fn record_distribution(ctx: Context<RecordDistribution>, amount: u64) -> Result<()> {
    let clock = Clock::get()?;
    let treasury = &mut ctx.accounts.treasury;

    treasury.total_distributions = treasury.total_distributions.checked_add(amount).unwrap();
    treasury.last_updated = clock.unix_timestamp;

    Ok(())
}

// ============================================================================
// Error Codes
// ============================================================================

#[error_code]
pub enum ErrorCode {
    #[msg("Threshold must be between 50 and 100")]
    InvalidThreshold,
    #[msg("Title exceeds maximum length of 64 characters")]
    TitleTooLong,
    #[msg("Description exceeds maximum length of 256 characters")]
    DescriptionTooLong,
    #[msg("Voting has not started yet")]
    VotingNotStarted,
    #[msg("Voting period has ended")]
    VotingEnded,
    #[msg("Voting period has not ended yet")]
    VotingNotEnded,
    #[msg("Proposal has already been executed")]
    AlreadyExecuted,
    #[msg("No votes have been cast")]
    NoVotes,
    #[msg("Approval threshold not met")]
    ThresholdNotMet,
}
