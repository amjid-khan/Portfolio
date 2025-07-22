import React from 'react';
import './Projects.css';
const projectData = [
  {
    title: "Portfolio Website",
    image: "/port.jpg",
    desc: "A fully responsive personal portfolio built using React, showcasing my skills, projects, and contact details.",
  },
  {
    title: "MERN Blog App",
    image: "/blog.jpg",
    desc: "A full-stack blog platform using MongoDB, Express, React, and Node.js with user authentication and CRUD features.",
  },
  {
    title: "Weather App",
    image: "/weather.jpg",
    desc: "A simple React-based weather application fetching real-time weather data using a public API.",
  }
];

const Projects = () => {
  return (
    <section id='projects'>
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">
          As a <span className="highlight">fresher MERN Stack Developer</span>, I’ve built projects that reflect my learning and skills. Here are a few that showcase my design, frontend, and backend abilities.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href="#" className="btn-view">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
