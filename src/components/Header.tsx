import { useRecoilValue } from "recoil";
import { isSoldOutState } from "../utils/atoms";
import Mint from "./Mint/Mint";
import WalletButton from "./WalletButton";
import { ReactComponent as TwitterLogo } from "../static/media/twitter.svg";
import { ReactComponent as DiscordLogo } from "../static/media/discord.svg";
import harlequinImage from "../static/media/harlequin.png";

const Header = () => {
  const isSoldOut: boolean = useRecoilValue(isSoldOutState);
  return (
    <section className="header">
      <div className="navbar">
        <div className="logo">
          <p className="name">Golf Sol</p>
        </div>
        <div className="social-button-group">
          <a className="social-button" href="https://twitter.com/piggySolGang/">
            <TwitterLogo />
          </a>
          <a className="social-button" href="https://discord.gg/QyUHFsZnuJ">
            <DiscordLogo />
          </a>
          <div className="social-button">
            <WalletButton />
          </div>
        </div>
      </div>
      <div className="car-wrapper">
        <h3>
          10,000 randomly generated Golf cars driving down the Solana Roads{" "}
        </h3>
        <img src={harlequinImage} alt="Harlequin" />
        <p>Catch the Harlequin</p>
      </div>
      <div className="header-mint">
        {isSoldOut ? <p>Sold out!</p> : <Mint />}
      </div>
    </section>
  );
};
export default Header;
