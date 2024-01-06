import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/Headder.css'
import logo from '../Assets/Gemstone logo_pages-to-jpg-0001.jpg'

function Headder() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/home" className='logo'><img src={logo} alt="Logo" height="100%" width="100%" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="dropdown">
              <Nav.Link className="dropbtn">MENS</Nav.Link>
              <div className="dropdown-content">
                <a href="#">Rings</a>
                <a href="#">Bracelets</a>
                <a href="#">Chains</a>
                <a href="#">Leather Bracelets</a>
              </div>
            </div>
            <div className="dropdown">
              <Nav.Link className="dropbtn">WOMENS</Nav.Link>
              <div className="dropdown-content">
                <a href="#">Rings</a>
                <a href="#">Bracelets</a>
                <a href="#">Chains</a>
                <a href="#">Necklace</a>
                <a href="#">Earrings</a>
                <a href="#">Bangles</a>
              </div>
            </div>
            <div className="dropdown">
              <Nav.Link className="dropbtn">BEST SELLERS</Nav.Link>
              <div className="dropdown-content">
                <a href="#">Rings</a>
                <a href="#">Bracelets</a>
                <a href="#">Chains</a>
                <a href="#">Necklace</a>
                <a href="#">Earrings</a>
                <a href="#">Bangles</a>
              </div>
            </div>
            <Nav.Link href="#home" className='dropbtn '>CONTACT US</Nav.Link>
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