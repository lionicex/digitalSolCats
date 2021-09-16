import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletMultiButton, } from "@solana/wallet-adapter-react-ui";

const WalletButton = () => {
  const { connected, publicKey } = useWallet();
  const walletId = publicKey?.toBase58();

  return (
    <>
      {connected ? (
        <div className="wallet-button-group">
          <WalletDisconnectButton className="button wallet-button disconnect" />
          <span>{walletId}</span>
        </div>
      ) : (
        <WalletMultiButton className="button wallet-button" />
      )}
    </>
  );
};

export default WalletButton;
