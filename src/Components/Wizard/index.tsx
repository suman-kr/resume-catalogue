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
import * as Yup from "yup";
import { validationSchemas } from "../Forms/validationSchemas";
import { formInitialValues } from "../Forms/formInitialValue";

const { Container, Button, ButtonContainer, ImageContainer } = Styled();

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

  const _handleSubmit = (values, actions) => {
    props.updateForms({ ...values });
    if (currentStep !== steps.length) {
      setCurrentStep(currentStep + 1);
      actions.setTouched({});
    } else {
      console.log(values);
    }
  };

  const isLastStep = currentStep === steps.length;

  return (
    <>
      <div
        style={{ minHeight: "50px", width: "100%", background: "black" }}
      ></div>
      <Container>
        <Stepper
          currentStep={currentStep}
          steps={steps}
          key={currentStep}
          toggleStep={(step) => setCurrentStep(step)}
        />
        <Card className="wizard-card">
          <Formik
            initialValues={formInitialValues}
            onSubmit={_handleSubmit}
            validationSchema={validationSchemas[currentStep - 1]}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                {getForm(currentStep, formik)}
                <ButtonContainer>
                  {currentStep > 1 && (
                    <Button
                      disabled={currentStep === 1}
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  <Button type="submit">
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </ButtonContainer>
              </Form>
            )}
          </Formik>
        </Card>
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
