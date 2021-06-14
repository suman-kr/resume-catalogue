import styled, { keyframes } from "styled-components";
export function WizardStyled() {
  const Container = styled.div`
    margin: 2em 1.5em 1em 0;
    display: grid;
    grid-template-columns: 17% 83%;
    font-family: "Lato", sans-serif;

    @media only screen and (max-width: 800px) {
      margin: 2em 0 0 0;
    }
  `;

  const Button = styled.button`
    background: black;
    height: 50px;
    text-transform: uppercase;
    color: white;
    max-width: 24em;
    border: none;
    font-weight: 600;
  `;

  const ButtonContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  `;

  const ImageContainer = styled.img`
    position: fixed;
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
