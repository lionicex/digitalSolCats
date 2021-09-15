import "../styles/team.css";
import golhalf from "../static/media/golhalf.png";
import solfGTI from "../static/media/solf_gti.png";
import golfGART from "../static/media/golf_gart.png";

const center = {
	alignSelf: "center",
};
const Team = () => {
	return (
		<section className="TeamRoot">
			<h2 className="Text-team Text-title-team" style={center}>
				The Team
			</h2>
			<div className="TeamMembers">
				<div className="TeamMember">
					<img className="TeamImage" alt="Golhalf" src={golhalf}/>
					<h3 className="Text-team Text-subtitle-team">Golhalf</h3>
					<p className="Text-team Text-caption-team">DEVELOPER</p>
				</div>
				<div className="TeamMember">
					<img className="TeamImage" alt="Solf GTI" src={solfGTI}/>
					<h3 className="Text-team Text-subtitle-team">Solf GTI</h3>
					<p className="Text-team Text-caption-team">PRODUCT</p>
				</div>
				<div className="TeamMember">
					<img
						className="TeamImage"
						alt="Golf GART"
						src={golfGART}
					/>
					<h3 className="Text-team Text-subtitle-team">Golf GART</h3>
					<p className="Text-team Text-caption-team">ARTIST</p>
				</div>
			</div>
		</section>
	);
};

export default Team;
