import React from 'react';
import * as yup from 'react-yup';
import { useFormik } from 'formik';

export function SignUp() {
  const signUpValidation = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .trim()
      .typeError()
      .required(),
    email: yup.string().email('Incorrect email'),
    password: yup
      .string()
      .trim()
      .min(8)
      .max(30)
      .typeError('The password must be 8 to 30 characters long')
      .required(),
    confirmPassword: yup
      .string()
      .test(
        'confirmPassword',
        (password, context) => password === context.parent.password,
      ),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return <div>SignUp</div>;
}
