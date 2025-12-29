<script lang="ts">
	import LandingNav from '$lib/components/LandingNav.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProcessFlow from '$lib/components/ProcessFlow.svelte';
	import GovernanceSection from '$lib/components/GovernanceSection.svelte';
</script>

<div class="landing-page">
	<LandingNav />

	<HeroSection />

	<ProcessFlow />

	<GovernanceSection />

	<footer class="footer">
		<div class="footer-content">
			<p class="disclaimer">
				This protocol does not represent property ownership, does not guarantee returns, and is
				subject to real-world risks. Participants engage at their own risk. This is on-chain private
				capital infrastructure, not a tokenized REIT.
			</p>
			<div class="footer-links">
				<a href="#whitepaper" class="footer-link">Whitepaper</a>
				<span class="separator">•</span>
				<a href="#docs" class="footer-link">Documentation</a>
				<span class="separator">•</span>
				<a href="#terms" class="footer-link">Terms</a>
				<span class="separator">•</span>
				<a href="#privacy" class="footer-link">Privacy</a>
				<span class="separator">•</span>
				<a href="/dashboard" class="footer-link">Dashboard</a>
			</div>
			<p class="copyright">© 2024 Byggnad Protocol. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.landing-page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: var(--color-au-lait);
	}

	.footer {
		background-color: var(--color-au-lait);
		border-top: 1px solid var(--color-lunar-eclipse);
		padding: var(--spacing-3xl) var(--spacing-2xl);
		margin-top: var(--spacing-3xl);
	}

	.footer-content {
		max-width: 1440px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.disclaimer {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		text-align: center;
		max-width: 720px;
		line-height: var(--line-height-relaxed);
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		flex-wrap: wrap;
		justify-content: center;
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

	.copyright {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		opacity: 0.7;
	}

	@media (max-width: 640px) {
		.footer {
			padding: var(--spacing-2xl) var(--spacing-lg);
		}
	}
</style>