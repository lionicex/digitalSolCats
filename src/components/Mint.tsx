import { useState } from "react";
import ReactModal from "react-modal";
import "../styles/mint.css";

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

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Mint now</button>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Mint Modal"
        shouldCloseOnOverlayClick={false}
      >
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </ReactModal>
    </>
  );
};
export default Mint;
