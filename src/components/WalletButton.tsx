import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { CSSProperties } from "react";

const walletButton: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "24px",
  background: "#18acff",
  border: "2px solid rgba(0,0,0,.1)",
  boxSizing: "border-box",
  borderRadius: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#fff",
  marginLeft: "32px",
  maxHeight: "72px",
};

const WalletButton = () => {
  const { connected } = useWallet();
  const button = !connected ? (
    <WalletMultiButton style={walletButton} />
  ) : (
    <WalletDisconnectButton
      style={{ ...walletButton, background: "#C20114" }}
    />
  );

  return <>{button}</>;
};

export default WalletButton;
