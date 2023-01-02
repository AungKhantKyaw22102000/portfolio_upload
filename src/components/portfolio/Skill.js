import React from "react"

export default function skills() {
    return(
        <div className="skillmain">
            <h1 className="skill-head">My Skills and Objectives</h1>
            <div className="skill-body">    
                <div className="objectives">
                    <ul className="aims">
                        <li>Creating a new project</li>
                        <li>All kind of IT related fields for Studying</li>
                        <li>Good personality and communications</li>
                        <li>Strong ability to learn new things</li>
                        <li>Never tired for learning</li>
                    </ul>
                </div>
                <div className="skills">
                    <p className="skill-p">
                        <span className="specialized">Website Development Skills</span>
                        <ul className="specialized-p">
                            <li>Speiclized field - HTML, CSS, JavaScript, PHP, React, Python, C++</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}