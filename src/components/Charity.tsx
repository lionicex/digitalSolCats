import lapalma from "../static/media/lapalma.jpg";
import "../styles/lapalma-banner.css";

const CharityBanner = () => {
	return (
		<div className="lapalma-banner">
			<img src={lapalma} alt="La Palma"/>
			<div className="text-banner">
				<h3>Help La Palma by bidding for the unique Harlequin</h3>
				<p>Profits will be donated to #LaPalma and the people who lost their homes to lava.</p>
				<a href="https://golfsol.holaplex.com">
					<button className="button mint-button">
						Bid on Holaplex
					</button>
				</a>
			</div>

		</div>
	);
};
export default CharityBanner;
