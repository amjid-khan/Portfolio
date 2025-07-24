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
    title: "Todo-App",
    image: "/todo.png",
    desc: "A simple and fast ToDo app that lets you add and delete tasks with ease. Stay focused and organized without any distractions or unnecessary features.",
    link: "stellular-zuccutto-f2c3df.netlify.app"
  },
  {
    title: "Change-BG-Colors",
    image: "/color.jpeg",
    desc: "A simple web tool to change the background color with just one click. Make your page fun and colorful instantly! ",
    link: "iridescent-salmiakki-f92f60.netlify.app"
  },
  {
    title: "QR-Code-Generator",
    image: "/qr.webp",
    desc: "Instantly generate QR codes for any text or URL with this simple tool. No signup, no clutter — just fast and clean QR creation!",
    link: "darling-lollipop-062dbe.netlify.app"
  },
  {
    title: "Text-to-speak",
    image: "/speak.png",
    desc: "Convert written text into spoken words instantly using this simple Text-to-Speech tool. Perfect for accessibility, learning, or just having fun listening to your own words!",
    link: "stellular-lokum-c646b8.netlify.app"
  },
  {
    title: "Counter",
    image: "/counter.webp",
    desc: "A simple counter app to increment or decrement numbers with ease. Perfect for learning state management in React or basic JavaScript interactions!",
    link: "sage-kashata-4db84a.netlify.app"
  },
  {
    title: "Order-App",
    image: "/order.jpg",
    desc: "This Order App allows users to manage orders with ease. You can add new orders, update existing ones, delete them when needed, and adjust the quantity by increasing or decreasing it — all in a simple, user-friendly interface.",
    link: "sprightly-capybara-006e0d.netlify.app"
  },
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
