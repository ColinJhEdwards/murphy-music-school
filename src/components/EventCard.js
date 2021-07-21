import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EventCard = ({ name, img }) => {
  return (
    <StyledCard>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
  h2 {
  }
`;

export default EventCard;
