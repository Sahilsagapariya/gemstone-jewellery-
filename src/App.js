import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">WOMEN</Nav.Link>
            <Nav.Link href="#features">MAN</Nav.Link>
            <Nav.Link href="#pricing">COLLECTIONS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default ColorSchemesExample;
