import React from "react"
import facebook from "../../images/facebook.png"
import github from "../../images/github.png"
import linkin from "../../images/linkin.png"

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://www.facebook.com/Yoko2210?mibextid=LQQJ4d" target="_blank"><img src={facebook} alt="" className="facebook" /></a>
            <a href="https://github.com/AungKhantKyaw22102000" target="_blank"><img src={github} alt="" className="github" /></a>
            <a href="https://www.linkedin.com/in/aung-khant-kyaw-44a4aa24a" target="_blank"><img src={linkin} alt="" className="linkin" /></a>
        </div>
    )
}