import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import Logo2 from "./Logo2";

const NavStuff = ({ homeNav }) => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Navbar bg="none" expand="lg" className="noov navbar-dark">
        <Navbar.Brand className="text logo">
          <Logo2 />
          <span>Murphy's Music School</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="relative">
              <Link to="/" className="text link" ref={homeNav}>
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-family: "Encode Sans SC", sans-serif;
    &:hover {
      color: #0065f3;
    }
  }
  @media (max-width: 995px) {
    .logo {
      font-size: 1.2rem;
    }
    .link {
      background: #f55673;
      box-shadow: 2px 2px 2px black;
      padding: 0.5rem;
      border-radius: 15px;
    }
  }
  @media (max-width: 320px) {
    span {
      font-size: 0.9rem;
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
  @media (max-width: 995px) {
    background: none;
  }
`;

export default NavStuff;
