<div class="hero">
	<div class="hero-content">
		<h1 class="hero-headline">Architecting On-Chain Capital for Scottish Property.</h1>
		<p class="hero-subheadline">
			Byggnad routes Solana-native liquidity into independently operated Scottish residential
			portfolios, delivering real-world yield through contractual rent-based surplus.
		</p>
		<div class="hero-actions">
			<a href="/dashboard" class="cta-primary">Enter Dashboard</a>
			<a href="#whitepaper" class="cta-secondary">Read Whitepaper</a>
		</div>
	</div>

	<div class="hero-visual">
		<div class="blueprint-overlay"></div>
		<img
			src="https://images.pexels.com/photos/14905339/pexels-photo-14905339.jpeg"
			alt="Stunning historical architecture in Edinburgh showcasing classic Georgian style, photo by Muhammed Zahid Bulut on Pexels"
			class="hero-image"
			style="background-color: #67625C"
		/>
	</div>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-3xl);
		align-items: center;
		padding: var(--spacing-3xl);
		max-width: 1440px;
		margin: 0 auto;
		min-height: calc(100vh - 72px);
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.hero-headline {
		font-family: var(--font-heading);
		font-size: var(--font-size-4xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-inkwell);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
	}

	.hero-subheadline {
		font-family: var(--font-body);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-light);
		color: var(--color-lunar-eclipse);
		line-height: var(--line-height-relaxed);
		max-width: 560px;
	}

	.hero-actions {
		display: flex;
		gap: var(--spacing-md);
		margin-top: var(--spacing-md);
	}

	.cta-primary {
		padding: var(--spacing-md) var(--spacing-xl);
		background-color: var(--color-creme-brulee);
		color: var(--color-au-lait);
		border: none;
		border-radius: var(--radius-xs);
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		cursor: pointer;
		transition: all var(--transition-fast);
		text-decoration: none;
		display: inline-block;
	}

	.cta-primary:hover {
		filter: brightness(1.1);
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.cta-secondary {
		padding: var(--spacing-md) var(--spacing-xl);
		background-color: transparent;
		color: var(--color-inkwell);
		border: 1px solid var(--color-inkwell);
		border-radius: var(--radius-xs);
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		cursor: pointer;
		transition: all var(--transition-fast);
		text-decoration: none;
		display: inline-block;
	}

	.cta-secondary:hover {
		background-color: var(--color-inkwell);
		color: var(--color-au-lait);
	}

	.hero-visual {
		position: relative;
		height: 600px;
		border-radius: var(--radius-sm);
		overflow: hidden;
		border: 1px solid var(--color-lunar-eclipse);
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.blueprint-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: repeating-linear-gradient(
				0deg,
				rgba(63, 78, 79, 0.08) 0px,
				transparent 1px,
				transparent 20px,
				rgba(63, 78, 79, 0.08) 21px
			),
			repeating-linear-gradient(
				90deg,
				rgba(63, 78, 79, 0.08) 0px,
				transparent 1px,
				transparent 20px,
				rgba(63, 78, 79, 0.08) 21px
			);
		pointer-events: none;
		z-index: 1;
	}

	@media (max-width: 1024px) {
		.hero {
			grid-template-columns: 1fr;
			padding: var(--spacing-2xl) var(--spacing-lg);
		}

		.hero-headline {
			font-size: var(--font-size-3xl);
		}

		.hero-visual {
			height: 400px;
		}
	}

	@media (max-width: 640px) {
		.hero-actions {
			flex-direction: column;
		}

		.cta-primary,
		.cta-secondary {
			width: 100%;
			text-align: center;
		}
	}
</style>