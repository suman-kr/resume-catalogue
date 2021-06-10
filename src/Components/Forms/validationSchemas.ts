import { validateYupSchema } from "formik";
import * as Yup from "yup";

export const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    contact: Yup.string().required("Contact is required"),
    linkedIn: Yup.string(),
    github: Yup.string(),
    website: Yup.string(),
  }),
  Yup.object({
    instituteName: Yup.string().required("Institute name is required"),
    degree: Yup.string(),
    major: Yup.string(),
    startYear: Yup.string(),
    endYear: Yup.string(),
    grade: Yup.string(),
  }),

  Yup.object({
    experience: Yup.array().of(
      Yup.object().shape({
        company: Yup.string().required("Company Name is required"),
        title: Yup.string().required("Designation is required"),
        employmentType: Yup.string().required("Employment Type is required"),
        location: Yup.string(),
        description: Yup.string().required("Work details is required"),
        startDate: Yup.string()
          .min(4)
          .max(4)
          .required("Start date is required"),
        endDate: Yup.string(),
      })
    ),
  }),
];