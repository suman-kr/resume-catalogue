import React from "react";
import { ResumeStyled } from "../../src/Components/Resume/styled";
import Head from "next/head";
import { FormActions } from "../../src/Redux/Actions/FormActions";
import { connect } from "react-redux";
import { FormPayload } from "../../src/Redux/Reducers/FormDetails";
import { SummerResume } from "../../src/Components/Resume/Layouts/Summer";

const Styled = ResumeStyled();
const Resume = (props: { forms: FormPayload }) => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <SummerResume forms={props.forms} />
    </>
  );
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
