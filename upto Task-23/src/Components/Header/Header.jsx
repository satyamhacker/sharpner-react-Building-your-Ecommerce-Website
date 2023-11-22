import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';

function Header() {

  const cartNumber = useContext(Context);

  const inlineStyles={
    color:'white'
  }


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Your Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/home" style={inlineStyles}>Home</Nav.Link>
            <Nav.Link href="/store" style={inlineStyles}>Store</Nav.Link>
            <Nav.Link href="/about" style={inlineStyles}>About</Nav.Link>
            
            <Nav.Link href="/contactUs" style={inlineStyles}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
          <Link to="/cart"> Cart {cartNumber.cartNumber}</Link><br/>

        

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