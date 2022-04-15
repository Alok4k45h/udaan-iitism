import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

export default class Navbars extends Component {
  render() {
    const path = window.location.pathname;
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="nav-container fixed-top"
        >
          <Navbar.Brand href="#home" className="margin-padding">
            <img src="./udaanLogo.jpg" alt="" className="udaan-logo mr-2" />
            <span className="font-bold">Udaan</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav d-flex justify-content-center>
                <Nav.Link
                  as={Link}
                  to={"/#"}
                  className={`${path === "/" && "active font-bold"}`}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/about"}
                  className={`${path === "/about" && "active font-bold"}`}
                >
                  About Us
                </Nav.Link>

                <NavDropdown title="Stories" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to={"/intern"}
                    className={`${path === "/intern" && "active font-bold"}`}
                  >
                    Internship
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={"/placement"}
                    className={`${path === "/placement" && "active font-bold"}`}
                  >
                    Placement
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to={"/gallery"}
                  className={`${path === "/gallery" && "active font-bold"}`}
                >
                  Gallery
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/team"}
                  className={`${path === "/team" && "active font-bold"}`}
                >
                  Team Udaan
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/contact"}
                  className={`${path === "/contact" && "active font-bold"}`}
                >
                  Contact Us
                </Nav.Link>
              </Nav>

              <Nav className="ml-auto">
                <Nav.Link
                  as={Link}
                  to={"/extras"}
                  className={`${path === "/extras" && "active font-bold"}`}
                ></Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
