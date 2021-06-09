import { Action as ReduxAction } from "redux";

interface Action<T> extends ReduxAction {
  payload?: T;
}

interface FormPayload {}

const INITIAL_STATE = {
  fullName: "",
  email: "",
  phoneNumber: "",
  linkedIn: "",
  github: "",
  website: "",
  company: [],
  title: [],
  employmentType: [],
  location: [],
  description: [],
  startDate: [],
  endDate: [],
  instituteName: "",
  degree: "",
  major: "",
  startYear: "",
  endYear: "",
  grade: "",
  skillName: [],
  expertise: [],
  projectName: [],
  projectDescription: [],
  achievements: "",
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
