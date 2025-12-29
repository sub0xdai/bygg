import { PublicKey } from '@solana/web3.js';

/**
 * Program ID for the Byggnad protocol
 * This will be updated after deployment
 */
export const PROGRAM_ID = new PublicKey('Bygg111111111111111111111111111111111111111');

/**
 * Anchor IDL placeholder
 * This will be replaced with the generated IDL after running `anchor build`
 */
export const IDL = {
  version: '0.1.0',
  name: 'bygg',
  instructions: [],
  accounts: [],
  types: [],
} as const;
