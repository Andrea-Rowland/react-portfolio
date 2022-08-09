import React from 'react';
import headshot from '../../assets/andrea-rowland-crop.jpg';

function About() {
    return (
    <div>
        <h1>About Me</h1>
        <p>Front-end web developer leveraging psychology background to build a more intuitive user experience on the web. 
        Recently earned a certificate in full stack development from the University of Utah with newly developed skills in 
        Javascript, CSS, React, and responsive web design. Known as an innovative problem solver passionate about developing 
        apps with a focus on mobile-first design and development. With each project, my aim is to best engage my audience
        for an impactful user experience.</p>
        <img src={headshot} className="my-2" style={{ width: "30%" }} alt="headshot" />
    </div>
    )
}

export default About;