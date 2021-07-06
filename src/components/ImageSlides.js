import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
//images
import teach from "../images/display/teach.jpg";
import sing from "../images/display/sing.jpg";
import play from "../images/display/play.jpg";
import piano from "../images/display/piano.jpg";
import drum from "../images/display/drum.jpg";

const ImageSlides = () => {
  return (
    <StyledCar>
      <Carousel fade interval="6000">
        <Carousel.Item>
          <img className="img d-block w-100" src={teach} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={sing} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={drum} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={piano} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={play} alt="fifth slide" />
        </Carousel.Item>
      </Carousel>
    </StyledCar>
  );
};

const StyledCar = styled(motion.div)`
  margin: auto;
  .img {
    height: 90vh;
    object-fit: cover;
  }
`;

export default ImageSlides;
