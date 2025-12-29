<script lang="ts">
	import type { GovernanceProposal } from '$lib/types';
	import { formatCountdown } from '$lib/utils/formatters';

	interface Props {
		proposal: GovernanceProposal;
	}

	let { proposal }: Props = $props();

	const yesPercentage = $derived((proposal.votesYes / proposal.totalVotes) * 100);
	const noPercentage = $derived((proposal.votesNo / proposal.totalVotes) * 100);
	const abstainPercentage = $derived((proposal.votesAbstain / proposal.totalVotes) * 100);
	const meetsThreshold = $derived(yesPercentage >= proposal.threshold);
</script>

<div class="proposal-card">
	<div class="proposal-header">
		<h3 class="proposal-title">{proposal.title}</h3>
		<span class="time-remaining">{formatCountdown(proposal.daysRemaining)} remaining</span>
	</div>

	<p class="proposal-description">{proposal.description}</p>

	<div class="progress-section">
		<div class="progress-header">
			<span class="progress-label"
				>{proposal.threshold}% Supermajority {meetsThreshold ? '✓' : 'Required'}</span
			>
			<span class="progress-value">{yesPercentage.toFixed(1)}%</span>
		</div>
		<div class="progress-bar">
			<div class="progress-fill" style="width: {yesPercentage}%"></div>
		</div>
	</div>

	<div class="vote-stats">
		<div class="vote-stat">
			<span class="vote-label">Yes</span>
			<span class="vote-value">{proposal.votesYes.toLocaleString()}</span>
		</div>
		<div class="vote-stat">
			<span class="vote-label">No</span>
			<span class="vote-value">{proposal.votesNo.toLocaleString()}</span>
		</div>
		<div class="vote-stat">
			<span class="vote-label">Abstain</span>
			<span class="vote-value">{proposal.votesAbstain.toLocaleString()}</span>
		</div>
	</div>

	<div class="vote-actions">
		<button class="vote-button vote-yes">Vote Yes</button>
		<button class="vote-button vote-no">Vote No</button>
		<button class="vote-button vote-abstain">Abstain</button>
	</div>
</div>

<style>
	.proposal-card {
		background-color: var(--color-au-lait);
		border: var(--border-structural);
		border-radius: var(--radius-sm);
		padding: var(--spacing-lg);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		position: relative;
	}

	.proposal-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--spacing-md);
	}

	.proposal-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		color: var(--color-inkwell);
		flex: 1;
	}

	.time-remaining {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-regular);
		color: var(--color-lunar-eclipse);
		letter-spacing: var(--letter-spacing-widest);
		text-transform: uppercase;
		white-space: nowrap;
	}

	.proposal-description {
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		opacity: var(--opacity-medium);
		line-height: var(--line-height-relaxed);
	}

	.progress-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.progress-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.progress-label {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-regular);
		color: var(--color-inkwell);
	}

	.progress-value {
		font-family: var(--font-heading);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
		color: var(--color-creme-brulee);
	}

	.progress-bar {
		width: 100%;
		height: 8px;
		background-color: rgba(63, 78, 79, 0.15);
		border-radius: var(--radius-xs);
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background-color: var(--color-creme-brulee);
		transition: width var(--transition-base);
	}

	.vote-stats {
		display: flex;
		gap: var(--spacing-xl);
		padding-top: var(--spacing-sm);
		border-top: var(--border-structural-light);
	}

	.vote-stat {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.vote-label {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--letter-spacing-widest);
		text-transform: uppercase;
		color: var(--color-lunar-eclipse);
	}

	.vote-value {
		font-family: var(--font-heading);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		color: var(--color-inkwell);
	}

	.vote-actions {
		display: flex;
		gap: var(--spacing-sm);
		padding-top: var(--spacing-sm);
	}

	.vote-button {
		flex: 1;
		padding: var(--spacing-sm) var(--spacing-md);
		border: 1px solid var(--color-lunar-eclipse);
		background-color: transparent;
		color: var(--color-inkwell);
		border-radius: var(--radius-xs);
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.vote-button:hover {
		background-color: var(--color-lunar-eclipse);
		color: var(--color-au-lait);
	}

	.vote-yes:hover {
		background-color: var(--color-creme-brulee);
		border-color: var(--color-creme-brulee);
		color: var(--color-au-lait);
	}
</style>