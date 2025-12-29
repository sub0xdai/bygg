<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import MetricCard from '$lib/components/MetricCard.svelte';
	import ProposalCard from '$lib/components/ProposalCard.svelte';
	import PropertyCard from '$lib/components/PropertyCard.svelte';
	import SimpleChart from '$lib/components/SimpleChart.svelte';
	import {
		getDashboardMetrics,
		getGovernanceProposals,
		getPropertyDeployments,
		getSurplusYieldData
	} from '$lib/data/mockData';

	const metrics = getDashboardMetrics();
	const proposals = getGovernanceProposals();
	const properties = getPropertyDeployments();
	const chartData = getSurplusYieldData();
</script>

<div class="dashboard">
	<Header />

	<main class="main-content">
		<section class="section">
			<h2 class="section-title">At a Glance</h2>
			<div class="metrics-grid">
				{#each metrics as metric}
					<MetricCard {metric} />
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Active Proposals</h2>
			<div class="proposals-list">
				{#each proposals as proposal}
					<ProposalCard {proposal} />
				{/each}
			</div>
		</section>

		<section class="section">
			<SimpleChart data={chartData} />
		</section>

		<section class="section">
			<h2 class="section-title">Deployment Sites</h2>
			<div class="properties-grid">
				{#each properties as property}
					<PropertyCard {property} />
				{/each}
			</div>
		</section>
	</main>

	<footer class="footer">
		<div class="footer-content">
			<p class="disclaimer">
				This protocol does not represent property ownership, does not guarantee returns, and is
				subject to real-world risks. Participants engage at their own risk.
			</p>
			<div class="footer-links">
				<a href="/" class="footer-link">Home</a>
				<span class="separator">•</span>
				<a href="#docs" class="footer-link">Documentation</a>
				<span class="separator">•</span>
				<a href="#terms" class="footer-link">Terms</a>
				<span class="separator">•</span>
				<a href="#privacy" class="footer-link">Privacy</a>
			</div>
		</div>
	</footer>
</div>

<style>
	.dashboard {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: var(--color-au-lait);
	}

	.main-content {
		max-width: 1440px;
		width: 100%;
		margin: 0 auto;
		padding: var(--spacing-3xl) var(--spacing-2xl);
		flex: 1;
	}

	.section {
		margin-bottom: var(--spacing-3xl);
	}

	.section:last-child {
		margin-bottom: 0;
	}

	.section-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wider);
		text-transform: uppercase;
		color: var(--color-lunar-eclipse);
		margin-bottom: var(--spacing-lg);
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
	}

	.proposals-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.properties-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--spacing-lg);
	}

	.footer {
		background-color: var(--color-au-lait);
		border-top: 1px solid var(--color-lunar-eclipse);
		padding: var(--spacing-2xl);
		margin-top: auto;
	}

	.footer-content {
		max-width: 1440px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-md);
	}

	.disclaimer {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		text-align: center;
		max-width: 600px;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
	}

	.footer-link {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-regular);
		color: var(--color-lunar-eclipse);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.footer-link:hover {
		color: var(--color-creme-brulee);
	}

	.separator {
		color: var(--color-lunar-eclipse);
		opacity: 0.5;
	}

	@media (max-width: 768px) {
		.metrics-grid {
			grid-template-columns: 1fr;
		}

		.properties-grid {
			grid-template-columns: 1fr;
		}

		.main-content {
			padding: var(--spacing-lg);
		}
	}
</style>