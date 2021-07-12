import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import OurTeachers from "./pages/OurTeachers";
import ContactUs from "./pages/ContactUs";
import GlobalStyle from "./components/GlobalStyle";
import NavStuff from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import CourseDetail from "./components/CourseDetail";
import { CourseData } from "./data/courseData";

function App() {
  const [courses, setCourses] = useState(CourseData);
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <NavStuff />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
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
    </div>
  );
}

export default App;
