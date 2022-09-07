import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export function Profile() {
  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={12} md={3} my={4}>
          <div>
            <img
              className="rounded-circle"
              src="#" /* Добавить ссылку */
              alt="User avatar"
            />
          </div>
          <h2 className="my-2">
            Username {/* Добавить определение текущего пользователя */}
          </h2>
          <h3 className="my-2">
            UserId {/* Добавить определение текущего пользователя */}
          </h3>
          <div>
            <Button>Edit {/* Добавить возможность редактирования */}</Button>
            <Button>
              Copy profile link {/* Добавить копирование ссылки профиля */}
            </Button>
          </div>
        </Col>
        <Col xs={12} md={9} my={4} className="p-0 h-100">
          <div className="d-flex flex-column h-100">
            <h2>Repls</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
