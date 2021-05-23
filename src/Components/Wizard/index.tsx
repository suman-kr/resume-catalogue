import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stepper } from "../Stepper";
import {
  CareerAchievements,
  Education,
  Experience,
  PersonalDetails,
  Projects,
  Skills,
} from "../Forms";
import { Card, Col, Form, Row } from "react-bootstrap";
import { WizardStyled as Styled } from "./styled";
import { WizardInterface } from "./interfaces";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

const { Container, Button } = Styled();

function Wizard(props: WizardInterface) {
  const steps = [
    "Personal Details",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Achievements",
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const saveDetails = (form: any) => {
    console.log("forms: ", form.target.value);
    // props.updateForms({ value });
  };

  const getForm = (step: number, formik: FormikProps<any>) => {
    switch (step) {
      case 1:
        return <PersonalDetails formik={formik} />;
      case 2:
        return <Education formik={formik} />;
      case 3:
        return <Experience formik={formik} />;
      case 4:
        return <Skills formik={formik} />;
      case 5:
        return <Projects formik={formik} />;
      case 6:
        return <CareerAchievements formik={formik} />;
    }
  };

  return (
    <Container>
      <Stepper
        currentStep={currentStep}
        steps={steps}
        key={currentStep}
        toggleStep={(step) => setCurrentStep(step)}
      />
      <Card className="wizard-card">
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              {getForm(currentStep, formik)}
            </Form>
          )}
        </Formik>

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
              onClick={(event) => {
                setCurrentStep(currentStep + 1);
              }}
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
