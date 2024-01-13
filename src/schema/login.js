import * as yup from "yup";
export const registerSchema = yup.object().shape({
  password: yup.string().required("Password is required!").trim(),
  mobile: yup.string().required("Mobile number is required!").trim(),
  email: yup
    .string()
    .required("Email is required!")
    .email("Please enter a valid email")
    .trim(),
});

export const activateSchema = yup.object().shape({
  OTP: yup.number().required("OTP is required!"),
});

export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required!"),
});

export const loginSchema = yup.object().shape({
  password: yup.string().required("Password is required!").trim(),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required!")
    .trim(),
});

export const changePassSchema = yup.object().shape({
  password: yup.string().required("Password is required!"),
  OTP: yup.string().required("OTP is required!"),
});
