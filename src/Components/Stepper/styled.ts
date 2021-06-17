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

    .border::before {
      position: relative;
      content: "";
      background-color: black;
      width: 5px;
      position: relative;
    }
  `;

  const StepName = styled.div<{ currentStep: boolean }>`
    line-height: ${(props) => (props.currentStep ? "4em" : "3.5em")};
    font-size: 1em;

    @media only screen and (max-width: 1600px) {
      line-height: ${(props) => (props.currentStep ? "4em" : "3.5em")};
      font-size: 1em;
    }
  `;

  return {
    VerticalStepper,
    StepName,
  };
}
