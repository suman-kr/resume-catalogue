import styled, { keyframes } from "styled-components";
export function WizardStyled() {
  const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Lato", sans-serif;
  `;

  const Button = styled.button`
    background: black;
    height: 50px;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: white;
    max-width: 300px;
    border: none;
  `;

  const ButtonContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  `;

  return {
    Container,
    Button,
    ButtonContainer,
  };
}
