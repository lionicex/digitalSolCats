import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";
import ReactModal from "react-modal";
import { useRecoilValue } from "recoil";
import "../../styles/mint.css";
import { isDropActiveState } from "../../utils/atoms";
import Countdown from "./Countdown";

ReactModal.setAppElement("#root");
ReactModal.defaultStyles.overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
ReactModal.defaultStyles.content = {
  border: "1px solid #ccc",
  background: "#fff",
  overflow: "auto",
  WebkitOverflowScrolling: "touch",
  borderRadius: "4px",
  outline: "none",
  padding: "20px",
};

const Mint = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDropActive = useRecoilValue(isDropActiveState);
  const wallet = useAnchorWallet();
  const isWalletConnected = !!wallet?.publicKey;

  return (
    <>
      <Countdown />
      {isDropActive && (
        <button onClick={() => setIsModalOpen(true)}>Mint now!</button>
      )}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Mint Modal"
        shouldCloseOnOverlayClick={false}
      >
        {isWalletConnected ? (
          <button onClick={console.log}>Mint now!</button>
        ) : (
          <WalletMultiButton />
        )}
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </ReactModal>
    </>
  );
};
export default Mint;
