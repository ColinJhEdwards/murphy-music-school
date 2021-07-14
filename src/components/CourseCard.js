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
    <StyledCard
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>{title}</h2>
      <Hide>
        <img src={img} alt={title} />
      </Hide>
      <p>{description}</p>
      <Link to={`/courses/${id}`}>
        <button>Learn More</button>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 600px;
  margin: 1rem;
  text-align: center;
  transition: all ease 0.5s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    img {
      transform: scale(1.5);
    }
  }
  img {
    width: 400px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all ease 2s;
  }
  p {
    width: 95%;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    background: green;
    padding: 1rem 2rem;
    color: white;
    transition: all ease 0.5s;
    &:hover {
      background: #025702;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export default CourseCard;
