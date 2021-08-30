import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export const Login = ({ login }) => {
  const [adminInfo, setAdminInfo] = useState({ username: "", password: "" });

  const onChangeInput = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value })
  };

  return (
    <div
      className="bg-info"
      style={{ height: "60vh", display: "flex", alignItems: "center" }}
    >
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row style={{ width: "50%" }} className="login-box">
          <Col className="bg-light" style={{ height: "50vh" }}>
            <h1>Admin Login</h1>
            <hr />
            <Form
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  label="Username"
                  name="username"
                  id="username"
                  placeholder="Write your username..."
                  onChange={onChangeInput}
                  value={adminInfo.username}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                  onChange={onChangeInput}
                  value={adminInfo.password}
                />
              </Form.Group>
              <button
                type="submit"
                style={{ height: "45px" }}
                className="btn btn-primary submit-btn"
                onClick={(e) => login(e, adminInfo)}
              >
                Login
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};