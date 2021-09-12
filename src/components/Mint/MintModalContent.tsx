import { Wallet } from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CMItemsState,
  isCMStateLoadedState,
  isDropSoldOutState,
} from "../../utils/atoms";
import { mintOneToken } from "../../utils/candyMachine";
import { CMItems } from "../../utils/types";
import Loader from "./Loader";

const MintModalContent = () => {
  const [isMinting, setIsMinting] = useState(false);
  const wallet = useAnchorWallet() as Wallet;
  const { available, redeemed }: CMItems = useRecoilValue(CMItemsState);
  const isCMStateLoaded = useRecoilValue(isCMStateLoadedState);
  const [isDropSoldOut, setDropSoldOut] = useRecoilState(isDropSoldOutState);

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
      {!isCMStateLoaded && <Loader />}
      {isDropSoldOut && <p>Sold out!</p>}
      {isCMStateLoaded && !isDropSoldOut && (
        <div>
          <p>
            {available - redeemed}/{available} left!
          </p>
          <button onClick={() => mint()}>Mint now!</button>
        </div>
      )}
    </>
  );
};

export default MintModalContent;
