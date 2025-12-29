<script lang="ts">
	import { Wallet } from 'lucide-svelte';

	const navItems = ['Treasury', 'Governance', 'Property Portfolio', 'Docs'];
</script>

<header class="header">
	<div class="header-container">
		<a href="/" class="logo">
			<img src="/logo.svg" alt="Byggnad" class="logo-icon" />
			<span class="logo-text">BYGGNAD</span>
		</a>

		<nav class="nav">
			{#each navItems as item}
				<a href="#{item.toLowerCase().replace(' ', '-')}" class="nav-link">{item}</a>
			{/each}
		</nav>

		<button class="wallet-button">
			<Wallet size={18} />
			<span>Connect Wallet</span>
		</button>
	</div>
</header>

<style>
	.header {
		background-color: var(--color-au-lait);
		border-bottom: 1px solid var(--color-lunar-eclipse);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 var(--spacing-2xl);
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-2xl);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		text-decoration: none;
	}

	.logo-icon {
		width: 24px;
		height: 36px;
	}

	.logo-text {
		font-family: var(--font-heading);
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-wider);
		color: var(--color-inkwell);
	}

	.nav {
		display: flex;
		align-items: center;
		gap: var(--spacing-2xl);
		flex: 1;
		justify-content: center;
	}

	.nav-link {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-regular);
		color: var(--color-inkwell);
		text-decoration: none;
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav-link:hover {
		color: var(--color-creme-brulee);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 1px;
		background-color: var(--color-creme-brulee);
		transition: width var(--transition-base);
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.wallet-button {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-lg);
		background-color: var(--color-creme-brulee);
		color: var(--color-au-lait);
		border: none;
		border-radius: var(--radius-xs);
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.wallet-button:hover {
		filter: brightness(1.1);
		transform: translateY(-1px);
	}

	.wallet-button:active {
		transform: translateY(0);
	}
</style>