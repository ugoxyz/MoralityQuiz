import React, { useContext } from "react";
import { QuizContext } from "../extras/Contexts";
import "./QuizMenu.css";
import YinYang from "./yinyang.png";
import { SocialIcon } from "react-social-icons";

function QuizMenu() {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className="container">
      {/* <p>
        {" "}
        Disclaimer: This Morality quiz is totally anonymous. It is not meant to
        judge but to help you reflect. <br />
        You can take it as many times as you want
      </p> */}

      <div
        className="menu"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        <img src={YinYang} alt="logo" width={100} />
        Start
      </div>
      <footer>
        <a href="https://github.com/ugoxyz">
          <SocialIcon
            className="icon"
            fgColor="none"
            bgColor="cyan"
            url="https://github.com/ugoxyz"
          />
          Somebody Made This
        </a>
      </footer>
    </div>
  );
}

export default QuizMenu;
