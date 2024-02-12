import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  function toggleGamePlay() {
    setIsGameStarted(true);
  }
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
}
export default App;
