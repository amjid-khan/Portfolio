import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'MongoDB', level: 65 }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={skillRef}>
      <div className="skills-container">
        <div className="skills-intro">
          <h2 className="section-title">My Skills</h2>
          <p>
            As a <span className="highlight">MERN stack fresher</span>, I bring a strong foundation in web development and a hunger to learn. I’ve worked on several personal projects and understand how each layer of the stack connects.
          </p>
          <p>
            I aim to write clean, efficient code and build intuitive interfaces. I’m confident in HTML, CSS, JavaScript, and React, and I’m actively learning backend development.
          </p>
        </div>

        <div className="skills-bars">
          {skillsData.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="bar-track">
                <div
                  className={`bar-fill ${isVisible ? 'fill' : ''}`}
                  style={{ width: isVisible ? `${skill.level}%` : 0 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;