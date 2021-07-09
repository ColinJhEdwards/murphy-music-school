import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CourseData } from "../data/courseData";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState(CourseData);
  return (
    <StyledCourses className="courses">
      <div>
        <h2>Courses</h2>
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
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Courses;
