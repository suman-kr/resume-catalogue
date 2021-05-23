import Head from "next/head";
import { connect } from "react-redux";
import StepWizard from "../src/Components/Wizard";
import { FormActions } from "../src/Redux/Actions/FormActions";

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Fill Details</title>
      </Head>
      <StepWizard {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
