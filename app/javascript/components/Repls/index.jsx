/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { db } from './db.js';

export const Repls = () => {
  const openTerminal = () => {
    console.log('Открывает терминал с сохраненным решением');
  };

  return (
    <Container className="m-5">
      <Row xs={1} md={2} className="g-4">
        {db.map(({ id, title, body }) => (
          <Col xs lg="3">
            <Card border="primary" key={id}>
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Text>{body}</Card.Text>
                <Button variant="primary" onClick={openTerminal}>
                  Open repl
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
