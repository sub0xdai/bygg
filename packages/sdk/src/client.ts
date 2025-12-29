import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider, Wallet } from '@coral-xyz/anchor';
import { PROGRAM_ID, IDL } from './program';

/**
 * Client for interacting with the Byggnad protocol
 */
export class ByggClient {
  public readonly program: Program;
  public readonly provider: AnchorProvider;

  constructor(connection: Connection, wallet: Wallet) {
    this.provider = new AnchorProvider(connection, wallet, {
      commitment: 'confirmed',
    });
    // @ts-expect-error - IDL type will be correct after generation
    this.program = new Program(IDL, PROGRAM_ID, this.provider);
  }

  /**
   * Get the treasury PDA
   */
  getTreasuryPDA(): [PublicKey, number] {
    return PublicKey.findProgramAddressSync([Buffer.from('treasury')], PROGRAM_ID);
  }

  /**
   * Get a proposal PDA
   */
  getProposalPDA(treasuryKey: PublicKey, proposalId: number): [PublicKey, number] {
    return PublicKey.findProgramAddressSync(
      [Buffer.from('proposal'), treasuryKey.toBuffer(), Buffer.from(proposalId.toString())],
      PROGRAM_ID
    );
  }

  /**
   * Get a vote record PDA
   */
  getVoteRecordPDA(proposalKey: PublicKey, voterKey: PublicKey): [PublicKey, number] {
    return PublicKey.findProgramAddressSync(
      [Buffer.from('vote'), proposalKey.toBuffer(), voterKey.toBuffer()],
      PROGRAM_ID
    );
  }

  // Instruction methods will be added after IDL generation
}
