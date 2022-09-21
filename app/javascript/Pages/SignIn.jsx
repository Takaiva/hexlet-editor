/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';

export function SignIn() {
  const [authFailed, setAuthFailed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setAuthFailed(false);
      const data = axios
        .post('api/login', values)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          setAuthFailed(true);
          return err;
        });
      return data;
    },
  });

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xs={12} md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-lg-4 p-xl-5">
              <h1 className="mb-4 fw-light">Вход</h1>
              <div className="pt-lg-3">
                <Form onSubmit={formik.handleSubmit} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Электронная почта</Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      className="form-input"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      isInvalid={authFailed}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Пароль</Form.Label>
                    <Form.Control
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      type="password"
                      className="form-input"
                      name="password"
                      id="password"
                      autoComplete="password"
                      required
                      isInvalid={authFailed}
                    />

                    <Form.Control.Feedback type="invalid">
                      Неверный пароль или электронная почта
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="text-end my-3">
                    <a className="text-decoration-none small" href="/">
                      Не помню пароль
                    </a>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 btn-primary"
                    data-disable-with="Войти"
                  >
                    Войти
                  </Button>
                </Form>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 text-center py-4">
              <div className="py-lg-2">
                <span className="text-muted">Нет аккаунта? </span>
                <a className="link-dark" href="/">
                  Создать новый аккаунт
                </a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
