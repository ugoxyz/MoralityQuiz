import React, { useContext, useState } from "react";
import { QuizContext } from "../extras/Contexts";
import ReactCardFlip from "react-card-flip";
import Spinner from "../extras/Spinner";

function QuizEnd() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [flip, setFlip] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState("");

  //FIXME: not working

  const renderColor = () => {
    let textColor = "red",
      failColor = "purple";
    // message = document.getElementById("side-two").textContent = "hello";

    if (score <= 4) {
      return textColor;
    }

    if (score >= 7) {
      return failColor;
    }
  };

  // const renderResponse = () => {
  //   let message = (document.getElementById("side-one").innerHTML =
  //     "<div>You failed</div>");
  //   if (score <= 4) {
  //     return message;
  //   }

  //   if (score >= 7) {
  //     return "You are going to hell";
  //   }

  //   setFlip(flip);
  // };
  //TODO:

  // useEffect(() => {
  //   const element = document.getElementById("untow");
  //   element.style.backgroundColor = "white";
  //   element.style.padding = "100px";
  //   element.style.borderRadius = "20px";
  //   element.style.margin = "20px";

  //   setScore(score);
  // }, []);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setLoading();
  };

  if (loading) {
    return (
      <div className="end">
        <h1>End of Quiz</h1>
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <div id="side-one" style={{ color: renderColor() }}>
            <button
              style={{
                width: "250px",
                margin: "20px",
                height: "250px",
                padding: "10px",
                fontSize: "20px",
                background: "#f5d9fa",
                fontWeight: "bold",
                borderRadius: "20px",
              }}
              onClick={() => setFlip(!flip)}
            >
              Your score is: {score}{" "}
            </button>
          </div>
          <div id="side-two">
            <button
              style={{
                width: "250px",
                height: "250px",
                margin: "20px",
                padding: "10px",
                fontSize: "20px",
                background: "#f5d9fa",
                fontWeight: "bold",
                borderRadius: "20px",
                color: renderColor(),
              }}
              onClick={() => {
                setFlip(!flip);
              }}
            >
              You are
            </button>
          </div>
        </ReactCardFlip>

        <button className="start-button" onClick={restartQuiz}>
          Start Again
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <img src="spinner.gif" alt="spinner" />
        <Spinner size={30}></Spinner>
      </div>
    );
  }
}

export default QuizEnd;
