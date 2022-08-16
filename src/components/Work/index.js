import React from 'react';
import strategicHome from "../../assets/work/Screenshot-main.JPG"
import serenityNow from "../../assets/work/SN-screenshot.JPG"
import runBuddy from "../../assets/work/run-buddy.JPG"


function Work() {
    
    return (
    <React.Fragment>
        <div className="work">
        <h1 className="section-title">My Work</h1>
            <article class="first">
                <a href="https://strategic-home-inspection.herokuapp.com/" target="_blank">
                    <img src={strategicHome} className="my-2" style={{ width: "80%" }} alt="strategicHome" />
                    <label for="first-sample">Strategic Investments Home Inspection</label>
                </a>
            </article>
            <article>
                <a href="https://andrea-rowland.github.io/serenity-now/" target="_blank">
                <img src={serenityNow} className="my-2" style={{ width: "80%" }} alt="serenityNow" />
                <label for="serenity-now" class="project-title">Serenity Now</label>
                </a>
            </article>
            <article>
                <a href="https://andrea-rowland.github.io/run-buddy/" target="_blank">
                <img src={runBuddy} className="my-2" style={{ width: "80%" }} alt="runBuddy" />    
                <label for="run-buddy" class="project-title">Run Buddy</label>
                </a>
            </article>
            </div>
    </React.Fragment>
    )
}

export default Work;