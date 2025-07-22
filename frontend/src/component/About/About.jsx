import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Amjid Khan</span>, a passionate and dedicated <strong>fresher</strong> in the field of web development. I recently completed my <strong>Matriculation</strong>, and ever since, I’ve been committed to self-learning and improving my skills in full-stack development, especially with the <span className="highlight">MERN stack</span> (MongoDB, Express.js, React, Node.js).
            </p>
            <p>
              Despite being new to the industry, I’ve already worked on multiple personal projects that demonstrate my problem-solving skills, UI/UX understanding, and ability to write clean, maintainable code. I’m highly motivated, a quick learner, and I enjoy collaborating on team projects as well as building things independently. I'm looking forward to contributing to real-world applications and growing as a professional developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
