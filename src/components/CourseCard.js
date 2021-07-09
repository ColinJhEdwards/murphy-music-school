import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CourseCard = ({ img, title, description, id }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;
