import { Action as ReduxAction } from "redux";

interface Action<T> extends ReduxAction {
  payload?: T;
}

export interface FormPayload {
  fullName: string;
  email: string;
  contact: string;
  linkedIn: string;
  github: string;
  website: string;
  experience: {
    company: string;
    title: string;
    employmentType: string;
    location: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];
  instituteName: string;
  degree: string;
  major: string;
  startYear: string;
  endYear: string;
  grade: string;
  skills: { skillName: string; expertise: string }[];
  projects: { projectName: string; projectDescription: string }[];
  achievements: string;
}

const INITIAL_STATE: FormPayload = {
  fullName: "",
  email: "",
  contact: "",
  linkedIn: "",
  github: "",
  website: "",
  instituteName: "",
  degree: "",
  major: "",
  startYear: "",
  endYear: "",
  grade: "",
  experience: [
    {
      company: "",
      title: "",
      employmentType: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ],
  skills: [
    {
      skillName: "",
      expertise: "",
    },
  ],
  projects: [
    {
      projectName: "",
      projectDescription: "",
    },
  ],
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
