import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 18px 10px;
  min-width: 220px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
