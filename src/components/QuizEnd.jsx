import React, { useContext } from "react";
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
    }else if(score <= 7){
return "purple"
    }else{
      return "blue"
    }
  };

  return (
    <div className="end">
      <h1>End of Quiz</h1>

      <h3 style={{color: renderColor()}}>{score}</h3>
      <button onClick={restartQuiz}>Start Again</button>
    </div>
  );
}

export default QuizEnd;
