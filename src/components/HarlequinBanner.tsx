import harlequin from "../static/media/harlequin.png";

const HarlequinBanner = () => {
  return (
    <div className="harlequin-banner">
      <img src={harlequin} alt="Harlequin" />
      <div>
        <h3>Catch a Harlequin!</h3>
        <p>Only 264 IRL, only 264 NFTs</p>
      </div>
    </div>
  );
};
export default HarlequinBanner;
