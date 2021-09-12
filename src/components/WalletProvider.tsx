import { ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolflareWebWallet,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { SOLANA_NETWORK_ENV } from "../utils/constants";

interface WalletProviderProps {
  children: ReactNode;
}

const Wallet = ({ children }: WalletProviderProps) => {
  const endpoint = useMemo(() => clusterApiUrl(SOLANA_NETWORK_ENV), []);
  const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider featuredWallets={2}>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default Wallet;
