import React, { useState } from 'react';
import { validEmail } from './Regex';
import './contact.css';

function Contact() {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);

    const validate = (e) => {
        e.preventDefault();
        if (!validEmail.test(email)) {
           setEmailErr(true);
        }
     };

    return (
        <React.Fragment>
            <section id="reach-out" className="contact flex=row">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">
                    </h2>
                </div>

                <div className="contact-info" id="contact-info">
                    <div>
                        <h3>Contact Info</h3>

                        <address>
                            P: 801.201.1555<br />
                            E: <a href="mailto:andreadrowland@gmail.com">andreadrowland@gmailcom</a><br />
                            <a href="./assets/resume/Andrea Resume 2022.pdf" id="resume"><strong>Click here for my resume</strong></a>
                        </address>

                    </div>

                    <div className="contact-form">
                        <h3>Contact Me</h3>
                        <form>
                            <label for="contact-name">Your Name</label>
                            <input type="text" id="contact-name" placeholder="Your Name" required />

                            <label for="contact-email">Your Email</label>
                            <input type="text" id="contact-email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />

                            <label for="contact-message">Message</label>
                            <textarea id="contact-message" placeholder="Message" required ></textarea>
                            {emailErr && <p>Your email is invalid</p>}
                            <button onClick={validate}>Submit</button>
                        </form>
                        
                    </div>

                    <div className="feeling-social">
                        <div>
                            <h3>Feeling Social?</h3><br />

                            <p>Find me on these online spaces too!</p>
                        </div>
                        

                        <a href="https://www.facebook.com/andrea.r.haag" target="_blank" className="sm-links">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://www.instagram.com/andrea.r.haag/" target="_blank" className="sm-links">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/andrea-haag-328354180/" target="_blank" className="sm-links">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </div>
                </div>


            </section>

        </React.Fragment>
    )
}

export default Contact;