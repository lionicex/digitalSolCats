import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

export const CANDY_MACHINE_PROGRAM_ID = new PublicKey(
  "cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"
);

export const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

export const SOLANA_NETWORK_ENV = process.env
  .REACT_APP_SOLANA_NETWORK! as WalletAdapterNetwork;

export const RPC_CONNECTION = new anchor.web3.Connection(
  "https://dawn-damp-log.solana-mainnet.quiknode.pro"
);

export const CANDY_MACHINE_STATE_ACCOUNT_ID = new PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_STATE_ACCOUNT_ID!
);

export const CANDY_MACHINE_CONFIG_ACCOUNT_ID = new PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG_ACCOUNT_ID!
);

export const CANDY_MACHINE_TREASURY_WALLET_ID = new PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_TREASURY_WALLET_ID!
);

export const CANDY_MACHINE_START_TIME = new Date(
  parseInt(process.env.REACT_APP_CANDY_MACHINE_START_DATE!) * 1000
);

export const IS_DROP_SOLD_OUT =
  process.env.REACT_APP_CANDY_MACHINE_SOLD_OUT! === "true";
