import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

import { useState } from "react";

import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [isHiden, setIsHiden] = useState(false);

  const updateFeedback = (feedbackType) => {
    console.log("type:", feedbackType);
    setFeedback((prev) => {
      console.log("prev:", prev);
      const updated = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
      console.log("update:", updated);
      setIsHiden(!isHiden);
      return updated;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <p>test</p>}
    </>
  );
};

export default App;
