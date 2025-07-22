import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 4) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
<h2 className="logo">
  <span className="letter special">A</span>mjid <span className="letter special">K</span>han
</h2>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <ul className={menuOpen ? "nav-links mobile-menu-open" : "nav-links"}>
        <li><a onClick={closeMenu} href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
        <li><a onClick={closeMenu} href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
        <li><a onClick={closeMenu} href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
        <li><a onClick={closeMenu} href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
        <li><a onClick={closeMenu} href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
