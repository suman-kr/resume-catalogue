import { Dispatch } from "redux";

export const FormActions = {
  UpdateForms: (payload: any) => (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_FORM", payload });
  },
};
