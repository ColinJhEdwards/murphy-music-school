import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMapMarkerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { pageAnimation, fade, ySlide, noDelayFade } from "../animations";
import ScrollTop from "./ScrollTop";

const EventDetails = ({
  d,
  name,
  desc1,
  desc2,
  image,
  date,
  location,
  cost,
}) => {
  return (
    <StyledEvent
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="stuff">
        <div className="title">
          <motion.h1 variants={fade}>{name}</motion.h1>
        </div>
        <div className="content">
          <div className="text">
            <motion.h3 variants={fade}>{desc1}</motion.h3>
            <motion.h3 variants={fade}>{desc2}</motion.h3>
            <Hide>
              <motion.p variants={ySlide}>
                <FontAwesomeIcon className="icon" icon={faCalendar} /> {date}
              </motion.p>
            </Hide>
            <Hide>
              <motion.p variants={ySlide}>
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />{" "}
                {location}
              </motion.p>
            </Hide>
            <Hide>
              <motion.p variants={ySlide}>
                <FontAwesomeIcon className="icon" icon={faDollarSign} /> {cost}
              </motion.p>
            </Hide>
          </div>
          <div className="image">
            <motion.img variants={noDelayFade} src={image} alt={name} />
          </div>
        </div>
      </div>
      <ScrollTop />
    </StyledEvent>
  );
};

const StyledEvent = styled(motion.div)`
  min-height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .stuff {
    margin-top: 6rem;
  }
  .title {
    h1 {
      font-size: 5rem;
      color: #f55673;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: space-around;
    flex-wrap: wrap;
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      width: 1000px;
      .icon {
        font-size: 3rem;
        margin: 0rem 1rem 0rem 0rem;
        color: #0065f3;
      }
    }
    .image {
      width: 450px;
      img {
        width: 100%;
        border-radius: 15px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media (max-width: 1814px) {
    .title {
      h1 {
        font-size: 3rem;
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
      }
    }
    .content {
      .text {
        width: 100%;
        margin: auto;
        text-align: center;
        h3 {
          margin: 2rem 0rem;
          font-size: 1rem;
        }
      }
      .image {
        width: 100%;
        margin: 2rem 0rem;
      }
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default EventDetails;
