import React, { useContext, useEffect } from "react";
import { QuizContext } from "../extras/Contexts";

function QuizEnd() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const renderColor = () => {
    if (score <= 4) {
      return "red";
    } else if (score <= 7) {
      return "purple";
    } else {
      return "blue";
    }
  };

  useEffect(() => {
    const element = document.getElementById("tow");
    element.style.backgroundColor = "red";
    element.style.padding="50px";
    element.style.borderRadius="20px";
    element.style.margin ="20px"
    
  }, []);

  return (
    <div className="end">
      <h1>End of Quiz</h1>
      <div id="tow" onClick={renderColor}>{score}</div>
      <button className="start-button" onClick={restartQuiz}>
        Start Again
      </button>
    </div>
  );
}

export default QuizEnd;
