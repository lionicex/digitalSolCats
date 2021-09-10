import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const getSolanaNetworkFromENV = (): WalletAdapterNetwork =>
  process.env.REACT_APP_SOLANA_NETWORK! as WalletAdapterNetwork;

export const getCandyMachineStartDateFromENV = (): Date =>
  new Date(
    parseInt(process.env.REACT_APP_CANDY_MACHINE_START_DATE!, 10) * 1000
  );
