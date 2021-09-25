import "../styles/roadmap.css";

const Roadmap = () => {
	const roadmap = {alignSelf: "center"};
	const roadmapDigital = {color: "inherit", textDecoration: "underline"};
	const roadmapCard = {color: "inherit", textDecoration: "underline"};
	return (
		<>
			<section className="Roadmap">
				<h2 className="Text-roadmap Text-title-roadmap" style={roadmap}>
					Roadmap
				</h2>
				<div className="RoadmapRow">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">#1 Launch | 2nd October at 20:00 UCT 🚀</div>
						<div className="RoadmapCard-content">
							Successfully launch 5,000 Golf cars with a fair minting process
						</div>
					</div>
				</div>
				<div className="RoadmapRow RoadmapRowFlip">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">#2 Marketplaces 🛒</div>
						<div className="RoadmapCard-content">
							Right after launch you will be able to buy and sell your Golfs on {" "}
							<a
								href="https://digitaleyes.market"
								style={roadmapDigital}
								rel="nofollow noreferrer"
								target="_blank"
							>
								digitaleyes.market
							</a>
						</div>
					</div>
				</div>
				<div className="RoadmapRow">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">#3 More cars on the way!🚗</div>
						<div className="RoadmapCard-content">
							The Harlequin Golf version may be legendary, but there are more cars waiting to be dropped. The best part, you have the power to chose them!
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Roadmap;
