import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EventCard = ({ name, img }) => {
  return (
    <StyledCard>
      <Hide>
        <img src={img} alt={name} />
      </Hide>
      <h2>{name}</h2>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 2rem;
  transition: all ease 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 10px 10px 10px #0065f3;
    img {
      transform: scale(1.7);
    }
  }
  img,
  h2 {
    width: 100%;
    transition: all ease 1s;
  }

  h2 {
    text-shadow: 1px 1px 4px black;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    @supports (backdrop-filter: blur(10px)) or
      (--webkit-backdrop-filter: blur(10px)) {
      & {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
      }
    }
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

export default EventCard;
