// NavBar.js
import React from 'react';
import  './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        <p>Debashis Maharana #</p>
      </div>
      <ul className="navbar-links">
        <li className='nav-item'><a  href="#home">Home</a></li>
        <li className='nav-item'><a  href="#about">About</a></li>
        <li className='nav-item'><a  href="#services">Services</a></li>
        
        <li className='nav-item'><a href="#skills">Skills</a></li>
        <li className='nav-item'><a  href="#experience">Experience</a></li>
        <li className='nav-item'><a  href="#Blog">Blog</a></li> 
        <li className='nav-item'><a  href="#contact">Contacts</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
