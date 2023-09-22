import React, { useContext, useState } from "react";
import Questions from "../extras/QuestionBank";
import { QuizContext } from "../extras/Contexts";

function MainQuiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionSelect, setOptionSelect] = useState("");

  // Conditions for addition and substraction Currently wrong!!!! FIXME:

  const nextQuestion = () => {
    setScore(score + 10);
    setCurrentQuestion(currentQuestion + 1);
  };

  //add randomizer TODO:

  const handleAns = (userAns) => {
    if (userAns === optionSelect) {
      setScore(score + 1);
    }
  };

  //FIXME:

  const finishQuiz = () => {
    //please revise conditional
    if (optionSelect === Questions[currentQuestion].good) {
      console.log("away");
      setScore(score + 10);
    } else if (Questions[currentQuestion].evil === optionSelect) {
      setScore(score - 1);
    }
    setGameState("end");
  };

  const lastQuestion = () => {
    nextQuestion();
    finishQuiz();
  };

  return (
    <div className="main">
      <section className="question-card">
        {" "}
        <div>{Questions[currentQuestion].goodprompt}</div>
        <div> OR </div>
        <div>{Questions[currentQuestion].badprompt}</div>
      </section>
      <div className="answers"></div>
      {/* */}
      {currentQuestion === Questions.length - 1 ? (
        <div>
          <button
            className="left"
            onClick={() => {
              lastQuestion();
              setOptionSelect("good");
            }}
          >
            Red pill
          </button>

          <button
            className="right"
            onClick={() => {
              lastQuestion();
              setOptionSelect("evil");
            }}
          >
            Blue pill
          </button>
        </div>
      ) : (
        <div>
          <button
            className="left"
            onClick={() => {
              nextQuestion();
              setOptionSelect("evil");
            }}
          >
            Red pill
          </button>

          <button
            className="right"
            onClick={() => {
              nextQuestion();
              setOptionSelect("evil");
            }}
          >
            Blue pill
          </button>
        </div>
      )}
    </div>
  );
}

export default MainQuiz;
