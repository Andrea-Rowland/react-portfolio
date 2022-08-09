import React from 'react';


function Gallery() {
    
    return (
    <section>
        <h1>My Work</h1>
        <Link to={{ pathname: "https://strategic-home-inspection.herokuapp.com/" }} target="_blank" />
        <img src={headshot} className="my-2" style={{ width: "30%" }} alt="headshot" />
    </section>
    )
}

export default Gallery;