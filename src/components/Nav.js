import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavStuff = () => {
  return (
    <StyledNav>
      <Navbar bg="none" expand="sm" className="noov">
        <Navbar.Brand className="text logo">Murphy's Music School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/" className="text link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses" className="text link">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/ourteachers" className="text link">
                Our Teachers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactus" className="text link">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  .noov {
    width: 95%;
    margin: auto;
  }
  .logo {
    font-size: 2rem;
  }
  .link {
    font-size: 1.5rem;
  }
  .text {
    color: white;
    transition: all ease 0.5s;
    text-shadow: 1px 1px 4px black;
    &:hover {
      color: #5697f1;
    }
  }
  @media (max-width: 500px) {
    .logo {
      font-size: 1.2rem;
    }
    .link {
      background: #f55673;
      padding: 0.5rem;
      border-radius: 15px;
    }
  }
`;

export default NavStuff;
