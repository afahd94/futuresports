import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '..//../context/DarkMode.css'
import DarkMode from '../../context/DarkMode';
import { useDarkMode } from '../../context/DarkModeContext';

function Navbar() {
  const { darkMode } = useDarkMode();
  const navbarClass = `nav ${darkMode ? 'dark-mode' : ''}`;

  return (
 <nav className={navbarClass}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <DarkMode />
    </nav>
  );
}

export default Navbar;
