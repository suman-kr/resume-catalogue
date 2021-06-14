import styled, { keyframes } from "styled-components";
export function StepperStyled() {
  const VerticalStepper = styled.div`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: block;
      color: #000;
      padding: 8px 16px;
      text-decoration: none;
    }

  `;

  const StepName = styled.div`
    line-height: 2em;
    font-size: 1.5em;

    @media only screen and (max-width: 1600px) {
      line-height: 2.5em;
      font-size: 1em;
    }
  `;

  return {
    VerticalStepper,
    StepName,
  };
}
