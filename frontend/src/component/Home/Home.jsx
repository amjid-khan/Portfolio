import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-wrapper">
        {/* LEFT SECTION */}
        <div className="home-content">
          <h2>
            Hi, I'm <span className="highlight">Amjid Khan</span>
          </h2>
          <h3>A Passionate <span className="highlight">MERN Stack Developer</span></h3>
          <p>
            I'm a <strong>fresher</strong> full-stack web developer with a deep interest in building responsive and efficient applications using <span className="highlight">MongoDB, Express, React, and Node.js</span>. I believe in writing clean code, learning continuously, and solving real-world problems through modern web solutions.
          </p>

          <div className="button-group">
            <a href="#projects" className="btn-modern">View Projects</a>
            <a href="#contact" className="btn-modern">Hire Me</a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="home-image">
          <img src="ak.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
