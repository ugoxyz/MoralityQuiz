import React, { useContext, useState } from "react";
import Questions from "../extras/QuestionBank";
import { QuizContext } from "../extras/Contexts";

function MainQuiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (pillType) => () => {
    //check selected pill
    if (currentQuestion === Questions.length - 1) {
      // setScore(score)
      setGameState("end");
      // return;
    }

    // console.log(score);
    if (pillType === "red") {
      setScore(score - 1);
      // setCurrentQuestion(currentQuestion + 1);
    }

    if (pillType === "blue") {
      setScore(score + 1);
      // console.log(score);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  // const nextQuestion = (pillType) => {
  //   if (pillType === "blue") {
  //     setScore(score + 10);
  //     console.log("babalue");
  //   }

  //  // if (pillType === "red") {
  //   //   setScore(score + 10);
  //   //   console.log("babalue");
  //   //
  //   // }
  //   // if (
  //   //   pillType === "blue" &&
  //   //   currentQuestion === Questions[currentQuestion].length - 1
  //   // ) {
  //   // }
  //   // setCurrentQuestion(currentQuestion + 1);
  //   // setGameState("end");
  // };

  return (
    <div className="main">
      <section className="question-card">
        {" "}
        <div>{Questions[currentQuestion].goodprompt}</div>
        <div> OR </div>
        <div>{Questions[currentQuestion].badprompt}</div>
      </section>
      <div className="answers">
        {/* */}
        <div>
          <button className="left" onClick={handleClick("red")}>
            Red pill
          </button>

          <button className="right" onClick={handleClick("blue")}>
            Blue pill
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainQuiz;
