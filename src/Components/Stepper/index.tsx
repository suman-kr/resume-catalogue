import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { StepperStyled as Styled } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const { VerticalStepper, StepName } = Styled();
export class Stepper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      step: props.currentStep,
    };
  }

  handleStepToggle = (step: number) => {
    this.props.toggleStep && this.props.toggleStep(step);
  };

  // stepIcon = (step: number) => {
  //   if (step < this.state.step)
  //     return (<div style={{background: "black"}}></div> <FontAwesomeIcon icon={faCheck} style={{ marginRight: "3px" }} />);
  // };

  displaySteps = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {this.props.steps.map((step, index) => (
          <Row className="m-0">
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: this.state.step === index + 1 ? "black" : "gray",
                  color: "white",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  textAlign: "center",
                  zIndex: 1,
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </div>
              <text>{step}</text>
              <hr
                style={{
                  borderTop: "2px solid lightgray",
                  position: "absolute",
                  width: "100%",
                  top: "-4px",
                }}
              />
            </Col>
          </Row>
        ))}
      </div>
    );
  };

  render() {
    return (
      <>
        {this.props.vertical ? (
          <VerticalStepper>
            <ul>
              {this.props.steps.map((step, ind) => (
                <li>
                  <Row
                    style={{
                      padding: "0.5em 1em",
                      minWidth: "8em",
                      boxShadow:
                        this.state.step === ind + 1
                          ? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        background:
                          this.state.step === ind + 1 ? "black" : "gray",
                        color: "white",
                        borderRadius: "50%",
                        width: this.state.step === ind + 1 ? "3.5em" : "3em",
                        height: this.state.step === ind + 1 ? "3.5em" : "3em",
                        cursor: "pointer",
                        marginRight:
                          this.state.step === ind + 1 ? "1.1em" : "1.5em",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: this.state.step === ind + 1 ? "3.5em" : "3em",
                        }}
                      >
                        {ind + 1}
                      </div>
                    </div>
                    {/* {this.stepIcon(ind + 1)} */}
                    <StepName>{step}</StepName>
                  </Row>
                </li>
              ))}
            </ul>
          </VerticalStepper>
        ) : (
          <Card
            style={{
              padding: "2rem",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              borderRadius: 0,
            }}
          >
            {this.displaySteps()}
          </Card>
        )}
      </>
    );
  }
}

interface Props {
  currentStep: number;
  steps: string[];
  toggleStep?: (step: number) => void;
  vertical?: boolean;
}

interface State {
  step: number;
}
