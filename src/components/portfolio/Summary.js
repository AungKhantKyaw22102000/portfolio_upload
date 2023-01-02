import React from "react"
import my from "../../images/myimg.jpeg"

export default function Summary() {
    return(
        <div className="summary">
            <h1 className="summary-head">About Me</h1>
            <div className="about">
                <div className="summary-text">
                    <p className="summary-p">I have already got the Bachelor's Degree from Edinburgh Napier University (UK). So, I have a great English skill and also good at working with terms and conditions. I also have the great personality at work. I would like to apply this position at your company to expand my carrier life and you will also get a great learner and passionate staff. To become a successful developer in the future is my goal and get an attractive salary rate for my development skills. You will never feel regret for hiring a great talent staff for this position.</p>
                </div>
                <div className="me">
                    <img src={my} alt="" className="myphoto" />
                </div>
            </div>
        </div>
    )
}