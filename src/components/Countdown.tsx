import Countdown, { CountdownRenderProps } from "react-countdown";
import { getCandyMachineStartDateFromENV } from "../utils/env";
import Mint from "./Mint";

const CountdownWrapper = () => {
  const startDate: Date = getCandyMachineStartDateFromENV();

  // TODO: separate renderer and make a good countdown like a race one
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <Mint />;
    else
      return (
        <span>
          The race begins in {days !== 0 ? `${days} days ` : ""}
          {hours}:{minutes}:{seconds}
        </span>
      );
  };

  return (
    <>
      <Countdown date={startDate} renderer={renderer} />
    </>
  );
};

export default CountdownWrapper;
