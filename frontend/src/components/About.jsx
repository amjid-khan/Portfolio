import React, { useEffect, useRef, useState } from "react";

const myInfoData = [
  { label: "Name", value: "Amjid Khan" },
  { label: "Phone", value: "+92 311 9091924" },
  { label: "Experience", value: "1+ Year" },
  { label: "Freelance", value: "Available" },
  { label: "Location", value: "Satellite Town, Rawalpindi" },
  { label: "Email", value: "amjidkurrmywal@gmail.com" },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // Toggle visible state when section in viewport
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Left side: Image */}
          <div
            className={`w-full md:w-2/5 border border-black overflow-hidden rounded-md transform transition-transform duration-1000 ease-out ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              src="/about.JPG"
              alt="About Me"
              className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Right side: Text */}
          <div
            className={`w-full md:w-3/5 md:pl-12 transform transition-transform duration-1000 ease-out ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <p className="text-[1.3rem] sm:text-[1.5rem] mb-4
                          first-letter:text-[1.7rem] sm:first-letter:text-[1.9rem]
                          first-letter:text-sienna first-letter:font-bold first-letter:underline">
              About Me
            </p>

            <p className="mb-6 text-sm sm:text-base leading-relaxed tracking-wide">
              I am passionate about <span className="text-sienna font-semibold">web development</span> and
              love creating modern, user-friendly web applications. I recently mastered the <span className="text-sienna font-semibold">MERN Stack</span>,
              gaining hands-on experience with MongoDB, Express.js, React, and Node.js.  
              During this journey, I completed an internship at{" "}
              <a
                href="https://uptechsol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                Uptech Sol
              </a>
              , working on real-world projects and improving problem-solving skills.  
              This experience strengthened my confidence to develop <span className="text-sienna font-semibold">scalable and efficient web solutions</span>.
            </p>

            {/* Dynamic my-info section */}
            <div className="mt-8 md:mt-16 p-4 sm:p-5 border border-[#222222] rounded-md bg-[rgba(128,64,0,0.05)]">
              {myInfoData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 sm:py-3 border-b border-[rgba(255,255,255,0.2)] hover:bg-[#1d1c1c] transition-colors ${
                    index === myInfoData.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <p className="text-gray-400 font-medium text-[13px] sm:text-[14px] mb-1 sm:mb-0">{item.label}</p>
                  <p className="text-white font-semibold text-[15px] sm:text-[16px]">{item.value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
