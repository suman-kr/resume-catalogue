import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stepper } from "./Components/Stepper";
import { Education, Experience, PersonalDetails } from "./Components/Forms";
import { Button, Card, Col, Row } from "react-bootstrap";

function App() {
  const steps = ["Personal Details", "Education", "Experience"];
  const [currentStep, setCurrentStep] = useState(1);

  const getForm = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <Education />;
      case 3:
        return <Experience />;
    }
  };

  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "35rem",
        }}
      >
        <Stepper
          currentStep={currentStep}
          steps={steps}
          key={currentStep}
          toggleStep={(step) => setCurrentStep(step)}
        />
        <Card style={{ padding: "1rem", marginTop: "5px" }}>
          {getForm(currentStep)}
          <Row>
            <Col md={3} sm={2} xs={12}>
              <Button
                style={{
                  background: "black",
                  height: "50px",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                }}
                disabled={currentStep === 1}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </Button>
            </Col>
            <Col md={1} sm={2} xs={12}>
              <Button
                style={{
                  background: "black",
                  height: "50px",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                }}
                disabled={currentStep === steps.length}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
  );
}

export default App;
