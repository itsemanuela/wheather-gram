import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar-transparent w-100">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home" className="insta-logo-elegant">
          <img src="./src/assets/meteo.png" alt="logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-white"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">
              Mode Vacation
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">
              Share your mood!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
