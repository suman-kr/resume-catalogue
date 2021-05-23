import styled, { keyframes } from "styled-components";
export function WizardStyled() {
  const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    background: black;
    height: 50px;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: white;
  `;

  return {
    Container,
    Button,
  };
}
