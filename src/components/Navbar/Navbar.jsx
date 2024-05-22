import React, { useState } from 'react';
import '../Navbar/Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-toggle" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`nav-list ${isOpen ? 'nav-list-open' : ''}`}>
            <li className="nav-item">HOME</li>
            <li className="nav-item">ABOUT US</li>
            <li className="nav-item">WORK</li>
            <li className="nav-item">TESTIMONIAL</li>
            <li className="nav-item">CONTACT</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
