import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import OurTeachers from "./pages/OurTeachers";
import ContactUs from "./pages/ContactUs";
import GlobalStyle from "./components/GlobalStyle";
import NavStuff from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import CourseDetail from "./components/CourseDetail";
import { CourseData } from "./data/courseData";
import eventsData from "./data/eventsData";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";

function App() {
  const [courses, setCourses] = useState(CourseData);
  const [events, setEvents] = useState(eventsData);
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <NavStuff />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/home" exact>
            <Home />
          </Route>
          {events.map((ev) => (
            <Route path={`/events/${ev.id}`}>
              <EventDetails
                id={ev.id}
                key={ev.id}
                name={ev.name}
                desc1={ev.description1}
                desc2={ev.description2}
                image={ev.image}
                date={ev.date}
                location={ev.location}
                cost={ev.cost}
              />
            </Route>
          ))}
          <Route path="/courses" exact>
            <Courses />
          </Route>
          {courses.map((course) => (
            <Route path={`/courses/${course.id}`}>
              <CourseDetail
                id={course.id}
                key={course.id}
                title={course.type}
                imgLand={course.imgLand}
                img2={course.img2}
                img3={course.img3}
                header={course.header}
                history={course.history}
                why={course.why}
                howLong={course.howLong}
              />
            </Route>
          ))}

          <Route path="/ourteachers">
            <OurTeachers />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
