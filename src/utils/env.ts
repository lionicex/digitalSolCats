import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"

export const getSolanaNetworkFromENV = (): WalletAdapterNetwork => {
  return process.env.REACT_APP_SOLANA_NETWORK! as WalletAdapterNetwork
}