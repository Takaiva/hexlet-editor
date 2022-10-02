/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const SignUp = () => {
  const inputRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const signUpValidation = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, t('signUp.nameValidation'))
      .trim()
      .typeError()
      .required(),
    email: yup.string().email(t('signUp.emailValidation')),
    password: yup
      .string()
      .trim()
      .min(8)
      .max(30)
      .typeError(t('signUp.passwordLenght'))
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
  const { handleBlur, handleChange, handleSubmit, values } = formik;
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xs={12} md={8} xxl={6}>
          <div className="pb-lg-5">
            <Card className="shadow-sm">
              <Card.Body className="p-lg-4 p-xl-5">
                <h1 className="mb-4 fw-light">{t('signUp.pageHeader')}</h1>
                <div className="pt-lg-3">
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-2 email required">
                      <FormLabel htmlFor="email">
                        {t('signUp.email')} <span>*</span>
                      </FormLabel>
                      <FormControl
                        ref={inputRef}
                        type="text"
                        autoFocus="autofocus"
                        name="email"
                        id="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <div className="mb-2">
                      <FormLabel htmlFor="name">
                        {t('signUp.username')}
                      </FormLabel>
                      <FormControl
                        type="text"
                        autoFocus="autofocus"
                        name="name"
                        id="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                      />
                    </div>
                    <div className="mb-2">
                      <FormLabel htmlFor="password">
                        {t('signUp.userPassword')}
                      </FormLabel>
                      <FormControl
                        type="password"
                        autoFocus="autofocus"
                        name="password"
                        id="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                    <div className="mb-2">
                      <FormLabel htmlFor="confirmPassword">
                        {t('signUp.confirmUserPassword')}
                      </FormLabel>
                      <FormControl
                        type="password"
                        autoFocus="autofocus"
                        name="confirmPassword"
                        id="confirmPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-100 mt-4"
                    >
                      {t('signUp.register')}
                    </Button>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
