import { Wallet } from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDropActiveState, isSoldOutState } from "../../utils/atoms";
import {
  checkDropSoldOut,
  confirmTransactionSignature,
  mintOneToken,
} from "../../utils/candyMachine";
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
  const [isMinting, setIsMinting] = useState(false);
  const isDropActive = useRecoilValue(isDropActiveState);
  const wallet = useAnchorWallet();
  const setIsSoldOut = useSetRecoilState(isSoldOutState);

  const mint = async () => {
    setIsMinting(true);

    try {
      if (!wallet) throw { code: 308338120 };
      const isSoldOut = await fetchIsSoldOut();
      if (isSoldOut) throw { code: 5018047 };
      toast.loading("Minting in process", {
        toastId: "mint",
      });
      const mintTxId = await mintOneToken(wallet as Wallet);
      toast.update("mint", {
        render: "Verifying transaction",
      });
      const status: any = await confirmTransactionSignature(
        mintTxId,
        30000,
        "singleGossip",
        false
      );
      if (!status.err)
        toast.update("mint", {
          type: toast.TYPE.SUCCESS,
          render: "Mint successful! Check out your new Solf.",
          isLoading: false,
          autoClose: 5000,
        });
      else throw status.err;
    } catch (error) {
      toast.dismiss("mint");
      showError(parseError(error));
    } finally {
      setIsMinting(false);
    }
  };

  const fetchIsSoldOut = async () => {
    const isSoldOutResponse = await checkDropSoldOut(wallet as Wallet);
    setIsSoldOut(isSoldOutResponse);
    return isSoldOutResponse;
  };

  const parseError = (error: any) => {
    if (!error.code) return error;
    const code = error.code;
    if (code === 309) return "Not enough SOL to pay, please fund your wallet.";
    if (code === 311 || code === 5018047) {
      setIsSoldOut(true);
      return "Sorry! We're sold out.";
    }
    if (code === 312) return "Minting period hasn't started yet.";
    if (code === 308338120) return "Connect your wallet first.";
    return error;
  };

  const showError = (error: any) => {
    toast.error(error);
  };

  return (
    <>
      {!isDropActive ? (
        <Countdown />
      ) : (
        <button disabled={isMinting} onClick={() => mint()} className="mint-button">
          Mint one Solf
        </button>
      )}
    </>
  );
};
export default Mint;
