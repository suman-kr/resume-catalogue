import styled, { keyframes } from "styled-components";
export function WizardStyled() {
  const Container = styled.div`
    margin: 2em 1.5em 1em 0;
    display: grid;
    grid-auto-flow: column;
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

  const StepperStyled = styled.div`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 200px;
      background-color: #f1f1f1;
    }

    li {
      display: block;
      color: #000;
      padding: 8px 16px;
      text-decoration: none;
      cursor: pointer;
    }

    /* Change the link color on hover */
    li:hover {
      background-color: #555;
      color: white;
    }
  `;

  return {
    Container,
    Button,
    ButtonContainer,
    ImageContainer,
    StepperStyled,
  };
}
