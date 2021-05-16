import styled from "styled-components";

export function WizardStyled() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 35rem;
  `;

  const Button = styled.button`
    background: black;
    height: 50px;
    text-transform: uppercase;
    margin-bottom: 5px;
  `;

  return {
    Container,
    Button,
  };
}
