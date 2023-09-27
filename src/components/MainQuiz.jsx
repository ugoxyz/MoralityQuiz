import React, { useContext, useState } from "react";
import Questions from "../extras/QuestionBank";
import { QuizContext } from "../extras/Contexts";
import "./MainQuiz.css";
import { motion } from "framer-motion";

function MainQuiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (pillType) => () => setTimeout (()=>{
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
    
  }, 800);

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

      <motion.div className="main" initial={{opacity: 0}}
      animate={{opacity: 1}} exit={{opacity: 0}}
      >
      <h1 className="main-question">{Questions[currentQuestion].dilemma}</h1>
      <section className="question-card">
        
        {" "}
        <div className="left button" onClick={handleClick("red")}>
          {Questions[currentQuestion].good}
        </div>
                <div className="right button" onClick={handleClick("blue")}>
          {Questions[currentQuestion].evil}
        </div>
      </section>
      {/* <div className="answers">
        
        <div>
          <button className="left" onClick={handleClick("red")}></button>

          <button className="right" onClick={handleClick("blue")}></button>
        </div>
      </div> */}
    </motion.div>
  );
}

export default MainQuiz;
