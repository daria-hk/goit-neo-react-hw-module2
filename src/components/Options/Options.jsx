import css from "./Options.module.css";
import OptionButton from "../OptionButton/OptionButton";

const Options = ({ updateFeedback }) => {
  console.log({ updateFeedback });
  return (
    <div className={css.options}>
      <OptionButton onClick={() => updateFeedback("good")}>Good</OptionButton>
      <OptionButton onClick={() => updateFeedback("neutral")}>
        Neutral
      </OptionButton>
      <OptionButton onClick={() => updateFeedback("bad")}>Bad</OptionButton>
      <OptionButton>Reset</OptionButton>
    </div>
  );
};

export default Options;

//  const handleReset = () => {
//  setClicks({ good: 0, neutral: 0, bad: 0 });
// };

//      <OptionButton onClick={handleReset}>Reset</OptionButton>

// <div>Total Clicks: {clicks.good + clicks.neutral + clicks.bad}</div>

/**
 * {isOpen ? "Hide" : "Show"}
 */
