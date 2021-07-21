import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import eventsData from "../data/eventsData";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  return (
    <StyledEvents>
      <div className="title">
        <h1>Events</h1>
      </div>
      <div className="cards">
        {events.map((ev) => (
          <EventCard name={ev.name} img={ev.thumb} />
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
