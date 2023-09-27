import { useState } from "react";
import "./App.css";
import { QuizContext } from "./extras/Contexts";
import QuizMenu from "./components/QuizMenu";
import MainQuiz from "./components/MainQuiz";
import QuizEnd from "./components/QuizEnd";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <QuizMenu />}
        {gameState === "quiz" && <MainQuiz />}
        {gameState === "end" && <QuizEnd />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
