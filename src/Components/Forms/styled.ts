import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

export function FormsStyled() {
  const FadeIn = styled.div`
    animation: 1s ${keyframes`${fadeIn}`} 1;
  `;
  const FormContainer = styled.div`
    max-height: 18em;
    overflow-x: hidden;
    overflow-y: auto;
  `;

  return {
    FadeIn,
    FormContainer,
  };
}
