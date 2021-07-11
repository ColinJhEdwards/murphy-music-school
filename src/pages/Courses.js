import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CourseData } from "../data/courseData";
import CourseCard from "../components/CourseCard";
import { pageAnimation } from "../animations";

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
    margin-top: 2rem;
  }
  .courseList {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default Courses;
