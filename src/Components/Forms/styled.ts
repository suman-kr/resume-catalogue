import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

export function FormsStyled() {
  const FadeIn = styled.div`
    animation: 1s ${keyframes`${fadeIn}`} 1;
  `;

  return {
    FadeIn,
  };
}
