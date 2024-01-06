import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/Headder.css'

function Headder() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div class="dropdown">
              <button class="dropbtn">MENS</button>
              <div class="dropdown-content">
                <a href="#">Rings</a>
                <a href="#">Bracelets</a>
                <a href="#">Chains</a>
                <a href="#">Leather Bracelets</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">WOMENS</button>
              <div class="dropdown-content">
                <a href="#">Rings</a>
                <a href="#">Bracelets</a>
                <a href="#">Chains</a>
                <a href="#">Necklace</a>
                <a href="#">Earrings</a>
                <a href="#">Bangles</a>
                <a href="#"></a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">BEST SELLERS</button>
              <div class="dropdown-content">
                <a href="#">Rings</a>
                <a href="#">Bracelets</a>
                <a href="#">Chains</a>
                <a href="#">Necklace</a>
                <a href="#">Earrings</a>
                <a href="#">Bangles</a>
                <a href="#"></a>
              </div>
            </div>
            <Nav.Link href="#home" className='dropbtn text-light '>CONTACT US</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headder;