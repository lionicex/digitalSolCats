import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

const WalletButton = () => {
  const { connected } = useWallet();
  const button = !connected ? (
    <WalletMultiButton className="wallet-button" />
  ) : (
    <WalletDisconnectButton
      className="wallet-button"
      style={{ background: "#C20114" }}
    />
  );

  return <>{button}</>;
};

export default WalletButton;
