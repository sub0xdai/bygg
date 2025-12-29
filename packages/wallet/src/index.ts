/**
 * @bygg/wallet
 *
 * Custom Svelte wallet adapter for the Byggnad protocol.
 * Provides reactive stores and components for wallet connection.
 */

export { wallet, connect, disconnect, signMessage } from './store.svelte';
export type { WalletState, WalletAdapter } from './types';
