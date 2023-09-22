import React, { useContext } from "react";
import { QuizContext } from "../extras/Contexts";

function QuizEnd() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () =>{
    setScore(0);
    setGameState("menu")
  }

  return (
    <div className="end">
      <h1>End of Quiz</h1>

      <h3>{score}</h3>
      <button onClick={restartQuiz}>Start Again</button>
    </div>
  );
}

export default QuizEnd;
