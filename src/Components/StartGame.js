import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

function StartGame({ toggleGamePlay }) {
  return (
    <Container>
      <img src="./dices1.png" alt="dice1-logo" />

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;

  .content h1 {
    font-size: 96px;
  }
`;
