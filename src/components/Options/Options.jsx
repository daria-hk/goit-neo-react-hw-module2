import css from "./Options.module.css";
import OptionButton from "../OptionButton/OptionButton";

const Options = ({ totalFeedback, updateFeedback, handleResetFeedback }) => {
  return (
    <div className={css.options}>
      <OptionButton onClick={() => updateFeedback("good")}>Good</OptionButton>
      <OptionButton onClick={() => updateFeedback("neutral")}>
        Neutral
      </OptionButton>
      <OptionButton onClick={() => updateFeedback("bad")}>Bad</OptionButton>
      {totalFeedback > 0 ? (
        <OptionButton onClick={handleResetFeedback}>Reset</OptionButton>
      ) : null}
    </div>
  );
};

export default Options;
