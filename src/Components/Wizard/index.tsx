import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stepper } from "../Stepper";
import { Education, Experience, PersonalDetails } from "../Forms";
import { Card, Col, Row } from "react-bootstrap";
import { WizardStyled as Styled } from "./styled";

function Wizard() {
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

  const { Container, Button } = Styled();

  return (
    <Container>
      <Stepper
        currentStep={currentStep}
        steps={steps}
        key={currentStep}
        toggleStep={(step) => setCurrentStep(step)}
      />
      <Card className="wizard-card">
        {getForm(currentStep)}
        <Row>
          <Col md={3} sm={2} xs={12}>
            <Button
              disabled={currentStep === 1}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </Button>
          </Col>
          <Col md={1} sm={2} xs={12}>
            <Button
              disabled={currentStep === steps.length}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Wizard;
