import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython, faGithub, faDocker, faUbuntu, faSearchengin  } from '@fortawesome/free-brands-svg-icons';
import './skill.css';

function Skills() {
    const skills = [
        { icon: faHtml5, title: 'HTML5' },
        { icon: faCss3, title: 'CSS3' },
        { icon: faJs, title: 'JavaScript' },
        { icon: faReact, title: 'React' },
        { icon: faNodeJs, title: 'Node.js' },
        { icon: faPython, title: 'Python' },
        { icon: faGithub, title: 'Github' },
        { icon: faUbuntu, title: 'Bash' },
        { icon: faSearchengin, title: 'Chat-GPT' },
        {icon: faDocker, title: 'SQL'}

    ];

    return (
        <div className="skills">
            <h1 id='skill-id'>Skills</h1>
            <div className="skill-container">
                {skills.map(skill => (
                    <div className="skill" key={skill.title}>
                        {skill.icon ? (
                            <FontAwesomeIcon icon={skill.icon} size="3x" />
                        ) : null}
                        <h2>{skill.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
 