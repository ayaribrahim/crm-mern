import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../Login/Login";

export const ResetPassword = ({email, handleChange, handleResetSubmit, handleSwitchForm}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary text-uppercase text-center">
            Reset Password
          </h1>
          <hr className="mb-5" />
          <Form onSubmit={handleResetSubmit}>
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
            <div className="loginbtn-group text-end">
              <Button className="mb-2 w-50 loginbtn" type="submit">Send Request</Button>
              <a href="#" onClick={() => handleSwitchForm("login")}>Login Now</a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


ResetPassword.propTypes = {
    email : PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleResetSubmit: PropTypes.func.isRequired,
    handleSwitchForm: PropTypes.func.isRequired 
}