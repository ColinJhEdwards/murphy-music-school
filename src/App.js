import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import OurTeachers from "./pages/OurTeachers";
import ContactUs from "./pages/ContactUs";
import GlobalStyle from "./components/GlobalStyle";
import NavStuff from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavStuff />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/courses/:id">
          <Home />
        </Route>
        <Route path="/ourteachers">
          <OurTeachers />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
