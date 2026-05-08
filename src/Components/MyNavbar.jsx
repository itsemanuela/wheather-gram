import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logoImg from "../assets/meteo.png";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar-transparent w-100">
      <Container fluid className="px-5">
        <Navbar.Brand as={Link} to="/" className="insta-logo-elegant">
          <img src={logoImg} alt="logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-white"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Esplora" className="nav-link-custom">
              Mode Vacanza
            </Nav.Link>
            <Nav.Link as={Link} to="/mood" className="nav-link-custom">
              Share your mood!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
