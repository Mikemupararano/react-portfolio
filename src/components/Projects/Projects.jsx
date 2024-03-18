import React from "react";
import { ProjectList } from "../utils/ProjectList";
import ProjectItem from "../Projects/ProjectItem";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Projects</h1>
      <div className="projectList">
        {ProjectList.map((projectItem, key) => {
          return (
            <a key={key} href={projectItem.url} target="_blank" rel="noopener noreferrer">
              <ProjectItem
                image={projectItem.image}
                name={projectItem.name}
                text={projectItem.text}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
