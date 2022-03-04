import { data } from "autoprefixer";
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
export default class Temp extends Component {
  projects = [
    {
      icons: [
        "assets/icons/nodejs.svg",
        "assets/icons/express.svg",
        "assets/icons/mongoDB.svg",
      ],
      title: "Travel Guide Provider",
      body: "Help people know more about their next traveling destination",
      screenShoot: "assets/projectsExamples/blog.png",
    },
  ];
  render() {
    return (
      <div className="wrapper">
        <div className="slider">
          {this.projects.map((p) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      {p.icons.map((ic) => (
                        <img src={ic} alt="" />
                      ))}
                    </div>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                    <span>projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src={p.screenShoot} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src="assets/left-arrow.svg" alt="<" className="arrow left" />
        <img src="assets/right-arrow.svg" alt=">" className="arrow right" />
      </div>
    );
  }
}
