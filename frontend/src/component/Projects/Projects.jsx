import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Note-App",
    image: "/note.jpg",
    desc: "Easily add notes to remember your tasks, ideas, or reminders — simple and useful for daily productivity.",
    link: "famous-lamington-b75ea4.netlify.app"
  },
  {
    title: "Text-Utills",
    image: "/text.jpg",
    desc: "Convert text to UPPERCASE, lowercase, remove extra spaces, count words, and estimate reading time — all in one simple tool",
    link: "grand-marzipan-c8b289.netlify.app"
  },
  {
    title: "Weather App",
    image: "/weather.jpg",
    desc: "A simple React-based weather application fetching real-time weather data using a public API.",
    link: "" // Add weather app link when ready
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
                
                {project.link ? (
                  <a
                    href={
                      project.link.startsWith("http")
                        ? project.link
                        : `https://${project.link}`
                    }
                    className="btn-view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                ) : (
                  <button className="btn-view" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
