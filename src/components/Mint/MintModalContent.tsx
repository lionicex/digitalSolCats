import { Wallet } from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkingSoldOutState, isSoldOutState } from "../../utils/atoms";
import { mintOneToken } from "../../utils/candyMachine";
import Loader from "./Loader";

const MintModalContent = () => {
  const [isMinting, setIsMinting] = useState(false);
  const wallet = useAnchorWallet() as Wallet;
  const isCheckingSoldOut = useRecoilValue(checkingSoldOutState);
  const [isSoldOut, setIsSoldOut] = useRecoilState(isSoldOutState);

  const mint = async () => {
    setIsMinting(true);
    try {
      const mintTxId = await mintOneToken(wallet);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isCheckingSoldOut && <Loader />}
      {!isCheckingSoldOut && (
        <div>
          <button onClick={() => mint()}>Mint now!</button>
        </div>
      )}
    </>
  );
};

export default MintModalContent;
