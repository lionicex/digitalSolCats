import '../CSS/Team.css'
const center = {
	alignSelf: 'center'
}
const Team = () => {
	return (
		<div className="TeamRoot"><h2 className="Text-team Text-title-team" style={center}>The Team</h2>
			<div className="TeamMembers">
				<div className="TeamMember">
					<img className="TeamImage" alt="Piggy Bank" src="/static/media/team-pb.44ebe4b3.png"/>
					<h3 className="Text-team Text-subtitle-team">Piggy Bank</h3>
					<p className="Text-team Text-caption-team">DEVELOPER</p>
				</div>
				<div className="TeamMember">
					<img className="TeamImage" alt="Piggy Capone" src="/static/media/team-pc.5ba6444d.png"/>
					<h3 className="Text-team Text-subtitle-team">Piggy Capone</h3>
					<p className="Text-team Text-caption-team">PRODUCT</p>
				</div>
				<div className="TeamMember"><
					img className="TeamImage" alt="Pigasso" src="/static/media/team-p.b63a984e.png"/>
					<h3
						className="Text-team Text-subtitle-team">Pigasso</h3>
					<p className="Text-team Text-caption-team">ARTIST</p>
				</div>
			</div>
		</div>
	)
}

export default Team