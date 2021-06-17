import styled, { keyframes } from "styled-components";
export function WizardStyled() {
  const Container = styled.div`
    margin-left: 5em;
    display: grid;
    grid-template-columns: 22% 60%;
    font-family: "Lato", sans-serif;

    @media only screen and (max-width: 1000px) {
      margin: 0;
      grid-template-columns: 17% 83%;
    }
  `;

  const Button = styled.button`
    background: black;
    color: white;
    max-width: 24em;
    border: none;
    font-weight: 600;
    float: right;
    padding: 1em;
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
