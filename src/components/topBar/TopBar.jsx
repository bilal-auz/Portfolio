import { Link } from "react-router-dom";
import "./topBar.scss";
import { useEffect, useState } from "react";

export default function TopBar(props) {
  const [active, setActive] = useState("a_intro");

  const toHome = () => {
    window.location = "/#intro";
  };

  const handleClick = (event) => {
    // setActive(event.target.id);
    props.setActiveSection(event.target.id);
  };

  useEffect(() => {
    console.log("HELLI:" + props.activeSection);
  }, []);

  return (
    <div className="topBar">
      {console.log(props.location.hash)}
      <div className="wrapper">
        <div className="left">
          <img src="assets/auz.svg" alt="" onClick={() => toHome()} />
        </div>
        <div className="middle">
          <div className="itemContainer">
            <a
              id="a_intro"
              className={
                "navItem" +
                (props.activeSection === "a_intro" ? " selectedNavItem" : "")
              }
              href="#intro"
              onClick={handleClick}
            >
              Home
            </a>
          </div>
          <div className="itemContainer">
            <a
              id="a_skills"
              className={
                "navItem" +
                (props.activeSection === "a_skills" ? " selectedNavItem" : "")
              }
              href="#skills"
              onClick={handleClick}
            >
              Skills
            </a>
          </div>
          <div className="itemContainer">
            <a
              id="a_projects"
              className={
                "navItem" +
                (props.activeSection === "a_projects" ? " selectedNavItem" : "")
              }
              href="#projects"
              onClick={handleClick}
            >
              Projects
            </a>
          </div>
          <div className="itemContainer">
            <a
              id="a_aboutMe"
              className={
                "navItem" +
                (props.activeSection === "a_aboutMe" ? " selectedNavItem" : "")
              }
              href="#aboutMe"
              onClick={handleClick}
            >
              About Me
            </a>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <img src="assets/resume.svg" alt="" />
            <a
              className="navItem"
              href="assets/resume/Bilal-Abouzid-Backend-Engineer-Resume-2023.pdf"
              target="_blank"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
