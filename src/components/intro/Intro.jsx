import React, { useEffect, useState } from "react";

import "./intro.scss";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
function Intro() {
  const [isLoaded, setIsLoaded] = useState(true);

  const eventHiddenText = (e) => {
    const cursor = document.querySelector(".cursor");
    const templar = document.querySelector(".templar");
    const hiddenOne = document.querySelector(".hiddenOne");
    templar.style.setProperty("--x", e.x + "px");
    templar.style.setProperty("--y", e.y + "px");
    // cursor.style.setProperty("--xx", e.x - 110 + "px");
    // cursor.style.setProperty("--yy", e.y - 170 + "px");
    hiddenOne.style.setProperty("--xxx", e.x + "px");
    hiddenOne.style.setProperty("--yyy", e.y + "px");
  };

  const eventCursorMove = (e) => {
    const cursor = document.querySelector(".cursor");

    cursor.style.setProperty("--xx", e.x - 110 + "px");
    cursor.style.setProperty("--yy", e.y - 180 + "px");

    // cursor.style.transform = `translate(${e.clientX + "px"}, ${e.y + "px"})`;
  };

  const init = () => {
    const e = { x: 1065, y: 250 };

    const cursor = document.querySelector(".cursor");

    const templar = document.querySelector(".templar");
    const hiddenOne = document.querySelector(".hiddenOne");
    const templarH3 = document.querySelector(".templarH3");

    templar.style.setProperty("--x", e.x + "px");
    templar.style.setProperty("--y", e.y + "px");

    hiddenOne.style.setProperty("--xxx", e.x + "px");
    hiddenOne.style.setProperty("--yyy", e.y + "px");

    cursor.style.setProperty("--xx", 1065 - 110 + "px");
    cursor.style.setProperty("--yy", 234 - 170 + "px");

    setIsLoaded(true);
  };

  useEffect(() => {
    init();
    window.addEventListener("mousemove", (e) => eventCursorMove(e));
  }, []);

  return (
    <div
      onMouseEnter={(e) => {
        const cursor = document.querySelector(".cursor");
        const templar = document.querySelector(".templar");
        const hiddenOne = document.querySelector(".hiddenOne");
        const templarH3 = document.querySelector(".templarH3");

        cursor.style.transform = "scale(0.1)";

        templar.style.setProperty("--x", 0 + "px");
        templar.style.setProperty("--y", 0 + "px");
        // cursor.style.setProperty("--xx", 0 + "px");
        // cursor.style.setProperty("--yy", 0 + "px");
        hiddenOne.style.setProperty("--xxx", 0 + "px");
        hiddenOne.style.setProperty("--yyy", 0 + "px");

        templarH3.style.setProperty("--xtemplarH3", 0 + "px");
        templarH3.style.setProperty("--ytemplarH3", 0 + "px");
      }}
      className={
        (isLoaded && "section intro justify-start relative overflow-hidden") ||
        "section intro justify-start relative overflow-hidden hidden"
      }
      id="intro"
    >
      <div className="cursor absolute h-[220px] w-[220px] bg-[#2e845c] rounded-full z-50"></div>

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
      <div className="container flex flex-col lg:flex-row overflow-hidden">
        <div className="left">
          {/* <div className="imgContainer lg:h-[500px] lg:w-[500px] lg:p-[50px]"> */}
          <div className="imgContainer">
            <img
              // className="h-[200px] lg:h-[90%]"
              className="w-[137px] h-[200px] lg:w-72 lg:h-auto"
              src="assets/ana/bilal.png"
              alt="bilal"
            />
          </div>
        </div>
        <div className="right md:items-center md:justify-around">
          <div className="wrapper overflow-hidden relative">
            <h2>
              Hey There<span> 👉</span>
            </h2>
            <div className="relative overflow-hidden w-fit ">
              <h1 className="templar relative px-5 z-10">
                Bilal <span className="ColoredLetter">A</span>
                bo
                <span className="ColoredLetter">uz</span>
                id
              </h1>
              <h1
                onMouseEnter={(e) => {
                  const cursor = document.querySelector(".cursor");

                  cursor.style.display = "block";
                  cursor.style.height = "220px";
                  cursor.style.width = "220px";
                  cursor.style.transform = "scale(1)";
                  cursor.style.transition = "50ms ease-out";

                  window.addEventListener("mousemove", eventHiddenText);
                  // window.addEventListener("mousemove", eventCursorMove);
                }}
                onMouseLeave={(e) => {
                  const cursor = document.querySelector(".cursor");
                  // cursor.style.display = "none";
                  // cursor.style.height = "0px";
                  // cursor.style.width = "0px";
                  cursor.style.transform = "scale(0.1)";
                  cursor.style.transition = "150ms ease-out";

                  window.removeEventListener("mousemove", eventHiddenText);

                  const templar = document.querySelector(".templar");
                  const hiddenOne = document.querySelector(".hiddenOne");
                  const templarH3 = document.querySelector(".templarH3");

                  templar.style.setProperty("--x", 0 + "px");
                  templar.style.setProperty("--y", 0 + "px");
                  // cursor.style.setProperty("--xx", 0 + "px");
                  // cursor.style.setProperty("--yy", 0 + "px");
                  hiddenOne.style.setProperty("--xxx", 0 + "px");
                  hiddenOne.style.setProperty("--yyy", 0 + "px");

                  templarH3.style.setProperty("--xtemplarH3", 0 + "px");
                  templarH3.style.setProperty("--ytemplarH3", 0 + "px");
                }}
                className="absolute hiddenOne top-0 right-0 font-[thuluth] text-[#1a0f34] text-right overflow-hidden px-5 z-50 cursor-none select-none"
              >
                بلال توفيق أبوزيد
              </h1>
            </div>
            <h3 className="templarH3 z-10">
              — Software Engineer
              <span className="templarSpan">
                👨‍💻 🛠 <img src="assets/database.svg" alt="" />
              </span>
            </h3>
          </div>
          <div className="socialLinks flex flex-col items-center">
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
            <button className="btn w-[80%] bg-[#2e845c] text-[#180d30] mb-2.5 hover:bg-[#6a71d8]">
              <img
                className="w-7 text-[#FFF]"
                src="assets/resume-dark.svg"
                alt=""
              />
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
