import { Container, Row, Col, Form } from "react-bootstrap";

export const Login = ({ login }) => {
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
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                />
              </Form.Group>
              <button
                type="submit"
                style={{ height: "45px" }}
                className="submit-btn"
                onClick={login}
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