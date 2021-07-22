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
      <Carousel fade interval="5000" pause="false">
        <Carousel.Item>
          <img className="img d-block w-100" src={play} alt="First slide" />
          <Carousel.Caption>
            <h3>We Make Your Dreams A Reality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={teach} alt="Second slide" />
          <Carousel.Caption>
            <h3>We Make Your Dreams A Reality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={drum} alt="Third slide" />
          <Carousel.Caption>
            <h3>We Make Your Dreams A Reality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={piano} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>We Make Your Dreams A Reality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img d-block w-100" src={sing} alt="fifth slide" />
          <Carousel.Caption>
            <h3>We Make Your Dreams A Reality</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </StyledCar>
  );
};

const StyledCar = styled(motion.div)`
  margin: auto;
  h3,
  p {
    padding: 5rem 0rem;
    width: 40%;
    border: solid 3px white;
    margin: auto;
    text-shadow: 2px 2px black;
    background: rgba(0, 0, 0, 0.5);
    @supports (backdrop-filter: blur(10px)) or
      (--webkit-backdrop-filter: blur(10px)) {
      & {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
      }
    }
  }
  .img {
    height: 90vh;
    object-fit: cover;
  }
`;

export default ImageSlides;
