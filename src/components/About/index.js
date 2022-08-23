import React from 'react';
import headshot from '../../assets/andrea-rowland-crop.jpg';
import './About.css';

// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function About() {
    return (
    <div id="about" className="bio">
        <h1 className='section-title-about'>About Me</h1>
        <div className='details'>
        <p>Front-end web developer leveraging psychology background to build a more intuitive user experience on the web. 
        Recently earned a certificate in full stack development from the University of Utah with newly developed skills in 
        Javascript, CSS, React, and responsive web design. Known as an innovative problem solver passionate about developing 
        apps with a focus on mobile-first design and development. With each project, my aim is to best engage my audience
        for an impactful user experience.</p>
        <img src={headshot} className="my-2" style={{ width: "30%" }} alt="headshot" />
    
        </div>
        {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}
        </div>
    )
}

export default About;