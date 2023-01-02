import React from "react"
import mail from "../../images/mail.png"
import phone from "../../images/phonea.png"
import location from "../../images/location.png"

export default function Contact() {
    return(
        <div className="contact">
            <h1 className="contact-head">Contact Me</h1>
            <div className="contact-p">
                <ul className="contact-body">
                    <li><img src={mail} alt="mail" className="mail" /> Mail : aungkhantkyaw2210@gmail.com</li>
                    <li><img src={phone} alt="phone" className="phone" /> Phone : 09958299943</li>
                    <li><img src={location} alt="location" className="location" /> Location : No.237, Way Pon La 6st, North Okkalapa, Yangon</li>
                </ul>
            </div>
        </div>
    )
}