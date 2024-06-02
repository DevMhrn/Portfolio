import React from 'react';
import './About.css';
function About(){
    return(
        <div  className="about">
            <span id='about-me'>About Me</span>
            <div className="about-me">
                <div className="about-content">
                    <div className="img-parent">
                        <img src="data:image/jpeg;base64,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" alt="profile-pic" />
                    </div>
                    <div className="text-parent">
                         <h3>🚀 Debashis Maharana | Passionate Software Developer</h3>
                        <h3>Nice to meet you</h3>
                        <div className="text">
                        💻 Specializing in Web Development, I craft seamless user experiences and robust backend solutions. 🧩 With a knack for problem-solving, I thrive on creating elegant code that makes a real impact. 🔧 Always exploring new tools and techniques, I stay at the forefront of the ever-evolving tech landscape. 🌐✨
                        </div>
                </div>
                    
                </div>

            </div>
                
            
            <div className="interest">
            <span id='interest-id'>Interests</span>
                
                <div className='interest-content'>
                    
                        <div className="interest-child">
                            🎨 Design
                        </div>
                        <div className="interest-child">
                            🚀 Development
                        </div>
                        <div className="interest-child">
                            📚 Learning
                        </div>
                        <div className="interest-child">
                            🌟 Collaboration
                        </div>
                        <div className="interest-child">
                            🎮 Gaming
                        </div>
                        <div className="interest-child">
                            🎧 Music
                        </div>
                        <div className="interest-child">
                            📷 Photography
                        </div>
                        <div className="interest-child">
                            🎥 Movies
                        </div>


                    
                    
                </div>


            </div>


        </div>

    )
}
export default About;