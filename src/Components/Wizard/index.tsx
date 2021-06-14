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
import { Card, Col, Row } from "react-bootstrap";
import { WizardStyled as Styled } from "./styled";
import { WizardInterface } from "./interfaces";
import { Formik, FormikProps, Form } from "formik";
import { validationSchemas } from "../Forms/validationSchemas";
import { useRouter } from "next/router";

const {
  Container,
  Button,
  ButtonContainer,
  ImageContainer,
  StepperStyled,
} = Styled();

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
  const router = useRouter();
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

  const _handleSubmit = (values: any, actions: any) => {
    props.updateForms({ ...values });
    if (currentStep !== steps.length) {
      setCurrentStep(currentStep + 1);
      actions.setTouched({});
    } else {
      router.push("/resume");
    }
  };

  const isLastStep = currentStep === steps.length;

  return (
    <>
      <Container>
        {/* <Stepper
          currentStep={currentStep}
          steps={steps}
          key={currentStep}
          toggleStep={(step) => setCurrentStep(step)}
        /> */}
        <StepperStyled>
          <ul>
            {steps.map((step, ind) => (
              <li>
                <div
                  style={{
                    background: "black",
                    color: "white",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    textAlign: "center",
                    zIndex: 1,
                    cursor: "pointer",
                  }}
                >
                  {ind + 1}
                </div>
                {step}
              </li>
            ))}
          </ul>
        </StepperStyled>
        <div>
          <Card className="wizard-card">
            <Formik
              enableReinitialize
              initialValues={{ ...props.forms }}
              onSubmit={_handleSubmit}
              validationSchema={validationSchemas[currentStep - 1]}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit} id="form">
                  {getForm(currentStep, formik)}
                </Form>
              )}
            </Formik>
          </Card>
          <Card className="button-card">
            <ButtonContainer>
              {currentStep > 1 && (
                <Button
                  type="button"
                  disabled={currentStep === 1}
                  onClick={(event) => setCurrentStep(currentStep - 1)}
                  form="form"
                >
                  Previous
                </Button>
              )}
              <Button type="submit" form="form">
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </ButtonContainer>
          </Card>
        </div>
        <ImageContainer
          src={"/static/images/resume.svg"}
          width={250}
          height={250}
        />
      </Container>
    </>
  );
}

export default Wizard;
