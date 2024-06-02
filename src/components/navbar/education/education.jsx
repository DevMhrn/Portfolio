import React from "react";
import "./education.css";

function Education() {
  return (
    <div className="education">
      <span className="title">Education</span>
      <div className="education-container">
        <div className="education-card">
        <div className="image-container">
          <img src="https://www.financialexpress.com/wp-content/uploads/2023/03/image-68.jpg?w=1024" alt="acaler-logo" />



        </div>    
        
         <div className='education-content'>
          <h3>Scaler School of Technology</h3>
          <h3>Bachelor of Science in Computer Sciences</h3>
          <p>Jul 2023 - Jul 2027</p>

         </div>
          
        </div>
        <div className="education-card">
          <div className="image-container">
            <img src="https://mmentp.in/uploads/20230812/depaulbam//pages/Untitled.png" alt="depaul-logo" />


          </div>
          <div className='education-content'>
            <h3>De Paul School</h3>
            <h3>Primary Education and Higher Secondary Education</h3>
            <p>Jan 2009- Jan 2023</p>

         </div>
        </div>
      </div>
      
    </div>
  );
}
export default Education;