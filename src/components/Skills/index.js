import React from 'react';
// import html5 from '../../assets/logos/html-1.svg';
// import css3 from '../../assets/logos/CSS3_logo.svg';
// import javascript from '../../assets/logos/JavaScript-logo.png';
// import visualStudio from '../../assets/logos/Visual_Studio_Code_1.35_icon.svg';
// import git from '../../assets/logos/Git-Icon-Black.png';
// import gitHub from '../../assets/logos/GitHub-Mark-120px-plus.png';
// import jQuery from '../../assets/logos/jquery-icon.png';
// import ajax from '../../assets/logos/Ajax-develoment-side-image.png';
// import es6 from '../../assets/logos/ES6.png';
// import mongoDB from '../../assets/logos/mongodb_thumbnail.webp';
// import mongoose from '../../assets/logos/mongoose-icon.png';
// import mySQL from '../../assets/logos/mySQL.png';
// import node from '../../assets/logos/nodejs-new-pantone-black.svg';
// import nosql from '../../assets/logos/Nosql.jfif';
// import pwa from '../../assets/logos/Progressive Web Apps.jfif';
// import react from '../../assets/logos/React.png';
// import sequelize from '../../assets/logos/sequelize.png';

function Skills() {
    return (
        <div className="skills">
            <h1 className="section-title">My Skills</h1>
            {/* <img src={html5} className="my-2" style={{ width: "10%" }} alt="html5" />
        <img src={css3} className="my-2" style={{ width: "10%" }} alt="css3" />
        <img src={javascript} className="my-2" style={{ width: "10%" }} alt="javascript" />
        <img src={visualStudio} className="my-2" style={{ width: "10%" }} alt="visualStudio" />
        <img src={git} className="my-2" style={{ width: "10%" }} alt="git" />
        <img src={gitHub} className="my-2" style={{ width: "10%" }} alt="gitHub" />
        <img src={jQuery} className="my-2" style={{ width: "10%" }} alt="jQuery" />
        <img src={ajax} className="my-2" style={{ width: "10%" }} alt="ajax" />
        <img src={es6} className="my-2" style={{ width: "10%" }} alt="es6" />
        <img src={mongoDB} className="my-2" style={{ width: "10%" }} alt="mongoDB" />
        <img src={mongoose} className="my-2" style={{ width: "10%" }} alt="mongoose" />
        <img src={mySQL} className="my-2" style={{ width: "10%" }} alt="mySQL" />
        <img src={node} className="my-2" style={{ width: "10%" }} alt="node" />
        <img src={nosql} className="my-2" style={{ width: "10%" }} alt="nosql" />
        <img src={pwa} className="my-2" style={{ width: "10%" }} alt="pwa" />
        <img src={react} className="my-2" style={{ width: "10%" }} alt="react" />
        <img src={sequelize} className="my-2" style={{ width: "10%" }} alt="sequelize" /> */}
            <ul className="skillset">
                <div>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                    <li>jQuery</li>
                </div>
                <div> 
                    <li>AJAX</li>
                    <li>ES6</li>
                    <li>mongoDB</li>
                    <li>mongoose</li>
                    <li>MySQL</li>
                </div>
                <div>
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