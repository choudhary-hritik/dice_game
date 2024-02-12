import styled from "styled-components";

function RoleDice({ currentDice, setCurrentDice, roleDice }) {
  return (
    <RoleDiceContainer>
      <div className="dice">
        <img
          src={`dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
          onClick={roleDice}
        />
      </div>
      <p>Click On Dice Role</p>
    </RoleDiceContainer>
  );
}

export default RoleDice;

const RoleDiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 24px;
    font-weight: 500;
  }

  .dice {
    cursor: pointer;
  }

  .reset-btn {
    background-color: transparent;
    color: black;
  }

  .rules-btn {
    background-color: black;
    color: white;
    min-width: 220px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
  }
`;
