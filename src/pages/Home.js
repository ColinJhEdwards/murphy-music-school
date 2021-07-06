import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <StyledHome className="home">
      <div>
        <h2>Home</h2>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.section)`
  min-height: 95vh;
`;

export default Home;
