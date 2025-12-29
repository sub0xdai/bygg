<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/styles/design-tokens.css';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Byggnad - Capital-as-a-Service Protocol</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Lato:wght@300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:global(body) {
		margin: 0;
		font-family: var(--font-body);
		background-color: var(--color-au-lait);
		color: var(--color-inkwell);
		font-weight: var(--font-weight-regular);
		line-height: var(--line-height-base);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: var(--font-heading);
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-tight);
		margin: 0;
	}

	:global(p) {
		margin: 0;
	}
</style>
