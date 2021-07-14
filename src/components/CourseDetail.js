import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, fade } from "../animations";

const CourseDetail = ({
  id,
  title,
  header,
  history,
  why,
  howLong,
  imgLand,
  img2,
  img3,
}) => {
  return (
    <StyledCourse
      className="courseSection"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="course">
        <div>
          <h1>{title}</h1>
        </div>
        <Line></Line>
        <div className="details">
          <img src={imgLand} alt={title} />
          <h2>History of {title}</h2>
          <p>{history}</p>
        </div>
        <motion.div className="details">
          <img src={img2} alt={title} />
          <h2>Why {title}?</h2>
          <p>{header}</p>
          <p>{why}</p>
        </motion.div>
        <motion.div className="details">
          <img src={img3} alt={title} />
          <h2>How long will it take to learn?</h2>
          <p>{howLong}</p>
        </motion.div>
      </div>
    </StyledCourse>
  );
};

const StyledCourse = styled(motion.section)`
  width: 80%;
  margin: auto;
  .course {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin: 3rem 0rem;
    }
    .details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 4rem 0rem;
      h2 {
        align-self: flex-start;
        margin: 2rem 0rem;
      }
    }
    img {
      border-radius: 15px;
    }
  }
`;

const Line = styled(motion.div)`
  height: 3px;
  width: 100%;
  background: green;
  border-radius: 50px;
`;

export default CourseDetail;
