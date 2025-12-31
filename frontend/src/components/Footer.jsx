import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top line */}
      <div className="h-0.5 w-full bg-gray-600"></div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto py-6 px-4 text-center">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Amjid Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
