import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <StyledUs>
      <div className="text">
        <h1>Murphy's Music School</h1>
        <h3>
          Every day, we watch our students grow from beginner musicians to
          confident and inspiring rock stars in their community. Murphy's Music
          School strives to be more than just your local music school.
        </h3>
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
    </StyledUs>
  );
};

const StyledUs = styled(motion.div)`
  min-height: 90vh;
`;

export default AboutUs;
