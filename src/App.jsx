import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import "./app.scss";
import React from "react";

function App(props) {
  return (
    <React.Fragment>
      <div className="app">
        <TopBar {...props} />
        <div className="sections">
          <Intro />
          <Skills />
          <Projects />
          <AboutMe />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
