import './Portfolio.css';
import { Typewriter } from 'react-simple-typewriter';
import React from 'react';

import Typing from './Typing';
// import Tile from '../tile/Tile';
import Banner from '../banner/Banner';
import Progress from '../progressBar/ProgressBar';
import { clear } from '@testing-library/user-event/dist/clear';
import { useEffect, useState } from 'react';

function Portfolio() {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(()=>{
      setPercentage(percentage<100 ? percentage+10: 0)
    }, 1000);
    
    return ()=> clearInterval(interval); 

  }, [percentage]);
  return (
    <div className="App">
      
      {/* <Banner />
      <Progress percentage={percentage}/> */}
      <div className="main-page">
        <h2 id="name">Hi, My name is</h2>
        <h1>Debashis Maharana</h1>
        {/* <Typing
          text ={["Developer",
          "Learner",
          "Coder",
          "Tech Enthusiast!",
          "Researcher",

          ]}
          typingSpeed={100}
          deletingSpeed={100}
          duration={1000}

        
         /> */}
        <h2 id="typewriter" style={{ fontWeight: 'normal' }}>
        <span className='typewriter-front'> I'm a</span>{' '}
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
        </h2>
        {/* <Tile
          header={"Class is going on"}
          subHeader={"Everyone is make a project"}
          img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
          text={"This is a project done by me and my team members. We are working on this project from last 2 months. We are using React, Node, Express, MongoDB, HTML, CSS, JavaScript, Bootstrap, Material-UI, etc. We are working on this project from last 2 months. We are using React, Node, Express, MongoDB, HTML, CSS, JavaScript, Bootstrap, Material-UI, etc."}
          link={"https://www.scaler.com"}
          linkText={"Learn More"}
          position={"left"}

        /> */}

      </div>
    </div>
  );
}

export default Portfolio;
