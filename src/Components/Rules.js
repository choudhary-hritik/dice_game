import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p> <p>Click on dice</p>{" "}
        <p>
          image after click on dice if selected number is equal to dice number
          you will get same point as dice if you get wrong guess then 2 point
          will be dedcuted{" "}
        </p>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  max-width: 794px;

  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  height: 208px;
  h1 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;
