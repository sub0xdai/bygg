<script lang="ts">
	import type { ChartDataPoint } from '$lib/types';
	import { formatSOL } from '$lib/utils/formatters';

	interface Props {
		data: ChartDataPoint[];
	}

	let { data }: Props = $props();

	const maxValue = $derived(Math.max(...data.map((d) => d.value)));
	const minValue = $derived(Math.min(...data.map((d) => d.value)));
	const range = $derived(maxValue - minValue);

	const getX = (index: number) => (index / (data.length - 1)) * 100;
	const getY = (value: number) => ((maxValue - value) / range) * 100;

	const pathData = $derived(
		data.map((point, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(point.value)}`).join(' ')
	);
</script>

<div class="chart-container">
	<div class="chart-header">
		<h3 class="chart-title">Surplus Yield History</h3>
		<span class="chart-subtitle">Last 6 months</span>
	</div>

	<svg viewBox="0 0 100 100" preserveAspectRatio="none" class="chart-svg">
		<!-- Grid lines -->
		<line x1="0" y1="25" x2="100" y2="25" class="grid-line" />
		<line x1="0" y1="50" x2="100" y2="50" class="grid-line" />
		<line x1="0" y1="75" x2="100" y2="75" class="grid-line" />

		<!-- Area fill -->
		<path
			d="{pathData} L 100 100 L 0 100 Z"
			class="chart-area"
			fill="url(#areaGradient)"
			opacity="0.2"
		/>

		<!-- Line -->
		<path d={pathData} class="chart-line" fill="none" />

		<defs>
			<linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stop-color="var(--color-creme-brulee)" stop-opacity="0.3" />
				<stop offset="100%" stop-color="var(--color-creme-brulee)" stop-opacity="0" />
			</linearGradient>
		</defs>
	</svg>

	<div class="chart-labels">
		<span class="axis-label">{formatSOL(minValue)} SOL</span>
		<span class="axis-label">{formatSOL(maxValue)} SOL</span>
	</div>
</div>

<style>
	.chart-container {
		background-color: var(--color-au-lait);
		border: 1px solid var(--color-lunar-eclipse);
		border-radius: var(--radius-sm);
		padding: var(--spacing-lg);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.chart-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.chart-title {
		font-family: var(--font-heading);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		color: var(--color-inkwell);
	}

	.chart-subtitle {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-lunar-eclipse);
	}

	.chart-svg {
		width: 100%;
		height: 200px;
	}

	.grid-line {
		stroke: var(--color-lunar-eclipse);
		stroke-width: 0.2;
		opacity: 0.3;
	}

	.chart-line {
		stroke: var(--color-creme-brulee);
		stroke-width: 0.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.chart-labels {
		display: flex;
		justify-content: space-between;
		padding-top: var(--spacing-xs);
	}

	.axis-label {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
	}
</style>