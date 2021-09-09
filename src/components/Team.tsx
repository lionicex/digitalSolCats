import '../styles/team.css'
const center = {
	alignSelf: 'center'
}
const Team = () => {
	return (
		<div className="TeamRoot"><h2 className="Text Text-title" style={center}>The Team</h2>
			<div className="TeamMembers">
				<div className="TeamMember">
					<img className="TeamImage" alt="Piggy Bank" src="/static/media/team-pb.44ebe4b3.png"/>
					<h3 className="Text Text-subtitle">Piggy Bank</h3>
					<p className="Text Text-caption">DEVELOPER</p>
				</div>
				<div className="TeamMember">
					<img className="TeamImage" alt="Piggy Capone" src="/static/media/team-pc.5ba6444d.png"/>
					<h3 className="Text Text-subtitle">Piggy Capone</h3>
					<p className="Text Text-caption">PRODUCT</p>
				</div>
				<div className="TeamMember"><
					img className="TeamImage" alt="Pigasso" src="/static/media/team-p.b63a984e.png"/>
					<h3
						className="Text Text-subtitle">Pigasso</h3>
					<p className="Text Text-caption">ARTIST</p>
				</div>
			</div>
		</div>
	)
}

export default Team