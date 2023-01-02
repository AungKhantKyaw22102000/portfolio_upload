import React from "react"
import black from "../../images/black-logo.svg"

export default function Project(){
    return(
        <div className="project">
            <h1 className="project-head">My Projects</h1>
            <div className="project-body">
                <div className="project-text">
                    <p className="project-p">I created a project, an Online Steaming website as <span className="eancrotv">EancroTV</span> with my friends last year. We mainly focused to created that project for our Myanmar citizen. We cannot use our Myanamr currency in the global steaming website just like <span className="twitch">Twitch</span>. As you know, we have to use other online payment cards in that website to subscribe something like as giving gifts to the steamer. Those kind of online payment cards cannot buy easily in our country. So, we will create our webiste with Myanmar online payment system. However, It is because of an streaming website, it is not easy to complete within in a few monthes. Therefore, I will post the demo of my project in my portfolio.</p>
                    <a href="http://eancrotv.epizy.com/lobby.html" target="_blank"><button className="eancro-btn">EancroTV</button></a>
                </div>
                <div className="project-logo">
                    <img src={black} alt="" className="eancro-logo" />
                </div>
            </div>
        </div>
    )
}