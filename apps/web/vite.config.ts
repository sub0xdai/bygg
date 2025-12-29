import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.BROWSER': true,
		global: 'globalThis'
	},
	optimizeDeps: {
		include: [],
		exclude: ['@solana/web3.js', '@bygg/wallet'],
		esbuildOptions: {
			target: 'esnext'
		}
	},
	resolve: {
		conditions: ['browser', 'module', 'import', 'default']
	},
	build: {
		target: 'esnext',
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
});
