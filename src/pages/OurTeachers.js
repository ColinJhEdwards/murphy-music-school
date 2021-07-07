import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Teachers } from "../data/teacherData";
import TeacherCard from "../components/TeacherCard";

const OurTeachers = () => {
  const [teachers, setTeachers] = useState(Teachers);
  return (
    <TeacherSection className="ourTeachers">
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
  width: 80%;
  margin: auto;
  .teachList {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
export default OurTeachers;
