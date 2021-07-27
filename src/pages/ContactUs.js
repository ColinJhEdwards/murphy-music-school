import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import contactImg from "../images/display/contact.jpg";
import ContactForm from "../components/Form";
import { fade, pageAnimation } from "../animations";

const ContactUs = () => {
  return (
    <StyledContact
      className="contactUs"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.img
        variants={fade}
        className="background"
        src={contactImg}
        alt="contact-backgroundimg"
      />
      <div className="title">
        <motion.h2 variants={fade}>We'd Love To Hear From You</motion.h2>
      </div>
      <div className="text">
        <h2>Your first lesson is free!</h2>
      </div>
      <div className="contactInfo">
        <div className="info">
          <h1>Contact Info</h1>
          <h2>Address</h2>
          <h2>Phone: 360-555-0995</h2>
          <h2>Email: contact@mms.org</h2>
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
    .info {
      h1 {
        margin: 1rem 0rem;
        font-size: 5rem;
      }
      h2 {
        margin: 1rem 0rem;
      }
    }
  }
`;

const Line = styled(motion.div)`
  background: #f55673;
`;

export default ContactUs;
