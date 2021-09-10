import * as anchor from "@project-serum/anchor";
import { MintLayout, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, Keypair } from "@solana/web3.js";
import {
  CANDY_MACHINE_CONFIG_ACCOUNT_ID,
  CANDY_MACHINE_PROGRAM_ID,
  CANDY_MACHINE_STATE_ACCOUNT_ID,
  CANDY_MACHINE_TREASURY_WALLET_ID,
  RPC_CONNECTION,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  TOKEN_METADATA_PROGRAM_ID,
} from "./constants";
import { CandyMachineState } from "./types";

export const getCandyMachineState = async (
  wallet: anchor.Wallet
): Promise<CandyMachineState> => {
  const program = await loadAnchorProgram(wallet);
  const state: any = await program.account.candyMachine.fetch(
    CANDY_MACHINE_STATE_ACCOUNT_ID
  );
  const itemsAvailable = state.data.itemsAvailable.toNumber();
  const itemsRedeemed = state.itemsRedeemed.toNumber();
  return {
    isSoldOut: itemsAvailable === itemsRedeemed,
    itemsAvailable,
    itemsRedeemed,
  };
};

export const mintOneToken = async (wallet: anchor.Wallet): Promise<string> => {
  const mint = Keypair.generate();
  const program = await loadAnchorProgram(wallet);
  const userTokenAccountAddress = await getTokenWallet(
    wallet.publicKey,
    mint.publicKey
  );
  const metadataAddress = await getMetadata(mint.publicKey);
  const masterEdition = await getMasterEdition(mint.publicKey);
  const rent =
    await program.provider.connection.getMinimumBalanceForRentExemption(
      MintLayout.span
    );

  return await program.rpc.mintNft({
    accounts: {
      config: CANDY_MACHINE_CONFIG_ACCOUNT_ID,
      candyMachine: CANDY_MACHINE_STATE_ACCOUNT_ID,
      payer: wallet.publicKey,
      wallet: CANDY_MACHINE_TREASURY_WALLET_ID,
      mint: mint.publicKey,
      metadata: metadataAddress,
      masterEdition,
      mintAuthority: wallet.publicKey,
      updateAuthority: wallet.publicKey,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: anchor.web3.SystemProgram.programId,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    },
    signers: [mint],
    instructions: [
      anchor.web3.SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mint.publicKey,
        space: MintLayout.span,
        lamports: rent,
        programId: TOKEN_PROGRAM_ID,
      }),
      Token.createInitMintInstruction(
        TOKEN_PROGRAM_ID,
        mint.publicKey,
        0,
        wallet.publicKey,
        wallet.publicKey
      ),
      createAssociatedTokenAccountInstruction(
        userTokenAccountAddress,
        wallet.publicKey,
        wallet.publicKey,
        mint.publicKey
      ),
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        mint.publicKey,
        userTokenAccountAddress,
        wallet.publicKey,
        [],
        1
      ),
    ],
  });
};

const loadAnchorProgram = async (wallet: anchor.Wallet) => {
  const provider = new anchor.Provider(RPC_CONNECTION, wallet, {
    preflightCommitment: "recent",
  });
  const idl = await anchor.Program.fetchIdl(CANDY_MACHINE_PROGRAM_ID, provider);
  return new anchor.Program(idl, CANDY_MACHINE_PROGRAM_ID, provider);
};

const getTokenWallet = async (
  wallet: anchor.web3.PublicKey,
  mint: anchor.web3.PublicKey
) => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [wallet.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    )
  )[0];
};

const getMetadata = async (
  mint: anchor.web3.PublicKey
): Promise<anchor.web3.PublicKey> => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    )
  )[0];
};

const getMasterEdition = async (
  mint: anchor.web3.PublicKey
): Promise<anchor.web3.PublicKey> => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"),
      ],
      TOKEN_METADATA_PROGRAM_ID
    )
  )[0];
};

const createAssociatedTokenAccountInstruction = (
  associatedTokenAddress: anchor.web3.PublicKey,
  payer: anchor.web3.PublicKey,
  walletAddress: anchor.web3.PublicKey,
  splTokenMintAddress: anchor.web3.PublicKey
) => {
  const keys = [
    { pubkey: payer, isSigner: true, isWritable: true },
    { pubkey: associatedTokenAddress, isSigner: false, isWritable: true },
    { pubkey: walletAddress, isSigner: false, isWritable: false },
    { pubkey: splTokenMintAddress, isSigner: false, isWritable: false },
    {
      pubkey: anchor.web3.SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    {
      pubkey: anchor.web3.SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
  ];
  return new anchor.web3.TransactionInstruction({
    keys,
    programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    data: Buffer.from([]),
  });
};
