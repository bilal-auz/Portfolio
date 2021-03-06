import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import WorksList from "./WorksList";
import projectsData from "./data";
import "./projects.scss";

export default function Works() {
  const [selected, setSelected] = useState("all");
  const [currentProjects, setProjects] = useState([]);
  const list = [
    {
      id: "all",
      name: "All",
    },
    {
      id: "webapp",
      name: "Web App",
    },
    {
      id: "BI",
      name: "Business Intelligence",
    },
    {
      id: "systems",
      name: "System Softwares",
    },
  ];

  useEffect(() => {
    if (selected === "all") {
      return setProjects(projectsData);
    }

    const newProjects = projectsData.filter((p) => p.tag === selected);

    setProjects(newProjects);
  }, [selected]);

  return (
    <div className="projects" id="projects">
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
      <ul className="menu menu-horizontal bg-base-100 rounded-box">
        {list.map((item) => (
          <WorksList
            key={item.id}
            id={item.id}
            title={item.name}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="wrapper">
        <div className="projectsContainer">
          {currentProjects.map((p) => (
            <ProjectCard
              src={p.src}
              // title={""}
              title={p.title}
              // body={""}
              body={p.body}
              link={p.link}
              skills={p.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
