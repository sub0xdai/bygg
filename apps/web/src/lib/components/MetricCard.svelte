<script lang="ts">
	import type { MetricData } from '$lib/types';

	interface Props {
		metric: MetricData;
	}

	let { metric }: Props = $props();
</script>

<div class="metric-card">
	<div class="label">{metric.label}</div>
	<div class="value-container">
		<span class="value">{metric.value}</span>
		{#if metric.unit}
			<span class="unit">{metric.unit}</span>
		{/if}
	</div>
	{#if metric.subtitle}
		<div class="subtitle">{metric.subtitle}</div>
	{/if}
</div>

<style>
	.metric-card {
		background-color: var(--color-au-lait);
		border: var(--border-structural);
		border-radius: var(--radius-sm);
		padding: var(--spacing-lg);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.label {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--letter-spacing-widest);
		text-transform: uppercase;
		color: var(--color-lunar-eclipse);
	}

	.value-container {
		display: flex;
		align-items: baseline;
		gap: var(--spacing-xs);
	}

	.value {
		font-family: var(--font-heading);
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-inkwell);
		letter-spacing: var(--letter-spacing-tight);
	}

	.unit {
		font-family: var(--font-heading);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		color: var(--color-lunar-eclipse);
	}

	.subtitle {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		opacity: var(--opacity-subtle);
	}
</style>