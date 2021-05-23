import styled from "styled-components";

export function AddButtonStyled() {
  const Button = styled.button`
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background: black;

    &:hover {
      opacity: 0.75;
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
