import { FormPayload } from "../../Redux/Reducers/FormDetails";

export interface WizardInterface {
  updateForms: (value: FormPayload) => void;
  forms: FormPayload;
}
