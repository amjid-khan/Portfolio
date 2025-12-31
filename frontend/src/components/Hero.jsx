import React, { useState, useEffect } from "react";
import { Facebook, Github, Linkedin } from "lucide-react";

// Typewriter component
const Typewriter = () => {
  const words = ["MERN Stack Developer", "MongoDB", "Express", "React", "NodeJS"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 70 : 200;

    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (!deleting) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentWord.length) setDeleting(true);
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <h1
      className="mt-2 sm:mt-6 text-3xl sm:text-[40px] md:text-[50px] lg:text-[55px] font-bold text-center md:text-left text-sienna"
      id="position"
    >
      {text}
      <span className="border-r-2 border-sienna animate-blink ml-1">&nbsp;</span>
    </h1>
  );
};

const experienceData = [
  { count: "1+", label: "Experience" },
  { count: "20+", label: "Projects" },
  { count: "50+", label: "Happy Clients" },
];

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("home");
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="home" className="bg-black text-white border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side */}
          <div
            className={`w-full md:w-1/2 lg:w-[55%] transform transition-transform duration-1000 ease-out ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <p className="text-sm sm:text-base text-center md:text-left">Hi this is me</p>

            <p className="mt-3 sm:mt-5 text-2xl sm:text-[28px] md:text-[35px] font-semibold text-center md:text-left" id="name">
              Amjid Khan
            </p>

            <Typewriter />

            <div className="flex gap-4 sm:gap-5 mt-6 sm:mt-8 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/1BzFeMYmgz/" className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-sienna hover:border-sienna transition-all duration-300">
                <Facebook size={18} />
              </a>

              <a href="https://github.com/amjid-khan" className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-sienna hover:border-sienna transition-all duration-300">
                <Github size={18} />
              </a>

              <a href="https://www.linkedin.com/in/amjid-khan-494315363/" className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-sienna hover:border-sienna transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 sm:mt-10 justify-center md:justify-start">
              <a href="https://wa.me/03119091924" target="_blank" rel="noopener noreferrer" className="bg-sienna h-10 w-full sm:w-52 flex items-center justify-center rounded-md text-white font-medium hover:shadow-lg transition-all duration-300">
                Hire Me
              </a>

              <a href="/cv.pdf" download className="relative h-10 w-full sm:w-52 border border-white overflow-hidden group flex items-center justify-center rounded-md">
                <span className="relative z-10 transition-colors duration-300">Download CV</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-sienna group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row mt-10 bg-[#1a1919] sm:max-w-[520px] rounded-md overflow-hidden">
              {experienceData.map((item, index) => (
                <div key={index} className={`flex-1 p-5 text-center border-b sm:border-b-0 sm:border-r border-sienna ${index === experienceData.length - 1 ? "sm:border-r-0" : ""}`}>
                  <p className="text-sienna text-xl font-bold">{item.count}</p>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div
            className={`w-full md:w-1/2 lg:w-[45%] flex justify-center transform transition-transform duration-1000 ease-out ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <img
              src="/logo.jpeg"
              alt="profile"
              className="object-cover
                         rounded-[50%_10%_50%_10%/_10%_50%_10%_50%]
                         w-56 h-56
                         sm:w-72 sm:h-72
                         md:w-80 md:h-80
                         lg:w-96 lg:h-96
                         xl:w-[360px] xl:h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
