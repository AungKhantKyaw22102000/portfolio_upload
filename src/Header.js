import React from "react"
import img from './logo.svg'

export default function Head() {
    return(
        <header>
            <nav className="nav">
                <img src={img} alt='logo' className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}