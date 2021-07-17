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
      <StyledCard>
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
  min-height: 750px;
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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all ease 2s;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  p {
    width: 55%;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    background: #4d6d9a;
    padding: 1rem 2rem;
    color: white;
    transition: all ease 0.5s;
    &:hover {
      background: #86b3d1;
    }
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 70%;
  margin: 2rem 0rem;
`;

export default CourseCard;
