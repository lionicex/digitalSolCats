import Header from "../components/Header";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { RouteComponentProps } from "@reach/router";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { getCandyMachineState } from "../utils/candyMachine";
import { Wallet } from "@project-serum/anchor";
import { useSetRecoilState } from "recoil";
import {
  CMItemsState,
  isCMStateLoadedState,
  isDropSoldOutState,
} from "../utils/atoms";

const Home = (_: RouteComponentProps) => {
  const wallet = useAnchorWallet() as Wallet;
  const setIsCMStateLoaded = useSetRecoilState(isCMStateLoadedState);
  const setIsDropSoldOut = useSetRecoilState(isDropSoldOutState);
  const setCMItems = useSetRecoilState(CMItemsState);
  useEffect(() => {
    if (!wallet) return;
    getCandyMachineState(wallet).then((state) => {
      setIsCMStateLoaded(true);
      setIsDropSoldOut(state.isSoldOut);
      setCMItems({
        available: state.itemsAvailable,
        redeemed: state.itemsRedeemed,
      });
    });
  }, [wallet, setIsCMStateLoaded, setIsDropSoldOut, setCMItems]);

  return (
    <>
      <Header />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
};
export default Home;
