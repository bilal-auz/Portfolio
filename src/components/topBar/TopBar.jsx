import { Link } from "react-router-dom";
import "./topBar.scss";
import { useEffect, useState } from "react";

export default function TopBar(props) {
  const [active, setActive] = useState("a_intro");
  const [shortNav, setshortNav] = useState(true);

  const toHome = () => {
    window.location = "/#intro";
  };

  const handleClick = (event) => {
    // setActive(event.target.id);
    props.setActiveSection(event.target.id);
  };

  useEffect(() => {
    console.log("HELLI:" + props.activeSection);

    if (
      props.activeSection === "a_projects" ||
      props.activeSection === "a_aboutMe"
    ) {
      // console.log("shorter-nav");
      setshortNav(true);
    } else {
      console.log("long-nav");
      setshortNav(false);
    }
  }, [props.activeSection]);

  return (
    <div className="topBar absolute">
      {console.log(props.location.hash)}
      <nav className="container px-6 py-4 mx-auto">
        <div className="wrapper hidden lg:flex lg:items-center lg:self-center lg:justify-center">
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
                  (props.activeSection === "a_projects"
                    ? " selectedNavItem"
                    : "")
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
                  (props.activeSection === "a_aboutMe"
                    ? " selectedNavItem"
                    : "")
                }
                href="#aboutMe"
                onClick={handleClick}
              >
                About Me
              </a>
            </div>
          </div>
          <div className="right overflow-hidden">
            <div
              className={`itemContainer p-[10px] transition-transform duration-[2000ms] ${
                shortNav && "scale-110 rotate-[360deg]"
              }`}
            >
              <img src="assets/resume.svg" alt="" />
              <a
                className="navItem"
                href="assets/resume/Bilal-Abouzid-Resume-2023.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper flex items-center self-center justify-evenly lg:hidden ">
          <div className="left">
            <img src="assets/auz.svg" alt="" onClick={() => toHome()} />
          </div>
          <div className="right">
            <div className="itemContainer">
              <img src="assets/resume.svg" alt="" />
              <a
                className="navItem"
                href="assets/resume/Bilal-Abouzid-Resume-2023.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          {/* <div className="middle">
            <div className="dropdown overflow-hidden">
              <label className="btn btn-ghost">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </label>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a
                    id="a_intro"
                    className={
                      "navItem" +
                      (props.activeSection === "a_intro"
                        ? " selectedNavItem"
                        : "")
                    }
                    href="#intro"
                    onClick={handleClick}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    id="a_skills"
                    className={
                      "navItem" +
                      (props.activeSection === "a_skills"
                        ? " selectedNavItem"
                        : "")
                    }
                    href="#skills"
                    onClick={handleClick}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    id="a_projects"
                    className={
                      "navItem" +
                      (props.activeSection === "a_projects"
                        ? " selectedNavItem"
                        : "")
                    }
                    href="#projects"
                    onClick={handleClick}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    id="a_aboutMe"
                    className={
                      "navItem" +
                      (props.activeSection === "a_aboutMe"
                        ? " selectedNavItem"
                        : "")
                    }
                    href="#aboutMe"
                    onClick={handleClick}
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
