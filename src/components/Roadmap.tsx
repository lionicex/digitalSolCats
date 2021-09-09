import '../styles/roadmap.css'

const Roadmap = () => {
	const roadmap = {alignSelf: 'center'}
	const roadmapDigital = {color: 'inherit', textDecoration: 'underline'}
	const roadmapCard = {color: 'inherit', textDecoration: 'underline'}
	return (
		<>
			<div className="Roadmap"><h2 className="Text Text-title" style={roadmap}>Roadmap</h2>
				<div className="RoadmapRow">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">Smooth Launch 🚀</div>
						<div className="RoadmapCard-content">Successfully launch all 10,000 piggies to community with a
							fair minting process.
						</div>
					</div>
					<div className="RoadmapLine">
						<div className="RoadmapLineCenter">
							<div className="RoadmapLineDot"></div>
						</div>
					</div>
					<div className="RoadmapEmpty"></div>
				</div>
				<div className="RoadmapRow RoadmapRowFlip">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">Marketplace Integration 🛒</div>
						<div className="RoadmapCard-content">You will be able to buy/sell your piggies
							<a
								href="https://digitaleyes.market" style={roadmapDigital}
								rel="nofollow noreferrer" target="_blank">digitaleyes.market </a> and <a
								href="https://solsea.io/collection/6132ff7596b3011f79e5e68f"
								style={roadmapCard} rel="nofollow noreferrer"
							>solsea.io </a> right after the launch!
						</div>
					</div>
					<div className="RoadmapLine">
						<div className="RoadmapLineCenter">
							<div className="RoadmapLineDot"></div>
						</div>
					</div>
					<div className="RoadmapEmpty"></div>
				</div>
				<div className="RoadmapRow">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">Piggy Gang Merchandise 🐷</div>
						<div className="RoadmapCard-content">We will create cool hoodies, tees and mags with exclusive
							discount to piggy holders!
						</div>
					</div>
					<div className="RoadmapLine">
						<div className="RoadmapLineCenter">
							<div className="RoadmapLineDot"></div>
						</div>
					</div>
					<div className="RoadmapEmpty"></div>
				</div>
				<div className="RoadmapRow RoadmapRowFlip">
					<div className="RoadmapCard-Root">
						<div className="RoadmapCard-title">Rival Gangs 🔫</div>
						<div className="RoadmapCard-content">Everyone knows that Piggies are the cutest, but there are
							other gangs in the farm as well. <br/> Another animal drop to come in the near future, stay
							tuned!
						</div>
					</div>
					<div className="RoadmapLine">
						<div className="RoadmapLineCenter">
							<div className="RoadmapLineDot"></div>
						</div>
					</div>
					<div className="RoadmapEmpty"></div>
				</div>
			</div>
		</>
	)
}
export default Roadmap
