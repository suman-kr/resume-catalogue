import styled from "styled-components";

export function RemoveButtonStyled() {
  const Button = styled.button`
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: black;
    border: 0;

    &:hover {
      background: #ed403a;
      color: white;
    }

    &:active {
      border-color: lightgray;
      box-shadow: 0 0 0 0.2rem lightgray;
    }
  `;

  return {
    Button,
  };
}
