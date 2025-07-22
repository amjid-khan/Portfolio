import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Amjid Khan. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1CawybYwdj/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/amjid-khan-494315363" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/amjid-khan" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://wa.me/923119091924" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
