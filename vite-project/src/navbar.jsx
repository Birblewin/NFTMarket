import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="logo">Your Logo</div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="mobile-toggle" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;
