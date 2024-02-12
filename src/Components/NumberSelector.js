import styled from "styled-components";

function NumberSelector({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  function handleNumberSelection(value) {
    setSelectedNumber(value);
    setError("");
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumbers.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            key={i}
            onClick={() => handleNumberSelection(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 10px;
  }

  .error {
    color: red;
    font-size: 24px;
    font-weight: 500;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  min-width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
