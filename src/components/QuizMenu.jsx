import React, { useContext } from "react";
import { QuizContext } from "../extras/Contexts";

function QuizMenu() {
  const {setGameState } = useContext(QuizContext);

  return (
    <div className="menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizMenu;
