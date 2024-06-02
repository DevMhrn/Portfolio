import logo from './logo.svg';
import './App.css';

import Portfolio from './components/main/Portfolio';
import React from 'react';
import Navbar from './components/navbar/navbar/Navbar';
import About from './components/navbar/about/About';
import Projects from './components/navbar/Projects/Projects';
import Skills from './components/navbar/skills/Skills';
import Blog from './components/navbar/blogs/Blogs';
import Contacts from './components/navbar/contacts/Contacts';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Education from './components/navbar/education/education';


function App() {
  return (
    <div className="App">
      
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
