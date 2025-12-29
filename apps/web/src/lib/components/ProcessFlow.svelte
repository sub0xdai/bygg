<script lang="ts">
	import { Coins, SendHorizontal, TrendingUp, Network } from 'lucide-svelte';

	const steps = [
		{
			phase: 'Phase 1',
			title: 'Raise',
			description:
				'Pool Solana-native capital into the governance-gated treasury through transparent on-chain mechanisms.',
			icon: Coins
		},
		{
			phase: 'Phase 2',
			title: 'Inject',
			description:
				'Deploy capital into vetted Scottish property companies as contractual counterparty, not owner.',
			icon: SendHorizontal
		},
		{
			phase: 'Phase 3',
			title: 'Harvest',
			description:
				'Receive contractual surplus from property rental yields and profit-based distributions.',
			icon: TrendingUp
		},
		{
			phase: 'Phase 4',
			title: 'Distribute',
			description:
				'Route yield back to on-chain participants or recycle capital via governance decisions.',
			icon: Network
		}
	];
</script>

<section class="process-section">
	<div class="section-container">
		<h2 class="section-title">The Protocol Loop</h2>
		<p class="section-subtitle">
			A transparent, four-phase cycle designed for sustainable capital deployment and yield
			generation.
		</p>

		<div class="process-grid">
			{#each steps as step, index}
				<div class="process-card">
					<div class="card-header">
						<div class="icon-container">
							<svelte:component this={step.icon} size={32} color="var(--color-creme-brulee)" />
						</div>
						<span class="phase-label">{step.phase}</span>
					</div>

					<h3 class="process-title">{step.title}</h3>
					<p class="process-description">{step.description}</p>

					{#if index < steps.length - 1}
						<div class="arrow-connector">→</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.process-section {
		background-color: var(--color-au-lait);
		padding: var(--spacing-3xl) 0;
	}

	.section-container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 var(--spacing-2xl);
	}

	.section-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-inkwell);
		text-align: center;
		margin-bottom: var(--spacing-md);
	}

	.section-subtitle {
		font-family: var(--font-body);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		text-align: center;
		max-width: 720px;
		margin: 0 auto var(--spacing-3xl);
		line-height: var(--line-height-relaxed);
	}

	.process-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
	}

	.process-card {
		background-color: var(--color-au-lait);
		border: var(--border-structural);
		border-radius: var(--radius-sm);
		padding: var(--spacing-xl);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		position: relative;
		transition: border-color var(--transition-base);
	}

	.process-card:hover {
		border-color: var(--color-nordic-blue);
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--spacing-sm);
	}

	.icon-container {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background-color: rgba(74, 107, 124, 0.08);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.phase-label {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--letter-spacing-widest);
		text-transform: uppercase;
		color: var(--color-lunar-eclipse);
	}

	.process-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-semibold);
		color: var(--color-inkwell);
	}

	.process-description {
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		opacity: var(--opacity-medium);
		line-height: var(--line-height-relaxed);
	}

	.arrow-connector {
		position: absolute;
		right: calc(var(--spacing-lg) * -1);
		top: 50%;
		transform: translateY(-50%);
		font-size: var(--font-size-2xl);
		color: var(--color-creme-brulee);
		font-weight: var(--font-weight-light);
	}

	@media (max-width: 1024px) {
		.arrow-connector {
			display: none;
		}
	}

	@media (max-width: 1024px) {
		.arrow-connector {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.section-container {
			padding: 0 var(--spacing-lg);
		}

		.process-grid {
			grid-template-columns: 1fr;
		}
	}
</style>