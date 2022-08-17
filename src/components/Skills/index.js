import React from 'react';
import './skills.css';

function Skills() {
    return (
        <div className="skills">
            <h1 className="section-title">My Skills</h1>
            <ul className="skillset">
                <div className="group1">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                    <li>jQuery</li>
                </div>
                <div className="group2"> 
                    <li>AJAX</li>
                    <li>ES6</li>
                    <li>mongoDB</li>
                    <li>mongoose</li>
                    <li>MySQL</li>
                </div>
                <div className="group3">
                    <li>node.js</li>
                    <li>NoSQL</li>
                    <li>PWA</li>
                    <li>React JS</li>
                    <li>Sequelize.js</li>
                </div>
            </ul>
        </div>
    )
}

export default Skills;