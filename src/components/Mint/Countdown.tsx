import Countdown, { CountdownRenderProps } from "react-countdown";
import { useSetRecoilState } from "recoil";
import { isDropActiveState } from "../../utils/atoms";
import { CANDY_MACHINE_START_TIME } from "../../utils/constants";

const CountdownWrapper = () => {
  const setIsDropActive = useSetRecoilState(isDropActiveState);
  // TODO: make a good countdown like a race one
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) setIsDropActive(true);

    return (
      <span>
        The race begins in {days !== 0 ? `${days} days ` : ""}
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  return (
    <>
      <Countdown date={CANDY_MACHINE_START_TIME} renderer={renderer} />
    </>
  );
};

export default CountdownWrapper;
