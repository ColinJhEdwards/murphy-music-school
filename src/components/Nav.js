import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavStuff = () => {
  return (
    <StyledNav>
      <Navbar bg="none" expand="sm" className="noov">
        <Navbar.Brand href="#home">Murphy's Music School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/ourteachers">Our Teachers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactus">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  .noov {
    width: 95%;
    margin: auto;
  }
`;

export default NavStuff;
