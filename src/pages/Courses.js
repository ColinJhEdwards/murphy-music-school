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
    margin-top: 6rem;
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
`;

export default Courses;
