import "../styles/team.css";
import rustyImage from "../static/media/rusty.png";
import whiteGTIImage from "../static/media/whiteGTI.png";

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
          <img
            className="TeamImage"
            alt="Golhalf"
            src={rustyImage}
          />
          <h3 className="Text-team Text-subtitle-team">Golhalf</h3>
          <p className="Text-team Text-caption-team">DEVELOPER</p>
        </div>
        <div className="TeamMember">
          <img
            className="TeamImage"
            alt="Solf GTI"
            src={whiteGTIImage}
          />
          <h3 className="Text-team Text-subtitle-team">Solf GTI</h3>
          <p className="Text-team Text-caption-team">PRODUCT</p>
        </div>
        <div className="TeamMember">
          <img
            className="TeamImage"
            alt="Golf GART"
            src="/static/media/team-p.b63a984e.png"
          />
          <h3 className="Text-team Text-subtitle-team">Golf GART</h3>
          <p className="Text-team Text-caption-team">ARTIST</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
