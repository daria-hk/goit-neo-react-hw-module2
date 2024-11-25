import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("savedFeedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });
  const [isHiden, setIsHiden] = useState(false);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => {
      const updated = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
      setIsHiden(!isHiden);
      return updated;
    });
  };

  const handleResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    setIsHiden(isHiden);
  };

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback feedback={feedback} />
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </>
      ) : (
        <Notification notif="No feedback given yet." />
      )}
    </>
  );
};

export default App;
