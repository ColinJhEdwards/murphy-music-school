import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import contactImg from "../images/display/contact.jpg";
import ContactForm from "../components/Form";
import { fade, pageAnimation } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
        <motion.h2 variants={fade}>Your first lesson is free!</motion.h2>
      </div>
      <motion.div variants={fade} className="contactInfo">
        <div className="info">
          <h1>Contact Info</h1>
          <Line></Line>
          <h2>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />{" "}
            <span>17700 NE 76th St, Redmond, WA 98052 </span>
          </h2>
          <h2>
            <FontAwesomeIcon icon={faPhone} className="icon" /> 719-266-2837
          </h2>
          <h2>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            contact@mms.org
          </h2>
          <div className="social">
            <div className="media">
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div className="media">
              <a href="https://twitter.com/home" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div className="media">
              <a href="https://www.youtube.com/" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div className="media">
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </motion.div>
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
      text-align: center;
    }
  }
  .text {
    margin: 2rem 0rem;
  }
  .contactInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    .info,
    .form {
      width: 850px;
      margin: 2rem 0rem;
    }
    .info {
      align-self: flex-start;
      h1 {
        margin: 1rem 0rem;
        font-size: 5rem;
        text-shadow: 1px 1px 4px black;
      }
      h2 {
        margin: 4rem 0rem;
      }
      .icon {
        color: #0065f3;
        font-size: 3rem;
        margin: 0rem 1rem;
        filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
      }
      .social {
        display: flex;
        .media {
          font-size: 3rem;
          margin: 0rem 2rem;
          cursor: pointer;
          transition: all ease 0.5s;
          &:hover {
            filter: drop-shadow(10px 10px 2px rgba(0, 0, 0, 0.5));
            a {
              color: #f55673;
            }
          }
        }
      }
    }
  }
  @media (max-width: 414px) {
    .title {
      h2 {
        font-size: 3rem;
        text-align: center;
      }
    }
    .contactInfo {
      .info {
        h1 {
          font-size: 3rem;
          text-align: center;
        }
        h2 {
          font-size: 1rem;
          margin: 4rem 2rem;
        }
        span {
        }
        .social {
          justify-content: center;
          .media {
            margin: 0rem 1rem;
          }
        }
      }
    }
  }
`;

const Line = styled(motion.div)`
  background: #f55673;
  width: 60%;
  height: 3px;
  @media (max-width: 414px) {
    margin: auto;
    width: 80%;
  }
`;

export default ContactUs;
