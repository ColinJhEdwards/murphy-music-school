import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageSlides from "../components/ImageSlides";

const Home = () => {
  return (
    <StyledHome className="home">
      <div>
        <ImageSlides />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.section)`
  min-height: 95vh;
`;

export default Home;
