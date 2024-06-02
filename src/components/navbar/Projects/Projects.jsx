import React from 'react';
import './project.css';

function Projects() {
  const projects = [
    {
      projectName: "Yulu DataAnalysis",
      projectDescription: "A bike sharing app data analysis project",
      projectImg: "https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"

    },
    {
      projectName:"Aerofit Treadmill Data Analysis",
      projectDescription:"A treadmill data analysis project",
      projectImg:"https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
    },
    {
      projectName:"Inventory Management System",
      projectDescription:"A project to manage inventor using Java and SpringBoot",
      projectImg:"https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
      
    }
  ]
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.projectName}>
            <h2>{project.projectName}</h2>
            <img src={project.projectImg} alt={project.projectName} />
            <p>{project.projectDescription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects;