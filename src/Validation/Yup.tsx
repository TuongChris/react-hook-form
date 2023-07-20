import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/,
      "Invalid email format"
    ) as yup.StringSchema<string>,
  password: yup
    .string()
    .required("Please enter password")
    .min(7, "Password is too short")
    .matches(
      /^[^\u00C0-\u017F]+$/,
      "Invalid password format"
    ) as yup.StringSchema<string>,
});
