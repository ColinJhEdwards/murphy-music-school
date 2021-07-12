import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    <section className="course">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <img src={imgLand} alt={title} />
        <h2>History of {title}</h2>
        <p>{history}</p>
      </div>
      <div>
        <img src={img2} alt={title} />
        <h2>Why {title}?</h2>
        <p>{header}</p>
        <p>{why}</p>
      </div>
      <div>
        <img src={img3} alt={title} />
        <h2>How long will it take to learn {title}?</h2>
        <p>{howLong}</p>
      </div>
    </section>
  );
};

export default CourseDetail;
