import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CourseData } from "../data/courseData";
import CourseCard from "../components/CourseCard";
import { pageAnimation } from "../animations";
import note1 from "../images/display/note1.png";
import note2 from "../images/display/note2.png";

const Courses = () => {
  const [courses, setCourses] = useState(CourseData);
  return (
    <StyledCourses
      className="courses"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <h1>Courses</h1>
      </div>
      <div className="courseList">
        {courses.map((c) => (
          <CourseCard
            id={c.id}
            key={c.id}
            title={c.type}
            img={c.thumbnail}
            description={c.header}
          />
        ))}
      </div>
      <div className="note1">
        <img src={note1} alt="note1Image" />
      </div>
      <div className="note2">
        <img src={note2} alt="note2Image" />
      </div>
      <div className="note3">
        <img src={note1} alt="note2Image" />
      </div>
      <div className="note4">
        <img src={note2} alt="note2Image" />
      </div>
    </StyledCourses>
  );
};

const StyledCourses = styled(motion.section)`
  min-height: 95vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-top: 10rem;
    color: white;
    text-shadow: 1px 1px 4px black;
    font-size: 5rem;
  }
  .courseList {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .note1,
  .note2,
  .note3,
  .note4 {
    img {
      margin: 0rem 1rem;
      position: absolute;
      z-index: -1;
    }
  }
  .note1 {
    img {
      right: 0;
      top: 50%;
      width: 10%;
    }
  }
  .note2 {
    img {
      width: 10%;
      left: 0;
      top: 200%;
    }
  }
  .note3 {
    img {
      width: 10%;
      left: 0;
      top: 350%;
    }
  }
  .note4 {
    img {
      width: 10%;
      right: 0;
      top: 500%;
    }
  }
`;

export default Courses;
