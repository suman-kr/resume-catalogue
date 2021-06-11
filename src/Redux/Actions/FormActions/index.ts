import { Dispatch } from "redux";
import { FormPayload } from "../../Reducers/FormDetails";

export const FormActions = {
  UpdateForms: (payload: FormPayload) => (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_FORM", payload });
  },
};
