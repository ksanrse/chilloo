import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav__link">Something under</a>
        <a href="#" className="nav__link">Documentation</a>
        <a href="#" className="nav__link button__focus">Mindfulness</a>
      </nav>
      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#" className="fullscreen-menu__link" onClick={toggleMenu}>Something under</a>
        <a href="#" className="fullscreen-menu__link" onClick={toggleMenu}>Documentation</a>
        <a href="#" className="fullscreen-menu__link" onClick={toggleMenu}>Mindfulness</a>
      </div>
    </header>
  );
};

export default Header;
