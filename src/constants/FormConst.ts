interface FormFieldsInterface {
  placeholder: string;
  index: number;
  name: string;
  type: string;
  label: string;
}

export const personalDetails: FormFieldsInterface[] = [
  {
    placeholder: "Enter your name",
    type: "text",
    index: 1,
    name: "fullName",
    label: "Your Name",
  },
  {
    placeholder: "Enter email",
    type: "text",
    index: 2,
    name: "email",
    label: "Email",
  },
  {
    placeholder: "Enter phone number",
    type: "text",
    index: 3,
    name: "contact",
    label: "Phone Number",
  },
  {
    placeholder: "Enter date of birth",
    index: 4,
    label: "Date of Birth",
    name: "dob",
    type: "date",
  },
];

export const workExperience: FormFieldsInterface[] = [
  {
    placeholder: "Enter company name",
    type: "text",
    index: 1,
    name: "company",
    label: "Company Name",
  },
  {
    placeholder: "Enter role/designation",
    type: "text",
    index: 2,
    name: "title",
    label: "Role/Designation",
  },
  {
    placeholder: "Enter employment type",
    type: "text",
    index: 3,
    name: "employmentType",
    label: "Employment Type",
  },
  {
    placeholder: "Enter location",
    type: "text",
    index: 4,
    name: "location",
    label: "Location",
  },
  {
    placeholder: "Enter work description",
    type: "textarea",
    index: 5,
    name: "description",
    label: "Work description",
  },
  {
    placeholder: "Enter start date",
    type: "date",
    index: 6,
    name: "startDate",
    label: "Start Date",
  },
  {
    placeholder: "Enter end date",
    type: "date",
    index: 7,
    name: "endDate",
    label: "End Date",
  },
];

export const education: FormFieldsInterface[] = [
  {
    placeholder: "Enter institute name",
    name: "instituteName",
    type: "text",
    index: 1,
    label: "Institute Name",
  },
  {
    placeholder: "Enter degree",
    name: "degree",
    index: 2,
    type: "text",
    label: "Degree",
  },
  {
    placeholder: "Enter major",
    name: "major",
    index: 3,
    label: "Major",
    type: "text",
  },
  {
    placeholder: "Enter start year",
    name: "startYear",
    index: 4,
    label: "Start Year",
    type: "text",
  },
  {
    placeholder: "Enter end year",
    name: "endYear",
    index: 5,
    label: "End Year",
    type: "text",
  },
  {
    placeholder: "Enter grade",
    name: "grade",
    index: 6,
    type: "text",
    label: "Grade",
  },
];

export const skills = [
  { placeholder: "Name", name: "skillName", index: 1 },
  { placeholder: "Expertise", name: "expertise", index: 2 },
];

export const projects = [
  { placeholder: "Project Name", name: "projectName", index: 1, type: "text" },
  {
    placeholder: "Description",
    name: "projectDescription",
    index: 2,
    type: "textarea",
  },
];

export const careerAchievements = [
  {
    placeholder: "Achievement Description",
    name: "achievements",
    type: "textarea",
    index: 1,
  },
];

export const socialAccounts = [
  {
    placeholder: "Linkedin",
    type: "text",
    index: 4,
    name: "linkedIn",
  },
  {
    placeholder: "Github",
    type: "text",
    index: 5,
    name: "github",
  },
  {
    placeholder: "Portfolio/Website",
    type: "text",
    index: 6,
    name: "website",
  },
];
