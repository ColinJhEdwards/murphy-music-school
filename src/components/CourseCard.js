import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fade } from "../animations";
import { scrollReveal } from "../animations";
import { useScroll } from "./useScroll";

const CourseCard = ({ img, title, description, id }) => {
  const [element, controls] = useScroll();
  return (
    <Hide
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledCard variants={fade}>
        <h2>{title}</h2>

        <img src={img} alt={title} />

        <p>{description}</p>
        <Link to={`/courses/${id}`}>
          <button>Learn More</button>
        </Link>
      </StyledCard>
    </Hide>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* min-height: 750px; */
  text-align: center;
  transition: all ease 0.5s;
  position: relative;
  color: white;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    img {
      transform: scale(1.5);
    }
  }

  img {
    width: 100%;
    border-radius: 15px;
    transition: all ease 2s;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    filter: blur(4px);
  }
  h2,
  p {
    text-shadow: 2px 2px 4px black;
  }
  h2 {
    font-size: 4rem;
    margin: 2rem 0rem;
  }
  p {
    width: 70%;
    font-size: 2rem;
    margin: 2rem 0rem;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    background: #0065f3;
    padding: 1rem 2rem;
    margin: 2rem 0rem;
    color: white;
    transition: all ease 0.5s;
    &:hover {
      background: #0400d4;
    }
  }
  @media (max-width: 1300px) {
    p {
      width: 90%;
    }
  }
  @media (max-width: 1200px) {
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 850px) {
    &:hover {
      img {
        transform: scale(1);
      }
    }
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 2rem;
    }
    img {
      position: absolute;

      width: 100%;
    }
  }
  @media (max-width: 414px) {
    box-shadow: none;
    h2,
    p {
      margin: 1rem 0rem;
    }
    p {
      font-size: 0.7rem;
    }
    button {
      margin: 0rem 0rem 1rem 0rem;
      font-size: 0.7rem;
      padding: 1rem 2rem;
    }
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 70%;
  margin: 2rem 0rem;
  @media (max-width: 850px) {
    width: 90%;
    box-shadow: none;
  }
`;

export default CourseCard;
