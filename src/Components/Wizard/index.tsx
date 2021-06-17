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
import { ResumeSideBar } from "../ResumeSideBar";

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
  const [sideBar, setSideBar] = useState(false);
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

  const _handleSidebar = () => {
    setSideBar((prevValue: boolean) => {
      if (!prevValue) {
        {
          document.getElementById("overlay").style.display = "block";
          document.getElementById("mySidebar").style.width = "70%";
        }
      } else {
        document.getElementById("mySidebar").style.width = "0";
      }
      return !prevValue;
    });

    // document.getElementById("main").style.marginLeft = "250px";
  };

  const isLastStep = currentStep === steps.length;

  return (
    <>
      {/* <ButtonContainer>
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
        
      </ButtonContainer> */}
      <Container>
        <Stepper
          currentStep={currentStep}
          steps={steps}
          key={currentStep}
          toggleStep={(step) => setCurrentStep(step)}
          vertical
        />
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
          <div>
            <Button type="submit" form="form">
              {isLastStep ? "Submit" : "Save & Continue"}
            </Button>
          </div>
        </Card>
        <Button
          className="openbtn"
          onClick={_handleSidebar}
          style={{
            position: "fixed",
            top: "50%",
            right: 0,
            transition: "0.5s",
          }}
          id="view-sidebar"
        >
          VIEW
        </Button>
        {<ResumeSideBar forms={props.forms} />}
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
