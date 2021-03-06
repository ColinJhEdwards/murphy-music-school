import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Teachers } from "../data/teacherData";
import TeacherCard from "../components/TeacherCard";
import { pageAnimation } from "../animations";

const OurTeachers = () => {
  const [teachers, setTeachers] = useState(Teachers);
  return (
    <TeacherSection
      className="ourTeachers"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <h1>Our Teachers</h1>
      </div>
      <div className="teachList">
        {teachers.map((teach) => (
          <TeacherCard
            name={teach.name}
            description1={teach.description1}
            description2={teach.description2}
            image={teach.image}
            instrument={teach.instrument}
            id={teach.id}
            key={teach.id}
            hobbies={teach.hobbies}
          />
        ))}
      </div>
    </TeacherSection>
  );
};

const TeacherSection = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
  h1 {
    margin-top: 6rem;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 1px 1px 4px black;
    font-size: 5rem;
    text-align: center;
  }
  .teachList {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2rem 0rem;
  }
`;
export default OurTeachers;
