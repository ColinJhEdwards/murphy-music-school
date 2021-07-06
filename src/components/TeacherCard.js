import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TeacherCard = ({ name, image, description, instrument, id }) => {
  return (
    <Card>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Teaches: {instrument}</p>
      </div>
    </Card>
  );
};

const Card = styled(motion.div)`
  display: flex;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 2rem 0rem;
  width: 100%;
  img {
    width: 200px;
    height: 100%;
    border-radius: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h2,
    p {
      align-self: flex-start;
      margin: 1rem 1rem;
    }
  }
`;

export default TeacherCard;
