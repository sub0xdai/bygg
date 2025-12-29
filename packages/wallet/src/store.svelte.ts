import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import type { PublicKey } from '@solana/web3.js';
import type { WalletAdapter, WalletState } from './types';

// Available wallet adapters
const adapters = [
  new PhantomWalletAdapter(),
  new BackpackWalletAdapter(),
];

// Reactive wallet state using Svelte 5 runes
let state = $state<WalletState>({
  adapter: null,
  publicKey: null,
  connected: false,
  connecting: false,
  disconnecting: false,
  error: null,
});

/**
 * Reactive wallet store
 */
export const wallet = {
  get adapter() { return state.adapter; },
  get publicKey() { return state.publicKey; },
  get connected() { return state.connected; },
  get connecting() { return state.connecting; },
  get disconnecting() { return state.disconnecting; },
  get error() { return state.error; },
  get availableAdapters() { return adapters; },
};

/**
 * Connect to a wallet
 */
export async function connect(adapterName?: string): Promise<PublicKey | null> {
  if (state.connecting || state.connected) return state.publicKey;

  const adapter = adapterName
    ? adapters.find(a => a.name === adapterName)
    : adapters.find(a => a.readyState === 'Installed');

  if (!adapter) {
    state.error = new Error('No wallet adapter found');
    return null;
  }

  state.connecting = true;
  state.error = null;

  try {
    await adapter.connect();

    state.adapter = adapter as unknown as WalletAdapter;
    state.publicKey = adapter.publicKey;
    state.connected = true;
    state.connecting = false;

    return adapter.publicKey;
  } catch (error) {
    state.error = error as Error;
    state.connecting = false;
    return null;
  }
}

/**
 * Disconnect from the current wallet
 */
export async function disconnect(): Promise<void> {
  if (!state.adapter || state.disconnecting) return;

  state.disconnecting = true;

  try {
    await state.adapter.disconnect();

    state.adapter = null;
    state.publicKey = null;
    state.connected = false;
    state.disconnecting = false;
  } catch (error) {
    state.error = error as Error;
    state.disconnecting = false;
  }
}

/**
 * Sign a message with the connected wallet
 */
export async function signMessage(message: string): Promise<Uint8Array | null> {
  if (!state.adapter || !state.connected) {
    state.error = new Error('Wallet not connected');
    return null;
  }

  try {
    const encodedMessage = new TextEncoder().encode(message);
    return await state.adapter.signMessage(encodedMessage);
  } catch (error) {
    state.error = error as Error;
    return null;
  }
}
