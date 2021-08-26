import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function AdminNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-primary">Admin-Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Form Page</Nav.Link>
              <Nav.Link href="#link">Change Theme</Nav.Link>
              <Nav.Link href="#link" className="text-danger">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AdminNavbar
