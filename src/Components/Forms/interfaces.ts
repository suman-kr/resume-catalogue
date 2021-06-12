import { FormikProps } from "formik";
import { FormPayload } from "../../Redux/Reducers/FormDetails";

export interface InitialProps {
  formik: FormikProps<FormPayload>;
}
