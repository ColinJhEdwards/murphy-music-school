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
import { scrollReveal, width } from "../animations";
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
      <div className="wall"></div>
      <div className="text">
        <h1>Our Mission</h1>
        <Line variants={width}></Line>
        <p>
          To bring our community together through the joys of music and provide
          a quality music education.
        </p>
      </div>
      <div className="image">
        <div className="image">
          <img src={about} alt="aboutpageimage" />
        </div>
      </div>
      <div className="text">
        <p>
          All of our lessons for kids, teens, and adults are designed to help
          students gain amazing musical proficiency, using a performance-based
          music education approach.
        </p>
        <p>
          This means the curriculum focuses on learning music concepts and
          applying them in a live performance setting that we always encourage
          the community to attend. Students lessons include one weekly private
          music lesson and a weekly group rehearsel.
        </p>
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
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  position: relative;
  .wall {
    background: #3e3e3f;
    opacity: 0.5;
    position: absolute;

    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 5px;
  }
  .text {
    width: 50%;

    h1 {
      font-size: 6rem;
      text-shadow: 3px 3px 10px black;
      color: #f55673;
      text-align: center;
    }
    p {
      margin: 2rem 0rem;
      font-size: 1.3rem;
      text-shadow: 3px 3px 10px black;
      text-align: center;
    }
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
      border-radius: 15px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-wrap: wrap;
    .hold {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      p {
        font-size: 2rem;
        text-shadow: 1px 1px 4px black;
        margin: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon {
        font-size: 5rem;
        color: #0065f3;
        filter: drop-shadow(10px 10px 2px rgba(0, 0, 0, 0.5));
      }
    }
  }
  @media (max-width: 414px) {
    .text {
      width: 90%;
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .image {
      img {
        width: 90%;
      }
    }
    .icons {
      .hold {
        p {
          font-size: 1rem;
          margin: 1rem;
        }
        .icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 3px;
  width: 100%;
  background: #0065f3;
  border-radius: 50px;
`;

export default AboutUs;
