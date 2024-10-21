import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/team" onClick={toggleMenu}>Team</Link>
        <Link to="/experience" onClick={toggleMenu}>Experience</Link>
        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
