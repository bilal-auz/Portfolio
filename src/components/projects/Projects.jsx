import { useEffect, useState } from "react";
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
      <div className="next">
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
      </div>
      <h1>Projects</h1>
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
      <div className="wrapper">
        <div className="projectsContainer flex flex-col items-center p-8 pt-0">
          <div className="carousel w-full flex">
            {currentProjects.map((p, index) => (
              <div id={"item" + (index + 1)} className="carousel-item px-12">
                <div className="myCard card lg:card-side bg-base-100 shadow-xl relative h-min-[500px] w-[1118px] h-[420px]">
                  <div className="card-body w-fit w-[52rem] justify-end relative">
                    <div className="myStats stats shadow shadow-inner w-fit self-center absolute top-0 left-0 rounded-none rounded-tl-2xl rounded-br-2xl bg-gradient-to-r">
                      <div className="stat flex flex-row justify-evenly w-min-fit p-2 px-5 w-72 self-center h-20">
                        {p.skills.map((src) => (
                          <figure className="h-16 w-16">
                            <img className="w-[50px]" src={src} alt="" />
                          </figure>
                        ))}
                      </div>
                    </div>

                    <h2 className="card-title text-2xl truncate">
                      {p.title}{" "}
                      <span className="text-[0.9rem] italic">
                        {p.span && `-${p.span}-`}
                      </span>
                    </h2>

                    <p className="grow-0 text-base text-left">{p.body}</p>
                    <div className="card-actions justify-start pt-5 items-center">
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
                  <div className="flex items-center relative h-full w-[700px]">
                    <figure
                      className={
                        "absolute " +
                        (p.mockup === "ipad" || p.mockup === "iphone"
                          ? "right-[-40px]"
                          : "right-[-180px]")
                      }
                    >
                      {" "}
                      <img
                        className={
                          "w-[600px] " +
                          (p.mockup === "iphone" ? "h-[400px]" : "h-[365px]")
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
      </div>
    </div>
  );
}
