import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const skillsData = [
  { name: "HTML", desc: ["Markup language for web pages", "Essential for frontend"], icon: <FaHtml5 />, percent: 90 },
  { name: "CSS", desc: ["Styling web pages", "Layouts and animations"], icon: <FaCss3Alt />, percent: 85 },
  { name: "JavaScript", desc: ["Dynamic web functionality", "Client-side logic"], icon: <FaJsSquare />, percent: 80 },
  { name: "Tailwind CSS", desc: ["Utility-first CSS framework", "Fast styling"], icon: <SiTailwindcss />, percent: 75 },
  { name: "ReactJS", desc: ["Frontend library", "Reusable components"], icon: <FaReact />, percent: 80 },
  { name: "NodeJS", desc: ["Server-side runtime", "Backend logic"], icon: <FaNodeJs />, percent: 70 },
  { name: "ExpressJS", desc: ["Web framework", "Routing & APIs"], icon: <SiExpress />, percent: 70 },
  { name: "MongoDB", desc: ["NoSQL database", "Data storage"], icon: <SiMongodb />, percent: 65 },
  { name: "Authentication", desc: ["User login & security", "JWT / OAuth"], icon: <SiPostman />, percent: 60 },
  { name: "API Integration", desc: ["Connecting APIs", "Fetching & sending data"], icon: <SiPostman />, percent: 75 },
  { name: "GitHub", desc: ["Version control & collaboration", "Repository management"], icon: <FaGithub />, percent: 85 },
  { name: "MERN Stack", desc: ["MongoDB, Express, React, Node", "Full stack development"], icon: <FaReact />, percent: 80 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p
          className={`text-center text-3xl font-semibold mb-6 transform transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          <span className="text-sienna font-semibold underline">S</span>kills
        </p>

        {/* Paragraph below heading */}
        <p
          className={`max-w-3xl mx-auto mb-10 text-center sm:text-left text-sm sm:text-base transform transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          I am passionate about continuously sharpening my technical skills to
          craft seamless and intuitive web experiences. I take pride in
          writing clean, efficient code, solving challenging problems, and
          turning ideas into polished, real-world solutions that make an
          impact.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-0">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative flex bg-[#111] rounded-xl shadow-lg cursor-pointer min-w-[250px] overflow-hidden group"
            >
              {/* Bottom-to-top gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-sienna/30 to-transparent transition-all duration-300 group-hover:h-full pointer-events-none rounded-xl z-10"></div>

              {/* Colored side bar */}
              <div className="relative w-2 overflow-hidden z-20">
                <div className="absolute left-0 top-0 w-full h-0 bg-[#a0522d] transition-all duration-500 group-hover:h-full"></div>
              </div>

              <div className="p-4 sm:p-5 flex-1 relative z-20">
                <div className="flex items-center gap-3 mb-2 text-sm sm:text-base">
                  {/* Icon container */}
                  <div className="bg-[#222] p-2 rounded-full flex items-center justify-center text-sienna text-xl sm:text-2xl">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <p className="text-xs sm:text-sm">{skill.desc[0]}</p>
                <p className="text-xs sm:text-sm">{skill.desc[1]}</p>

                <div className="mt-3 bg-[#333] rounded-lg h-4 sm:h-5 overflow-hidden">
                  <div
                    className="bg-[#a0522d] h-full flex items-center justify-end pr-1 text-white font-bold rounded-l-lg transition-all duration-1000 ease-out"
                    style={{ width: visible ? `${skill.percent}%` : "0%" }}
                  >
                    <span className="text-[10px] sm:text-xs">{visible ? `${skill.percent}%` : ""}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
