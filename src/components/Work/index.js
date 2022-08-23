import React from 'react';
import strategicHome from "../../assets/work/Screenshot-main.JPG"
import serenityNow from "../../assets/work/SN-screenshot.JPG"
import jennaLouise from "../../assets/work/Website Screenshot.JPG"
import './work.css';


function Work() {

    return (
        <React.Fragment>
            <div className="work">
                <h1 className="section-title-work">My Work</h1>
                <article className="first">
                    <a href="https://artofjenna.herokuapp.com/" target="_blank">
                        <img src={jennaLouise} className="my-2" style={{ width: "90%" }} alt="jennaLouise" />
                        <label for="first-sample">Art of Jenna Louise</label>
                    </a>
                </article>
                <div className='project-flex'>
                    <article>
                        <a href="https://andrea-rowland.github.io/serenity-now/" target="_blank">
                            <img src={serenityNow} className="my-2" style={{ width: "70%" }} alt="serenityNow" />
                            <label for="serenity-now" class="project-title">Serenity Now</label>
                        </a>
                    </article>
                    <article>
                        <a href="https://strategic-home-inspection.herokuapp.com/" target="_blank">
                            <img src={strategicHome} className="my-2" style={{ width: "90%" }} alt="strategicHome" />
                            <label for="strategic-home" class="project-title">Strategic Home</label>
                        </a>
                    </article>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Work;