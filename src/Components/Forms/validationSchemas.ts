import * as Yup from "yup";

export const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    contact: Yup.string()
      .required("Contact is required")
      .matches(
        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
        "Invalid phone number"
      ),
    dob: Yup.string(),
  }),
  Yup.object({
    instituteName: Yup.string().required("Institute name is required"),
    degree: Yup.string().required("Degree is required"),
    major: Yup.string().required("Field of study is required"),
    startYear: Yup.string().required("Start year is required"),
    endYear: Yup.string(),
    grade: Yup.string(),
  }),

  Yup.object().shape({
    experience: Yup.array().of(
      Yup.object().shape({
        company: Yup.string().required("Company Name is required"),
        title: Yup.string().required("Designation is required"),
        employmentType: Yup.string().required("Employment Type is required"),
        location: Yup.string(),
        description: Yup.string().required("Work details are required"),
        startDate: Yup.string().required("Joining date is required"),
        endDate: Yup.string(),
      })
    ),
  }),

  Yup.object().shape({
    skills: Yup.array().of(
      Yup.object().shape({
        skillName: Yup.string().required("Name is required"),
        expertise: Yup.string(),
      })
    ),
  }),

  Yup.object().shape({
    projects: Yup.array().of(
      Yup.object().shape({
        projectName: Yup.string().required("Project name is required"),
        projectDescription: Yup.string().required("Description is required"),
      })
    ),
  }),

  Yup.object({
    achievements: Yup.string(),
  }),
];