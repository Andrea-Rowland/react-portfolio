import React from 'react';
// import paint from '../../assets/Wilkinson-Unsplash-Horizontal.JPG';'
import background from "../../assets/susan-wilkinson-unsplash_horizontal.jpg";
import './header.css';





function Header() {
    // render() {
        const myStyle={
            backgroundImage: `url(${background})`,
            height: '100vh',
            marginTop: '-70px',
            fontSize: '50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        };
        return (
            <React.Fragment>
            <header className="header" style={myStyle}>
                <h1>Andrea Rowland</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        
                        <li><a href="#skills">Skills</a></li>
                        
                        <li><a href="#my-work">My Work</a></li>
                        
                        <li><a href="#contact-info">Contact Info</a></li>
                    </ul>
                </nav>
                
            </header>
            {/* <img src={paint} className="my-2" style={{ width: "100%" }} alt="paint" /> */}
            </React.Fragment>
            );
    }
    


export default Header;