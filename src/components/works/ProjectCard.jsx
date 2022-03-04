import React, { Component } from "react";

export default class ProjectCard extends Component {
  onClick = () => {
    window.open(this.props.link, "_blank");
  };
  render() {
    return (
      <div className="projectCard">
        <div className="limp"></div>

        <div className="projectsSkills">
          {/* <div className="lamp"></div> */}
          {this.props.skills.map((skill) => (
            <img src={skill} alt="" />
          ))}
        </div>
        <div className="card glass">
          <figure>
            <img src={this.props.src} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{this.props.title}</h2>
            <p>{this.props.body}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={this.onClick}>
                See Project <img src="assets/icons/export.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
