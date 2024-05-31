import './Portfolio.css';
import { Typewriter } from 'react-simple-typewriter';
import React from 'react';
import Navbar from '../navbar/navbar/Navbar';
import Typing from './Typing';
function Portfolio() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <h2 id="name">Hi, My name is</h2>
        <h1>Debashis Maharana</h1>
        <Typing
          text ={["Developer",
          "Learner",
          "Coder",
          "Tech Enthusiast!",
          "Researcher",

          ]}
          typingSpeed={100}
          deletingSpeed={100}
          duration={1000}

        
         />
        {/* <h2 id="typewriter" style={{ fontWeight: 'normal' }}>
        <span className='typewriter-front'>And, I'm a</span>{' '}
          <span style={{ color: '#16ff00', fontWeight: 'bold' }}>
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
        </h2> */}
      </div>
    </div>
  );
}

export default Portfolio;
