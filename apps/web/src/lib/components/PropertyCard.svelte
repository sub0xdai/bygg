<script lang="ts">
	import type { PropertyDeployment } from '$lib/types';
	import { formatCurrency, formatPercentage } from '$lib/utils/formatters';
	import { Building2 } from 'lucide-svelte';

	interface Props {
		property: PropertyDeployment;
	}

	let { property }: Props = $props();

	const statusLabels: Record<string, string> = {
		active: 'Active',
		funded: 'Funded',
		'under-review': 'Under Review'
	};
</script>

<div class="property-card">
	<div class="property-illustration">
		{#if property.imageUrl}
			<img
				src={property.imageUrl}
				alt="Building architecture facade for {property.name}, provided by GDJ on Pixabay"
				class="building-svg"
			/>
		{:else}
			<div class="placeholder-icon">
				<Building2 size={48} color="var(--color-lunar-eclipse)" />
			</div>
		{/if}
	</div>

	<div class="property-details">
		<h3 class="property-name">{property.name}</h3>
		<p class="property-location">{property.location}</p>

		<div class="property-stats">
			<div class="stat">
				<span class="stat-label">Capital Deployed</span>
				<span class="stat-value">{formatCurrency(property.capitalDeployed)}</span>
			</div>
			<div class="stat">
				<span class="stat-label">Rental Yield</span>
				<span class="stat-value">{formatPercentage(property.rentalYield)}</span>
			</div>
		</div>

		<div class="property-status">
			<span class="status-badge status-{property.status}">{statusLabels[property.status]}</span>
		</div>
	</div>
</div>

<style>
	.property-card {
		background-color: var(--color-au-lait);
		border: var(--border-structural);
		border-radius: var(--radius-sm);
		overflow: hidden;
		transition: border-color var(--transition-base);
		cursor: pointer;
		position: relative;
	}

	.property-card:hover {
		border-color: var(--color-nordic-blue);
	}

	.property-illustration {
		height: 180px;
		background-color: rgba(74, 107, 124, 0.04);
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--color-lunar-eclipse);
		padding: var(--spacing-lg);
	}

	.building-svg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.placeholder-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.property-details {
		padding: var(--spacing-lg);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.property-name {
		font-family: var(--font-heading);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		color: var(--color-inkwell);
	}

	.property-location {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		opacity: var(--opacity-subtle);
		margin-top: calc(var(--spacing-xs) * -1);
	}

	.property-stats {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		padding-top: var(--spacing-sm);
		border-top: var(--border-structural-light);
	}

	.stat {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.stat-label {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--letter-spacing-widest);
		text-transform: uppercase;
		color: var(--color-lunar-eclipse);
	}

	.stat-value {
		font-family: var(--font-heading);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		color: var(--color-inkwell);
	}

	.property-status {
		padding-top: var(--spacing-xs);
	}

	.status-badge {
		display: inline-block;
		padding: 4px var(--spacing-sm);
		border-radius: var(--radius-xs);
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
	}

	.status-active {
		background-color: rgba(162, 123, 91, 0.15);
		color: var(--color-creme-brulee);
	}

	.status-funded {
		background-color: rgba(63, 78, 79, 0.15);
		color: var(--color-lunar-eclipse);
	}

	.status-under-review {
		background-color: rgba(63, 78, 79, 0.1);
		color: var(--color-lunar-eclipse);
	}
</style>