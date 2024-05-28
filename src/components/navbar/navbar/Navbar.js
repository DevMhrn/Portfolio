// NavBar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        <p>Debashis Maharana #</p>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Blog">Blog</a></li> 
        <li><a href="#contact">Contact</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
