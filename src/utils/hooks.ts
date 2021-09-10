import { useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";

export const useAnchorWallet = (): anchor.Wallet => {
  const { publicKey, signAllTransactions, signTransaction } = useWallet();
  return {
    publicKey,
    signAllTransactions,
    signTransaction,
  } as anchor.Wallet;
};
