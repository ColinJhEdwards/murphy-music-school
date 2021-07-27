import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <StyledForm>
      <h3>
        Fill out our form to recieve more detailed information on our courses!
      </h3>
      <p>We promise we won't spam your email.</p>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="FullName" placeholder="Full Name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" required />
        <label htmlFor="Phone">Phone</label>
        <input type="text" id="Phone" placeholder="Phone" required />
        <label htmlFor="instrument">Instrument</label>
        <select name="instrument" id="instrument">
          <option value="na">N/A</option>
          <option value="piano">Piano</option>
          <option value="guitar">Guitar</option>
          <option value="bass">Bass</option>
          <option value="drums">Drums</option>
          <option value="brass">Brass</option>
          <option value="voice">Voice</option>
          <option value="choir">Choir</option>
          <option value="band">Band</option>
          <option value="orchestra">Orchestra</option>
        </select>
        <button>Submit</button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled(motion.div)`
  background: #474545;
  border-radius: 5px;
  padding: 2rem;
  h3,
  p {
    text-align: center;
    text-shadow: 2px 2px 4px black;
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      text-shadow: 2px 2px 4px black;
    }
    input,
    select,
    button {
      padding: 1rem;
      border-radius: 5px;
      margin: 1rem 0rem;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      border: none;
    }
    button {
      background: #0065f3;
      font-size: 2rem;
    }
  }
`;

export default ContactForm;
