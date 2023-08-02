import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import "./app.scss";
import React from "react";

import { isMobile } from "react-device-detect";
import NoMobile from "./Errors/NoMobile";

function App(props) {
  const renderContent = () => {
    if (isMobile) {
      return <NoMobile />;
      // return <h1>Hello</h1>;
    }
    return (
      <div className="app">
        <TopBar {...props} />
        <div className="sections">
          <Intro />
          <Skills />
          <Projects />
          <AboutMe />
        </div>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
}

export default App;
