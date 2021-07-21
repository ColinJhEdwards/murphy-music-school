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
  .cards {
    display: flex;
  }
`;

export default Events;
