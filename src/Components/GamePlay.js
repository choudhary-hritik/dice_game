import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button } from "../Styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [rules, setRules] = useState(false);
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function roleDice() {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((i) => i + randomNumber);
    } else {
      setScore((i) => i - 2);
    }
  }
  function resetScore() {
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top_container">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <Button className="reset-btn" onClick={resetScore}>
          Reset Score
        </Button>
        <Button className="rules-btn" onClick={() => setRules((prev) => !prev)}>
          Show Rules
        </Button>
      </div>

      {rules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  .top_container {
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 70px;
  }
  .btn {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 40px;
  }
`;
