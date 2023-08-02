import { Link } from "react-router-dom";
import "./topBar.scss";
import { useEffect, useState } from "react";

export default function TopBar(props) {
  const [active, setActive] = useState("1");

  const toHome = () => {
    window.location = "/#intro";
  };

  const handleClick = (event) => {
    setActive(event.target.id);
  };

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
              id="1"
              className={"navItem" + (active === "1" ? " selectedNavItem" : "")}
              href="#intro"
              onClick={handleClick}
            >
              Home
            </a>
          </div>
          <div className="itemContainer">
            <a
              id="2"
              className={"navItem" + (active === "2" ? " selectedNavItem" : "")}
              href="#skills"
              onClick={handleClick}
            >
              Skills
            </a>
          </div>
          <div className="itemContainer">
            <a
              id="3"
              className={"navItem" + (active === "3" ? " selectedNavItem" : "")}
              href="#projects"
              onClick={handleClick}
            >
              Projects
            </a>
          </div>
          <div className="itemContainer">
            <a
              id="4"
              className={"navItem" + (active === "4" ? " selectedNavItem" : "")}
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
