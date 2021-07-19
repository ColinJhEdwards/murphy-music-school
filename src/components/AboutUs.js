import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faClock,
  faGraduationCap,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import about from "../images/display/about.jpg";
//scroll animation
import { scrollReveal } from "../animations";
import { useScroll } from "./useScroll";

const AboutUs = () => {
  const [element, controls] = useScroll();
  return (
    <StyledUs
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="text">
        <h1>Murphy's Music School</h1>
        <h3>
          Every day, we watch our students grow from beginner musicians to
          confident and inspiring rock stars in their community. Murphy's Music
          School strives to be more than just your local music school.
        </h3>
        <h3>
          All of our lessons for kids, teens, and adults are designed to help
          students gain amazing musical proficiency, using a performance-based
          music education approach.
        </h3>
        <h3>
          This means the curriculum focuses on learning music concepts and
          applying them in a live performance setting. Students lessons include
          one weekly private music lesson and a weekly group rehearsel.
        </h3>
      </div>
      <div className="image">
        <div className="image">
          <img src={about} alt="aboutpageimage" />
        </div>
      </div>
      <div className="icons">
        <div className="hold">
          <p>
            <FontAwesomeIcon className="icon" icon={faDollarSign} /> Affordable
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faClock} /> Efficient
          </p>
        </div>
        <div className="hold">
          <p>
            <FontAwesomeIcon className="icon" icon={faGraduationCap} />{" "}
            Experienced
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faMusic} /> Passionate
          </p>
        </div>
      </div>
    </StyledUs>
  );
};

const StyledUs = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  .text {
    width: 50%;
    h1 {
      font-size: 6rem;
    }
    h3 {
      margin: 2rem 0rem;
    }
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  .icons {
    display: flex;
    margin: auto;
    .hold {
      display: flex;
      align-items: center;
      justify-content: space-around;
      p {
        font-size: 2rem;
        margin: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon {
        font-size: 5rem;
        color: #0065f3;
      }
    }
  }
`;

export default AboutUs;
