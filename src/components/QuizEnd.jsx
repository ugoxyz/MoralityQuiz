import React, { useContext, useState } from "react";
import { QuizContext } from "../extras/Contexts";
import ReactCardFlip from "react-card-flip";
import GaugeChart from "react-gauge-chart";
// import ReactSpeedometer from "react-d3-speedometer";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Unlock from "./unlock.png";
import "./QuizEnd.css";

function QuizEnd() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [flip, setFlip] = useState(false);
  const { width, height } = useWindowSize();

  const renderColor = () => {
    let textColor = "pink",
      failColor = "purple";

    if (score <= 4) {
      return textColor;
    }

    if (score >= 7) {
      return failColor;
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const revealScore = () => {
    if (score <= 7) {
      return "You are a model citizen";
    }
    if (score > 7 && score < 14) {
      return "You are living on the edge";
    }
    if (score > 14) {
      return "Your moral compass is broken";
    }
  };

  return (
    <div className="end">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div
          id="side-one flipcard"
          style={{
            color: renderColor(),
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "rgba(163, 241, 250, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.3)",
              backdropFilter: "blur(4px)",
              cursor: "pointer",
              width: "300px",
              margin: "20px",
              height: "300px",
              padding: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "20px",
              color: "white",
            }}
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <img src={Unlock} alt="key" width={100} />
            REVEAL RESULT
          </div>
        </div>
        <div id="side-two">
          <div
            style={{
              background: "rgba(163, 241, 250, 0.05)",
              boxShadow: "0 8px 10px 0 rgba(131, 38, 135, 0.3)",
              backdropFilter: "blur(4px)",
              width: "300px",
              height: "300px",
              margin: "20px",
              padding: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "20px",
              cursor: "pointer",
              color: renderColor(),
            }}
          >
            <Confetti
              width={width}
              numberOfPieces={200}
              recycle={false}
              height={100}
            />
            <div className="speedo">
              <GaugeChart
                arcPadding={0}
                nrOfLevels={100}
                percent={(score + 20) / 40}
                id="gauge-chart1"
                needleColor="#fff"
                hideText="false"
                animate="true"
                animateDuration={10000}
                cornerRadius={0}
              />
              {/* <ReactSpeedometer
                maxValue={40}
                maxSegmentLabels={0}
                value={score + 20}
                needleColor="white"
                startColor="green"
                segments={40}
                endColor="red"
                width={300}
                needleTransitionDuration={9999}
                needleTransition="easeElastic"
                textColor="white"
                ringWidth={75}
                paddingVertical={10}
                currentValueText={revealScore()}
              /> */}
              <div className="verdict">{revealScore()}</div>
            </div>
            <button className="start-button" onClick={restartQuiz}>
              Start Again
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default QuizEnd;
