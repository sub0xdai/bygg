<script lang="ts">
	const protocolTruths = [
		{
			title: 'Non-Ownership Structure',
			description: 'Protocol never owns property — operates as capital counterparty only.'
		},
		{
			title: 'Supermajority Governance',
			description: '60% supermajority required for all capital deployment decisions.'
		},
		{
			title: 'Zero Token-Layer Leverage',
			description:
				'No leverage at the token layer. All risk confined to off-chain property operations.'
		},
		{
			title: 'Contractual Transparency',
			description:
				'All property partnerships governed by transparent, auditable legal agreements.'
		},
		{
			title: 'Surplus-Only Distribution',
			description: 'Protocol receives only contractual surplus — no fixed payment guarantees.'
		},
		{
			title: 'Governance-Gated Capital',
			description:
				'Every deployment, refinancing, and recycling decision requires token-holder approval.'
		}
	];
</script>

<section class="governance-section">
	<div class="section-container">
		<div class="header-block">
			<h2 class="section-title">Protocol Invariants</h2>
			<p class="section-description">
				Structural truths designed for institutional trust, operational discipline, and long-term
				sustainability.
			</p>
		</div>

		<div class="truths-grid">
			{#each protocolTruths as truth, index}
				<div class="truth-card">
					<div class="truth-number">{String(index + 1).padStart(2, '0')}</div>
					<div class="truth-content">
						<h3 class="truth-title">{truth.title}</h3>
						<p class="truth-description">{truth.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.governance-section {
		background-color: rgba(74, 107, 124, 0.03);
		padding: var(--spacing-3xl) 0;
	}

	.section-container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 var(--spacing-2xl);
	}

	.header-block {
		text-align: center;
		margin-bottom: var(--spacing-3xl);
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.section-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-inkwell);
		margin-bottom: var(--spacing-md);
	}

	.section-description {
		font-family: var(--font-body);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		line-height: var(--line-height-relaxed);
	}

	.truths-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: var(--spacing-lg);
	}

	.truth-card {
		background-color: var(--color-au-lait);
		border: var(--border-structural);
		border-radius: var(--radius-sm);
		padding: var(--spacing-xl);
		display: flex;
		gap: var(--spacing-md);
		transition: border-color var(--transition-base);
	}

	.truth-card:hover {
		border-color: var(--color-nordic-blue);
	}

	.truth-number {
		font-family: var(--font-heading);
		font-size: var(--font-size-2xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-nordic-blue);
		opacity: 0.4;
		flex-shrink: 0;
	}

	.truth-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.truth-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		color: var(--color-inkwell);
	}

	.truth-description {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		opacity: var(--opacity-medium);
		line-height: var(--line-height-relaxed);
	}

	@media (max-width: 768px) {
		.section-container {
			padding: 0 var(--spacing-lg);
		}

		.truths-grid {
			grid-template-columns: 1fr;
		}
	}
</style>