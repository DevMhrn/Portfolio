import './Portfolio.css';
import { Typewriter } from 'react-simple-typewriter';
import React from 'react';
import Navbar from './Navbar'; // Adjust the import path if necessary

function Portfolio() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <h2 id="name">Hi, My name is</h2>
        <h1>Debashis Maharana</h1>
        <h2 id="typewriter" style={{ fontWeight: 'normal' }}>
          And, I'm a{' '}
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            <Typewriter
              words={['Developer', 'Learner', 'Coder', 'Tech Enthusiast!']}
              loop={0}
              cursor
              cursorStyle='<'
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Portfolio;
