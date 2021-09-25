import "../styles/footer.css";
import { ReactComponent as TwitterLogo } from "../static/media/twitter.svg";
import { ReactComponent as DiscordLogo } from "../static/media/discord.svg";
import { ReactComponent as InstagramLogo } from "../static/media/instagram.svg";

const Footer = () => {
	return (
		<div className="Footer">
			<a
				rel="noreferrer"
				className="social-button social-button-footer"
				target="_blank"
				href="https://twitter.com/golfsolnft/"
			>
				<TwitterLogo/>
			</a>
			<a
				rel="noreferrer"
				className="social-button social-button-footer"
				target="_blank"
				href="https://discord.gg/UCH5NqsTQp"
			>
				<DiscordLogo/>
			</a>
			<a
				rel="noreferrer"
				className="social-button social-button-footer"
				target="_blank"
				href="https://www.instagram.com/golfsolnft/"
			>
				<InstagramLogo/>
			</a>
		</div>
	);
};
export default Footer;
