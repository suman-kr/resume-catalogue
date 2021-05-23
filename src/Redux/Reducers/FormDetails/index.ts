import { Action as ReduxAction } from "redux";

interface Action<T> extends ReduxAction {
  payload?: T;
}

interface FormPayload {}

const INITIAL_STATE = {
  name: "",
  email: "",
};

type MapPayload = FormPayload;

export const FormReducer = (
  state = INITIAL_STATE,
  action: Action<MapPayload>
) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
