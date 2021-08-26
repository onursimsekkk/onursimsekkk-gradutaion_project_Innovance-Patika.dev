import React from "react";
import './style.css';
//Import React-bootstrap components
import { Container, Row, Col, Form } from "react-bootstrap";
import Title from "../../../Complaints/components/Title";

function LoginAdmin() {


  return (
    <div className="bg-info" style={{height: "60vh", display: "flex", alignItems: "center" }}>
      <Container style={{display: "flex", justifyContent:"center"}}>
        <Row style={{width: "50%"}} className="login-box">
          <Col className="bg-light" style={{height: "50vh"}}>
            <Title type="h1" text="Admin Login" className="darkblue text-center" />
            <hr />
            <Form style={{width: "60%", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  label="Username"
                  name="username"
                  id="username"
                  placeholder="Write your username..."
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                />
              </Form.Group>
              <button type="submit" style={{height: "45px"}} className="submit-btn">Login</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginAdmin;
