import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Your Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Cart (0 items)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="text-center bg-light py-5">
        <h1 className="header-title">The Generics</h1>
      </div>
    </>
  );
}

export default Header;