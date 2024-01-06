import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Context from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const cartNumber = useContext(Context);

  const inlineStyles = {
    color: "white",
  };

  const Logout = () => {
    console.log("test");
    // cartNumber.makeLogout();
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Your Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Button onClick={Logout} className="bg-blue-300">
              Logout
            </Button>
            <Nav.Link href="/home" style={inlineStyles}>
              Home
            </Nav.Link>
            <Nav.Link href="/store" style={inlineStyles}>
              Store
            </Nav.Link>
            <Nav.Link href="/about" style={inlineStyles}>
              About
            </Nav.Link>

            <Nav.Link href="/contactUs" style={inlineStyles}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Link to="/cart"> Cart {cartNumber.cartNumber}</Link>
            <br />
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
