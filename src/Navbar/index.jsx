import { Container, Navbar, Nav } from "react-bootstrap";

export const NavBar = ({ logOut, isLogin }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-light" href="/complaint">
            Create Complaint
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="text-light" href="/search-complaint">
                Search Complaint
              </Nav.Link>

              {isLogin && (
                <>
                  <Nav.Link className="text-light" href="/tickets">
                    Tickets
                  </Nav.Link>
                  <Nav.Link
                    onClick={logOut}
                    className="text-danger justify-content-end"
                  >
                    Logout
                  </Nav.Link>
                </>
              )}

              {!isLogin && (
                <Nav.Link className="text-danger ml-5" href="/login">
                  <strong>Admin Login</strong>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};