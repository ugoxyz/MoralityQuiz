import React, { useContext } from "react";
import { QuizContext } from "../extras/Contexts";
import "./QuizMenu.css";

function QuizMenu() {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className="menu">
      <h1>Check your Morality</h1>
      <button
        className="start-button"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
      <p> Disclaimer: This quiz is totally anonymous. You can take it as many times as you want</p>
    </div>
  );
}

export default QuizMenu;
