import Countdown, {
  CountdownRenderProps as CountdownProps,
} from "react-countdown";
import { useSetRecoilState } from "recoil";
import { isDropActiveState } from "../../utils/atoms";
import { CANDY_MACHINE_START_TIME } from "../../utils/constants";

const CountdownWrapper = () => {
  const setIsDropActive = useSetRecoilState(isDropActiveState);
  const renderer = ({ days, hours, minutes, seconds }: CountdownProps) => {
    return (
      <CountdownRender
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  };

  return (
    <>
      <Countdown
        onComplete={() => setIsDropActive(true)}
        date={new Date("19 sep 2021 20:50")}
        // date={CANDY_MACHINE_START_TIME}
        renderer={renderer}
      />
    </>
  );
};
export default CountdownWrapper;

interface CountdownRenderProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownRender = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownRenderProps) => {
  return (
    <div className="countdown">
      <p className="caption">The race starts in:</p>
      <div className="countdown-values">
        <CountdownValue value={days} name="Days" />
        <CountdownSeparator />
        <CountdownValue value={hours} name="Hours" />
        <CountdownSeparator />
        <CountdownValue value={minutes} name="Mins" />
        <CountdownSeparator />
        <CountdownValue value={seconds} name="Secs" />
      </div>
    </div>
  );
};

interface CountdownValueProps {
  value: number;
  name: string;
}

const CountdownValue = ({ value, name }: CountdownValueProps) => {
  const formattedValue: string =
    value.toString().length === 2 ? value.toString() : "0" + value;

  return (
    <div className="value-wrapper">
      <span className="value">{formattedValue}</span>
      <p className="name">{name}</p>
    </div>
  );
};

const CountdownSeparator = () => {
  return (
    <div className="separator-wrapper">
      <span className="separator">:</span>
    </div>
  );
};
