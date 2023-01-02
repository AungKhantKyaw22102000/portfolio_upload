import React from "react"
import Certificate from "./components/portfolio/Certificate"
import Experience from "./components/portfolio/Experience"
import Navbar from "./components/portfolio/Navbar"
import Footer from "./components/portfolio/Footer"
import Project from "./components/portfolio/Project"
import Summary from "./components/portfolio/Summary"
import Contact from "./components/portfolio/Contact"
import "./portfoliostyle.css"
import Skill from "./components/portfolio/Skill"

export default function App() {
    return(
        <div>
            <Navbar />
            <Summary />
            <Experience />
            <Project />
            <Skill />
            <Certificate />
            <Contact />
            <Footer />
        </div>
    )
}