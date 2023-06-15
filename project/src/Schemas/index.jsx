import * as Yup from 'yup'



export const signUpSchema = Yup.object({
    firstname: Yup.string()
      .min(3)
      .max(20)
      .required("Please enter your firstname")
      .matches(/^[A-Z][a-z]*$/, "Firstname should start with a capital letter"),
    lastname: Yup.string()
      .min(1)
      .max(10)
      .required('Please enter your lastname'),
    email: Yup.string()
      .email()
      .required("Please enter your email"),
      mobile: Yup.string()
      .required("Please enter your number")
      .min(10, "Mobile number should have exactly 10 digits")
      .max(10, "Mobile number should have exactly 10 digits"),
    password: Yup.string()
      .min(6)
    //   .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "Password must contain at least one letter and one number")
      .required("Please enter your password"),
    confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], "Password must match")
  });
  