import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import axios from 'axios';
import Moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../routes.js';
import { actions } from '../slices';

export function Profile() {
  const [snippets, setSnippets] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userdata, setUserdata] = useState([]);

  const openTerminal = (code) => () => {
    dispatch(actions.updateCode(code));
    navigate(routes.homePagePath());
  };

  useEffect(() => {
    const fetchUserSnippets = async () => {
      const response = await axios.get(routes.userProfilePath());
      setSnippets(response.data.snippets);
      setUserdata(response.data.currentUser);
    };
    fetchUserSnippets();
  }, []);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={12} md={3} my={4}>
          <div>
            <img
              className="rounded-circle"
              src="#" /* TODO: add link */
              alt="User avatar" /* TODO: add default user pic */
            />
          </div>
          <h2 className="my-2">
            {t('profile.username')} {userdata.name}
          </h2>
          <h3 className="my-2">
            {t('profile.createdAt')}{' '}
            {Moment(userdata.created_at).format('DD-MM-YYYY')}
          </h3>
          <h3 className="my-2">
            {t('profile.userId')} {userdata.id}
          </h3>
          <h3 className="my-2">
            {t('profile.email')} {userdata.email}
          </h3>
          <div>
            <Button>
              {t('profile.editProfileButton')} {/* TODO: add edit tool */}
            </Button>
            <Button>
              {t('profile.copyProfileButton')}{' '}
              {/* TODO: add ability to copy user profile link */}
            </Button>
          </div>
        </Col>
        <Col xs={12} md={9} my={4} className="p-0 h-100">
          <div className="d-flex flex-column h-100">
            <h2>{t('profile.replsHeader')}</h2>
            <Row xs={1} md={2} className="g-4">
              {snippets.map(({ id, name, code }) => (
                <Col xs lg="3" key={id}>
                  <Card border="primary">
                    <Card.Header>{name}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {/* TODO: add a snapshot for snippet */}
                      </Card.Text>
                      <Button variant="primary" onClick={openTerminal(code)}>
                        {t('profile.openReplButton')}
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
