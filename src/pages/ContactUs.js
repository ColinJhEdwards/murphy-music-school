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
      <div className="form">
        <ContactForm />
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-top: 6rem;
      color: white;
      text-shadow: 1px 1px 4px black;
      font-size: 5rem;
    }
  }
  .background {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export default ContactUs;
