import React from "react"

export default function Contact({props}) {
    return(
        <div className="contacts">
            <div className="contact-card">
                <img src={props.img} alt="" className="cat" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    {/* <img src={phone} alt="" className="phone" /> */}
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    {/* <img src={mail} alt="" className="mail" /> */}
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

// destructor

// const person = {
//     img={cat1}
//     name="Mr.Whiskerson"
//     phone="(212) 55-1234"
//     email="mr.whiskaz@catnap.meow"    
// }

// const {img, name} = person
// console.log(name)

