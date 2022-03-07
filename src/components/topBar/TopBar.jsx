import { Link } from "react-router-dom";
import "./topBar.scss";

export default function TopBar(props) {
  const toHome = () => {
    window.location = "/#intro";
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
            <a className="navItem selectedNavItem" href="#intro">
              Home
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#skills">
              Skills
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#projects">
              Projects
            </a>
          </div>
          <div className="itemContainer">
            <a className="navItem" href="#aboutMe">
              About Me
            </a>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <img src="assets/resume.svg" alt="" />
            <a
              className="navItem"
              href="assets/resume/Bilal-Abouzid-Backend-Engineer-Resume-2022.pdf"
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
