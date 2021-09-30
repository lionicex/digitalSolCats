import Header from "../components/Header";
import "../styles/home.css";
import { RouteComponentProps } from "@reach/router";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { checkDropSoldOut } from "../utils/candyMachine";
import { Wallet } from "@project-serum/anchor";
import { useSetRecoilState } from "recoil";
import { checkingSoldOutState, isSoldOutState } from "../utils/atoms";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HarlequinBanner from "../components/HarlequinBanner";
import Charity from "../components/Charity";
import CharityBanner from "../components/Charity";

const Home = (_: RouteComponentProps) => {
	const wallet = useAnchorWallet() as Wallet;
	const setCheckingSoldOut = useSetRecoilState(checkingSoldOutState);
	const setIsSoldOut = useSetRecoilState(isSoldOutState);
	useEffect(() => {
		if (!wallet) return;
		setCheckingSoldOut(true);
		checkDropSoldOut(wallet).then((isSoldOut) => {
			setCheckingSoldOut(false);
			setIsSoldOut(isSoldOut);
		});
	}, [wallet, setCheckingSoldOut, setIsSoldOut]);

	return (
		<>
			<Header/>
			<CharityBanner/>
			<Roadmap/>
			<HarlequinBanner />
			<Team/>
			<FAQ/>
			<Footer/>
		</>
	);
};
export default Home;
