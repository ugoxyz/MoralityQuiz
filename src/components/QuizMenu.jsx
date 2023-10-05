import React, { useContext } from "react";
import { QuizContext } from "../extras/Contexts";
import "./QuizMenu.css";
import YinYang from "./yinyang.png"

function QuizMenu() {
  const { setGameState } = useContext(QuizContext);

  return (
    <div>
      <p>
        {" "}
        Disclaimer: This Morality quiz is totally anonymous. It is not meant to
        judge but to help you reflect. <br />
        You can take it as many times as you want
      </p>
      
      <div
        className="menu"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        <img src={YinYang} alt="logo" width={100} />
     Start
      </div>
    </div>
  );
}

export default QuizMenu;
