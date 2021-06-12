import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

export function FormsStyled() {
  const FadeIn = styled.div`
    animation: 1s ${keyframes`${fadeIn}`} 1;
  `;
  const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
  `;

  return {
    FadeIn,
    FormContainer,
  };
}
