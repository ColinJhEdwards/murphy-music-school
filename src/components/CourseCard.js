import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CourseCard = ({ img, title, description, id }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{description}</p>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  img {
    width: 400px;
  }
`;

export default CourseCard;
