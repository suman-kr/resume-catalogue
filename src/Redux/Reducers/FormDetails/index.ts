import { Action as ReduxAction } from "redux";

interface Action<T> extends ReduxAction {
  payload?: T;
}

export interface FormPayload {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  linkedIn?: string;
  github?: string;
  website?: string;
  experience?: Array<any>;
  instituteName?: string;
  degree?: string;
  major?: string;
  startYear?: string;
  endYear?: string;
  grade?: string;
  skills?: Array<any>;
  projects?: Array<any>;
  achievements?: string;
}

const INITIAL_STATE: FormPayload = {
  fullName: "",
  email: "",
  phoneNumber: "",
  linkedIn: "",
  github: "",
  website: "",
  experience: [],
  instituteName: "",
  degree: "",
  major: "",
  startYear: "",
  endYear: "",
  grade: "",
  skills: [],
  projects: [],
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
