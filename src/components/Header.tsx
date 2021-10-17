import { useRecoilValue } from "recoil";
import { isSoldOutState } from "../utils/atoms";
import { ReactComponent as TwitterLogo } from "../static/media/twitter.svg";
import { ReactComponent as DiscordLogo } from "../static/media/discord.svg";
import { ReactComponent as InstagramLogo } from "../static/media/instagram.svg";
import solanaImage from "../static/media/solana.png";
import Mint from "./Mint/Mint";
import WalletButton from "./WalletButton";

const Header = () => {
	const isSoldOut: boolean = useRecoilValue(isSoldOutState);
	return (
		<section className="header">
			<div className="navbar">
				<div className="logo">
					<p className="name">Golf Sol</p>
				</div>
				<div className="social-button-group">
					<a rel="noreferrer" className="social-button" target="_blank"
					   href="https://twitter.com/golfsolnft/">
						<TwitterLogo/>
					</a>
					<a rel="noreferrer" className="social-button" target="_blank" href="https://discord.gg/UCH5NqsTQp">
						<DiscordLogo/>
					</a>
					<a rel="noreferrer" className="social-button" target="_blank" href="https://www.instagram.com/golfsolnft/">
						<InstagramLogo/>
					</a>
					<div className="social-button">
						<WalletButton/>
					</div>
				</div>
			</div>
			<div className="car-wrapper">
				<h3>
					5,000 randomly generated Golf cars driving down the Solana Roads{" "}<br/><br/>Mint is 0.1 SOL
				</h3>
				<img src={solanaImage} alt="Harlequin"/>
			</div>
			<div className="header-mint">
				{isSoldOut ? <p className="sold-out">Sold out!</p> : <Mint/>}
			</div>
		</section>
	);
};
export default Header;
