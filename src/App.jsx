import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import "./app.scss";
import React, { useEffect, useState } from "react";

import { isMobile } from "react-device-detect";
import NoMobile from "./Errors/NoMobile";

function App(props) {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("div.section");
    let currentSectionId = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSectionId = section.id;
      }
    });

    console.log("a_" + currentSectionId);
    setActiveSection("a_" + currentSectionId);
  };

  const renderContent = () => {
    // if (isMobile) {
    //   return <NoMobile />;
    //   // return <h1>Hello</h1>;
    // }
    return (
      <div className="app">
        <TopBar
          {...props}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="sections" onScroll={handleScroll}>
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
