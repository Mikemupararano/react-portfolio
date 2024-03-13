import React from 'react';
import ProjectList from "../components/ProjectList"; // Import project data
import ProjectItem from '../components/ProjectItem';
import './Projects.css'; // Import CSS for projects styling

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Projects</h1>
      <div className="projectList">
        {ProjectList.map((projectItem, key) => {
          return (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              description={projectItem.description} // Use description instead of price
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
