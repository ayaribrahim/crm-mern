import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./login.css";

export const Login = ({email, password, handleChange, handleSubmit, handleSwitchForm}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary text-uppercase text-center">
            Login Client
          </h1>
          <hr className="mb-5" />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Type your email"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Type your password"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="loginbtn-group text-end">
              <Button className="mb-2 w-50 loginbtn" type="submit">Login</Button>
              <a href="#" onClick={() => handleSwitchForm("reset")}>Forget password?</a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
    email : PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleSwitchForm: PropTypes.func.isRequired 
}