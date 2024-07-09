import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Header.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Container className="container-fluid">
          <Navbar.Brand to="/">
            {" "}
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "text-white" : "text-black"
              }
              to="/"
            >
              Movies-App
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="En" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">En</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ar</NavDropdown.Item>
              </NavDropdown>
              <Link
                className=" d-flex align-items-center"
                style={{ textDecoration: "none" }}
                to="/watchList"
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/watchList"
                  className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "text-white" : "text-black"
                  }
                >
                  <FontAwesomeIcon className="icn " icon={faHeart} size="xl" />
                  watchlist
                  <span className="position-absolute top-1 start-80 translate-middle badge rounded-pill bg-secondary text-muted ms-3 ">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </NavLink>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
