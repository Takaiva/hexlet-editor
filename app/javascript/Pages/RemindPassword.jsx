/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Container, Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import getRoutes from '../routes.js';

export const RemindPassword = () => {
  const inputRef = useRef();
  const { t } = useTranslation();
  const { loginPagePath, signUpPagePath } = getRoutes();

  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const emailValidation = yup.object().shape({
    email: yup.string().email(t('remindPass.emailValidation')),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleBlur, handleChange, handleSubmit, values } = formik;
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xs={12} md={8} xxl={5} className="mt-5">
          <Card className="shadow-sm">
            <Card.Body className="p-lg-4 p-xl-5">
              <h1 className="mb-4 fw-light">{t('remindPass.pageHeader')}</h1>
              <div className="pt-lg-3">
                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="email">{t('remindPass.email')}</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="form-input"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    ref={inputRef}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100"
                  >
                    {t('remindPass.reset')}
                  </Button>
                </Form>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 text-center py-4">
              <div className="py-lg-2">
                <div className="small">
                  <span className="text-muted">{t('remindPass.signUpHeader')}</span>
                  <a className="link-dark" href={signUpPagePath}>{t('remindPass.signUp')}</a>
                </div>
                <div className="small">
                  <span className="text-muted">{t('remindPass.signInHeader')}</span>
                  <a className="link-dark" href={loginPagePath}>{t('remindPass.signIn')}</a>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
