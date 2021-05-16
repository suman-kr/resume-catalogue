import React from "react";
import { Card, Col } from "react-bootstrap";

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

  displaySteps = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {this.props.steps.map((step, index) => (
          <div>
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
                onClick={() => this.handleStepToggle(index + 1)}
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
          </div>
        ))}
      </div>
    );
  };

  render() {
    return <Card style={{ padding: "2rem" }}>{this.displaySteps()}</Card>;
  }
}

interface Props {
  currentStep: number;
  steps: string[];
  toggleStep?: (step: number) => void;
}

interface State {
  step: number;
}