import React from "react"
import logo from "../images/Group 77.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={logo} alt="" className="hero-photo" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activites lead by
                one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
    )
}