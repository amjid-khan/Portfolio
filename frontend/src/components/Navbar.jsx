import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Folder,
  Phone,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center h-16 justify-between gap-4">
            
            {/* Logo */}
            <div className="text-white text-2xl sm:text-3xl font-bold flex-shrink-0">
              Amjid<span className="text-sienna">.</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex flex-1 justify-center mx-4">
              <ul className="flex gap-6 lg:gap-10 text-white text-sm lg:text-base">
                {navLinks.map(({ id, label, icon: Icon }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`flex items-center gap-2 relative transition-colors duration-300
                        ${active === id ? "text-sienna" : "hover:text-sienna"}`}
                    >
                      <Icon size={18} />
                      {label}
                      {active === id && (
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-sienna" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* WhatsApp Button */}
            <div className="hidden md:flex flex-shrink-0">
              <a
                href="https://wa.me/03119091924"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 px-4 lg:px-6 py-1.5 lg:py-2 rounded text-white text-sm lg:text-base font-semibold hover:bg-green-600 transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white flex-shrink-0"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-black text-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-4 sm:px-8 lg:px-12 py-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-5 px-4 sm:px-8 lg:px-12 mt-6">
          {navLinks.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 text-lg transition
                ${active === id ? "text-sienna" : "hover:text-sienna"}`}
            >
              <Icon size={22} />
              {label}
            </a>
          ))}

          {/* WhatsApp Button - Mobile */}
          <a
            href="https://wa.me/03119091924"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-green-500 py-2 rounded text-white font-semibold hover:bg-green-600 transition"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;