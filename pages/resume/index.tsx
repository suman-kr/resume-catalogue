import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ResumeStyled } from "../../src/Components/Resume/styled";
import Head from "next/head";
import { FormActions } from "../../src/Redux/Actions/FormActions";
import { connect } from "react-redux";
import { FormPayload } from "../../src/Redux/Reducers/FormDetails";
import { Month } from "../../src/data/month";
import { SummerResume } from "../../src/Components/Resume/Layouts/Summer";

const Styled = ResumeStyled();
const Resume = (props: { forms: FormPayload }) => {
  return <SummerResume forms={props.forms} />;
};

const mapStateToProps = (store: any) => {
  const { forms } = store;
  return {
    forms,
  };
};

const mapDispatchToProps = {
  updateForms: FormActions.UpdateForms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
