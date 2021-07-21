import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import eventsData from "../data/eventsData";
import { scrollReveal } from "../animations";
import { useScroll } from "./useScroll";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [element, controls] = useScroll();
  return (
    <StyledEvents
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="title">
        <h1>Events</h1>
      </div>
      <div className="cards">
        {events.map((ev) => (
          <EventCard name={ev.name} img={ev.thumb} id={ev.id} />
        ))}
      </div>
    </StyledEvents>
  );
};

const StyledEvents = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title {
    h1 {
      font-size: 5rem;
      text-shadow: 1px 1px 4px black;
    }
  }
  .cards {
    display: flex;
  }
  @media (max-width: 1024px) {
    .cards {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Events;
