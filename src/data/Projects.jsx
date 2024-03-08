import React from 'react';
import projectsData from '..//Projects/Projects'; // Import project data
import './Projects.css'; // Import CSS for projects styling

function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p><a href={project.deployedLink}>Deployed Version</a></p>
          <p><a href={project.githubLink}>GitHub Repository</a></p>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;
