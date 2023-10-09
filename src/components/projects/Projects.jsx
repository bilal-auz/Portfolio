import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import WorksList from "./WorksList";
import projectsData from "./data";
import { GitHub } from "@material-ui/icons";

import "./projects.scss";

export default function Works() {
  const [selected, setSelected] = useState("all");
  const [active, setActive] = useState("0");

  const [currentProjects, setProjects] = useState([]);

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  useEffect(() => {
    if (selected === "all") {
      return setProjects(projectsData);
    }

    const newProjects = projectsData.filter((p) => p.tag === selected);

    setProjects(newProjects);
  }, [selected]);
  return (
    <div className="section projects" id="projects">
      {/* <div className="next">
        <a href="#aboutMe">
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
      {/* <h1>Projects</h1> */}
      <p className="text-2xl text-[#2e835b] mt-[20px] lg:mb-[15px]">
        <code>&lt; Projects /&gt;</code>
      </p>
      {/* <ul className="menu menu-horizontal bg-base-100 rounded-box">
        {list.map((item) => (
          <WorksList
            key={item.id}
            id={item.id}
            title={item.name}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul> */}
      <div className="wrapper px-24">
        <div className="projectsContainer hidden lg:flex lg:flex-col lg:items-center lg:p-8 lg:pt-0">
          <div className="carousel w-full flex overflow-hidden">
            {currentProjects.map((p, index) => (
              <div
                id={"item" + (index + 1)}
                className="carousel-item overflow-hidden max-lg:px-12"
              >
                <div className="myCard card lg:card-side bg-base-100 shadow-xl relative h-[470px] h-min-[500px] w-[1118px] lg:h-[420px]">
                  <div className="myStats stats stats-vertical shadow shadow-inner w-fit self-center absolute top-0 left-0 rounded-none rounded-tl-2xl rounded-br-2xl p-1 bg-gradient-to-r inline-grid lg:hidden">
                    <div className="stat flex flex-col justify-evenly w-min-fit p-2 self-center">
                      {p.skills.map((src) => (
                        <figure className="h-12 w-12">
                          <img className="w-[25px]" src={src} alt="" />
                        </figure>
                      ))}
                    </div>
                  </div>
                  <div className="pr-[10px] pl-[20px] pb-0 pt-[15px] mb-[20px] card-body w-fit justify-end relative lg:w-[52rem]">
                    <div className="myStats stats shadow shadow-inner w-fit self-center absolute top-0 left-0 rounded-none rounded-tl-2xl rounded-br-2xl bg-gradient-to-r hidden lg:inline-grid">
                      <div className="stat flex flex-row justify-evenly w-min-fit p-2 px-5 w-72 self-center h-20">
                        {p.skills.map((src) => (
                          <figure className="h-16 w-16">
                            <img className="w-[50px]" src={src} alt="" />
                          </figure>
                        ))}
                      </div>
                    </div>

                    <h2 className="card-title text-2xl leading-[3rem] truncate max-md:pt-[40px] max-sm:pt-[40px] text-[#f5f5f5]">
                      {p.title}{" "}
                      <span className="text-[0.9rem] italic">
                        {p.span && `-${p.span}-`}
                      </span>
                    </h2>

                    <p className="grow-0 text-base text-left text-[#f5f5f5]">
                      {p.body}
                    </p>
                    <div className="card-actions justify-start pt-5 items-center h-[150px] overflow-hidden lg:h-auto">
                      <a
                        role="button"
                        className="btn btn-neutral text-[#2e835b]"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        See Project
                        {/* <img src="assets/icons/export.svg" alt="" /> */}
                        <GitHub className="ml-2 text-[#369e6d]" />
                      </a>
                      <div className="badge badge-md font-bold overflow-hidden text-[#2e835b] rounded-lg">
                        {p.date}
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="flex items-center lg:justify-center relative h-[500px] mb-[5px] overflow-hidden pt-[10px] lg:w-[700px] lg:pt-0 lg:h-full">
                    <figure
                      className={
                        "w-[300px] right-[0px] lg:w-[700px] " +
                        "absolute " +
                        (p.mockup === "ipad" || p.mockup === "iphone"
                          ? "lg:right-[-40px]"
                          : "lg:right-[-180px]")
                      }
                    >
                      {" "}
                      <img
                        className={
                          "lg:w-[600px] " +
                          (p.mockup === "iphone"
                            ? "h-[200px] lg:h-[400px]"
                            : "h-[365px]") +
                          (p.mockup === "ipad" ? " h-[305px]" : "")
                        }
                        src={p.src}
                        alt="Album"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              // <ProjectCard
              //   src={p.src}
              //   // title={""}
              //   title={p.title}
              //   // body={""}
              //   body={p.body}
              //   link={p.link}
              //   skills={p.skills}
              // />
            ))}
          </div>

          <div class="flex justify-center w-full py-2 gap-2">
            {currentProjects.map((item, index) => (
              <a
                id={index}
                href={"#item" + (index + 1)}
                className={
                  "btn btn-xs" + (active == index ? " btn-disabled" : "")
                }
                onClick={handleClick}
              >
                {index + 1}
              </a>
            ))}
          </div>
        </div>
        <div className="projectsContainer flex flex-col justify-center justify-between w-full overflow-hidden items-center p-8 pt-0 lg:hidden">
          {currentProjects.map((p, index) => (
            <div className="carousel w-full flex overflow-hidden p-5 pt-0">
              <div
                id={"item" + (index + 1)}
                className="carousel-item overflow-hidden p-5 pt-1 max-lg:px-12"
              >
                <div className="myCard card lg:card-side bg-base-100 shadow-xl relative h-[470px] h-min-[500px] w-[1118px] lg:h-[420px]">
                  <div className="myStats stats stats-vertical shadow shadow-inner w-fit self-center absolute top-0 left-0 rounded-none rounded-tl-2xl rounded-br-2xl p-1 bg-gradient-to-r inline-grid lg:hidden">
                    <div className="stat flex flex-col justify-evenly w-min-fit p-2 self-center">
                      {p.skills.map((src) => (
                        <figure className="h-12 w-12">
                          <img className="w-[25px]" src={src} alt="" />
                        </figure>
                      ))}
                    </div>
                  </div>
                  <div className="pr-[10px] pl-[20px] pb-0 pt-[15px] mb-[20px] card-body w-fit justify-end relative lg:w-[52rem]">
                    <div className="myStats stats shadow shadow-inner w-fit self-center absolute top-0 left-0 rounded-none rounded-tl-2xl rounded-br-2xl bg-gradient-to-r hidden lg:inline-grid">
                      <div className="stat flex flex-row justify-evenly w-min-fit p-2 px-5 w-72 self-center h-20">
                        {p.skills.map((src) => (
                          <figure className="h-16 w-16">
                            <img className="w-[50px]" src={src} alt="" />
                          </figure>
                        ))}
                      </div>
                    </div>

                    <h2 className="card-title text-2xl leading-[3rem] truncate max-md:pt-[40px] max-sm:pt-[40px] text-[#f5f5f5]">
                      {p.title}{" "}
                      <span className="text-[0.9rem] italic">
                        {p.span && `-${p.span}-`}
                      </span>
                    </h2>

                    <p className="grow-0 text-base text-left text-[#f5f5f5]">
                      {p.body}
                    </p>
                    <div className="card-actions justify-start pt-5 items-center h-[150px] overflow-hidden lg:h-auto">
                      <a
                        role="button"
                        className="btn btn-neutral text-[#2e835b]"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        See Project
                        {/* <img src="assets/icons/export.svg" alt="" /> */}
                        <GitHub className="ml-2 text-[#369e6d]" />
                      </a>
                      <div className="badge badge-md font-bold overflow-hidden text-[#2e835b] rounded-lg">
                        {p.date}
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="flex items-start lg:items-center lg:justify-center relative h-[400px] mb-[5px] overflow-hidden pt-[10px] lg:w-[700px] lg:pt-0 lg:h-full">
                    <figure
                      className={
                        "right-[0px] lg:w-[700px] " +
                        "absolute " +
                        (p.mockup === "ipad" || p.mockup === "iphone"
                          ? "lg:right-[-40px]"
                          : "lg:right-[-180px]")
                      }
                    >
                      {" "}
                      <img
                        className={
                          "w-[250px] lg:w-[600px] " +
                          (p.mockup === "iphone"
                            ? "h-[200px] lg:h-[400px]"
                            : "lg:h-[365px]") +
                          (p.mockup === "ipad" ? "" : "")
                        }
                        src={p.src}
                        alt="Album"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
