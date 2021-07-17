import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

const NavStuff = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Navbar bg="none" expand="sm" className="noov">
        <Navbar.Brand className="text logo">Murphy's Music School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="relative">
              <Link to="/" className="text link">
                Home
              </Link>
              <Underline
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "100%" : "0%" }}
              ></Underline>
            </Nav.Link>
            <Nav.Link className="relative">
              <Link to="/courses" className="text link">
                Courses
              </Link>
              <Underline
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{
                  width: pathname === "/courses" ? "100%" : "0%",
                }}
              ></Underline>
            </Nav.Link>
            <Nav.Link className="relative">
              <Link to="/ourteachers" className="text link">
                Our Teachers
              </Link>
              <Underline
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/ourteachers" ? "100%" : "0%" }}
              ></Underline>
            </Nav.Link>
            <Nav.Link className="relative">
              <Link to="/contactus" className="text link">
                Contact Us
              </Link>
              <Underline
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contactus" ? "100%" : "0%" }}
              ></Underline>
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
  .relative {
    position: relative;
  }
  .link {
    font-size: 1.5rem;
  }
  .text {
    color: white;
    transition: all ease 0.5s;
    text-shadow: 1px 1px 4px black;
    &:hover {
      color: #0065f3;
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

const Underline = styled(motion.div)`
  width: 0%;
  background: #f55673;
  height: 0.3rem;
  border-radius: 25px;
  position: absolute;
  left: 0;
  @media (max-width: 500px) {
    background: none;
  }
`;

export default NavStuff;
