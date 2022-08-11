import React from 'react';


function Contact() {
    return (
        <React.Fragment>
    <div>
        <h1>Contact Me</h1>
        <form>
            <label for="contact-name">Your Name</label>
            <input type="text" id="contact-name" placeholder="Your Name" />

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email" />

            <label for="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Message"></textarea>

            <button type="submit">Submit</button>
        </form>           
    </div>

    <div>
        <h1>Feeling Social?</h1><br />

        <p>Find me on these online spaces too!</p><br />

                <a href="https://www.facebook.com/andrea.r.haag" target="_blank" class="sm-links">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://www.instagram.com/andrea.r.haag/" target="_blank" class="sm-links">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/andrea-haag-328354180/" target="_blank" class="sm-links">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>

    </div>

    </React.Fragment>
    )
}

export default Contact;