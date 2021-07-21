import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EventDetails = ({
  d,
  name,
  desc1,
  desc2,
  image,
  date,
  location,
  cost,
}) => {
  return (
    <StyledEvent>
      <div className="stuff">
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="content">
          <div className="text">
            <h3>{desc1}</h3>
            <h3>{desc2}</h3>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>Cost: {cost}</p>
          </div>
          <div className="image">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </StyledEvent>
  );
};

const StyledEvent = styled(motion.div)`
  min-height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .stuff {
    margin-top: 6rem;
  }
  .content {
    display: flex;
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }
    .image {
      img {
        width: 100%;
        border-radius: 15px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export default EventDetails;
