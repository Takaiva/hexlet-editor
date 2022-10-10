import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { actions } from '../slices';

import axios from 'axios';
import routes from '../routes.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const [snippets, setSnippets] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [userdata, setUserdata] = useState([]);

  const openTerminal = (code) => () => {
    dispatch(actions.updateCode(code)); // далее роутинг на App
    navigate(routes.homePagePath());
  };

  useEffect(() => {
    const fetchUserSnippets = async() => {
      const response = await axios.get(routes.userProfilePath());
      setSnippets(response.data);
      // setUserdata(response.data.user); set user data
    }
    fetchUserSnippets();
  }, []);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={12} md={3} my={4}>
          <div>
            <img
              className="rounded-circle"
              src="#" /* Добавить ссылку */
              alt="User avatar" /* добавить дефолтную картинку пользователя */
            />
          </div>
          <h2 className="my-2">
            Username {/* user.username */}
            CreatedAt {/* user.created_at */}
          </h2>
          <h3 className="my-2">
            UserId {/* user.userId */}
          </h3>
          <h3 className="my-2">
            UserEmail {/* user.email */}
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
            <Row xs={1} md={2} className="g-4">
            {snippets.map(({ id, name, code }) => (
              <Col xs lg="3" key={id}>
                <Card border="primary">
                  <Card.Header>{name}</Card.Header>
                  <Card.Body>
                    <Card.Text>Изображения нет</Card.Text>
                    <Button variant="primary" onClick={openTerminal(code)}>
                      Open repl
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
