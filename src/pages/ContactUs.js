import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import contactImg from "../images/display/contact.jpg";
import ContactForm from "../components/Form";

const ContactUs = () => {
  return (
    <StyledContact className="contactUs">
      <img className="background" src={contactImg} alt="" />
      <div className="title">
        <h2>We'd Love To Hear From You</h2>
      </div>
      <div className="text">
        <h2>Your first lesson is free!</h2>
      </div>
      <div className="contactInfo">
        <div className="info">
          <h1>Contact Info</h1>
          <h2>Address</h2>
          <h2>Phone</h2>
          <h2>Email</h2>
          <h1>FAQ's</h1>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 500px;
    object-fit: cover;
    z-index: -1;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    h2 {
      color: white;
      text-shadow: 1px 1px 4px black;
      font-size: 5rem;
    }
  }
  .text {
    margin: 2rem 0rem;
  }
  .contactInfo {
    display: flex;
    width: 90%;
    margin: auto;
    .info,
    .form {
      width: 50%;
    }
  }
`;

export default ContactUs;
