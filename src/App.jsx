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
          <footer className="footer flex flex-row items-center justify-center bg-[#0d071975] text-base-content text-gray-500 rounded pt-5 pb-5">
            <aside>
              <p className="inline text-s_green ml-2 text-base">
                Copyright © 2023 By
                <a
                  href="https://www.linkedin.com/in/bilal-abouzid"
                  target="_blank"
                >
                  {" "}
                  @bilal-auz
                </a>
              </p>
            </aside>

            <nav className="flex flex-row">
              <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/bilal-auz" target="_blank">
                  <img src="assets/icons/github-icon.svg" alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bilal-abouzid"
                  target="_blank"
                >
                  <img
                    className="rounded-sm"
                    src="assets/icons/linkedin-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
}

export default App;
