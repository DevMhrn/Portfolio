import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';

function SkillFile() {
    const skills = [
        {
            icon: faHtml5,
            title: "HTML5"
        },
        {
            icon: faCss3,
            title: "CSS3"
        },
        {
            icon: faJs,
            title: "JavaScript"
        },
        {
            icon: faReact,
            title: "React"
        },
        {
            icon: faNodeJs,
            title: "Node.js"
        },
        {
            icon: faPython,
            title: "Python"
        },
        {
            icon: faGithub,
            title: "Github"
        },
        {
            icon: null,
            title: "Bash"
        },
        {
            icon: null,
            title: "Chat-GPT"
        }
    ];

    return (
        <div>
            {skills.map((skill) => (
                <div className="skill" key={skill.title}>
                    {skill.icon ? <FontAwesomeIcon icon={skill.icon} beatFade /> : null}
                    <h1>{skill.title}</h1>
                </div>
            ))}
        </div>
    );
}

export default SkillFile;
