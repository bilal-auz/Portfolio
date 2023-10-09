import { useState } from "react";

import "./intro.scss";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
export default function Intro() {
  return (
    <div className="section intro justify-start" id="intro">
      {/* <div className="next">
        <a href="#skills">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            ></path>
          </svg>
        </a>
      </div> */}
      <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
      <div className="container flex flex-col lg:flex-row">
        <div className="left">
          <div className="imgContainer lg:h-[500px] lg:w-[500px] lg:p-[50px]">
            <img
              className="h-[200px] lg:h-[90%]"
              src="assets/ana/bilal.png"
              alt="bilal"
            />
          </div>
        </div>
        <div className="right md:items-center">
          <div className="wrapper">
            <h2>
              Hey There<span> 👉</span>
            </h2>
            <h1 className="">
              Bilal <span className="ColoredLetter">A</span>
              bo
              <span className="ColoredLetter">uz</span>id
            </h1>
            <h3>
              — Juinor Software Engineer
              <span>
                👨‍💻 🛠 <img src="assets/database.svg" alt="" />
              </span>
            </h3>
          </div>
          <div className="socialLinks">
            <div className="menu transparent menu-horizontal">
              <div>
                <a
                  href="https://www.linkedin.com/in/bilal-abouzid/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="linkedin"
                >
                  <LinkedIn />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/bilal-auz/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="github"
                >
                  <GitHub />
                </a>
              </div>
              <div>
                <a href="mailto:imbilalabouzid@gmail.com" className="email">
                  <Email />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
