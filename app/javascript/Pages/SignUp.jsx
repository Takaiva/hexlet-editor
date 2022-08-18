import React from 'react';
import * as yup from 'react-yup';
import { useFormik } from 'formik';

export function SignUp() {
  const signUpValidation = yup.object().shape({
    name: yup.string().mix().max().trim().typeError().required(),
    email: yup.string().email(),
    password: yup.string().trim().min().typeError().required(),
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
