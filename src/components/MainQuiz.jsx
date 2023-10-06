import React, { useContext, useState } from "react";
import Questions from "../extras/QuestionBank";
import { QuizContext } from "../extras/Contexts";
import "./MainQuiz.css";

function MainQuiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (pillType) => () =>
    setTimeout(() => {
      // let randomizer = Math.floor(Math.random()*Questions.length);

      //check selected pill
      if (currentQuestion === Questions.length - 1) {
        setGameState("end");
      }

      if (pillType === "red") {
        setScore(score - 1);
      }

      if (pillType === "blue") {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
    }, 800);

  return (
    <div className="main">
      <h1 className="main-question">{Questions[currentQuestion].dilemma}</h1>
      <div className="question-card">
        <div className="left button" onClick={handleClick("red")}>
          {Questions[currentQuestion].good}
        </div>
        <div className="right button" onClick={handleClick("blue")}>
          {Questions[currentQuestion].evil}
        </div>
      </div>
    </div>
  );
}

export default MainQuiz;
