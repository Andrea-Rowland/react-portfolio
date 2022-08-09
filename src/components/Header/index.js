import React from 'react';
import paint from '../../assets/susan-wilkinson-unsplash_horizontal.jpg';

function Header() {
    return (
    <div>
        <h1>Andrea Rowland</h1>
        <nav>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>My Work</li>
                <li>Contact Info</li>
            </ul>
        </nav>
        <img src={paint} className="my-2" style={{ width: "100%" }} alt="paint" />
    </div>
    )
}

export default Header;