import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  getPhantomWallet,
  getSolflareWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { ReactNode, useMemo } from "react";
import { RecoilRoot } from "recoil";
import { SOLANA_NETWORK_ENV } from "./utils/constants";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const endpoint = useMemo(() => clusterApiUrl(SOLANA_NETWORK_ENV), []);
  const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet()], []);

  return (
    <RecoilRoot>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider featuredWallets={wallets.length}>
            {children}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </RecoilRoot>
  );
};
export default Providers;
