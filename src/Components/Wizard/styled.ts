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
    color: white;
    max-width: 24em;
    border: none;
  `;

  const ButtonContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  `;

  const ImageContainer = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.75;
  `;

  return {
    Container,
    Button,
    ButtonContainer,
    ImageContainer,
  };
}
