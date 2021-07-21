import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EventCard = ({ name, img }) => {
  return (
    <Hide>
      <StyledCard>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </StyledCard>
    </Hide>
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
    box-shadow: 0px 0px 20px #0065f3;
  }
  img {
    width: 100%;
  }

  h2 {
    text-shadow: 1px 1px 4px black;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
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
