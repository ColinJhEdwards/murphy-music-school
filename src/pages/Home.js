import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageSlides from "../components/ImageSlides";
import { pageAnimation } from "../animations";
import AboutUs from "../components/AboutUs";
import Events from "../components/Events";

const Home = () => {
  return (
    <StyledHome
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="caro">
        <ImageSlides />
      </div>
      <div className="aboutUs">
        <AboutUs />
      </div>
      <div className="events">
        <Events />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.section)`
  min-height: 95vh;
  margin: auto;
  .caro {
    width: 100%;
  }
`;

export default Home;
