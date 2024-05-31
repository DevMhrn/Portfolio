import React from 'react';
import './ProgressBar.css';
function ProgressBar({percentage}){
    return (
        <div className="progress-bar">
            <div className="progress" style={{width: `${percentage}%`}}>
                <span className="progressBar-text">{percentage}%</span>
            </div>

        </div>
    )

}
export default ProgressBar;