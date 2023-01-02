import React from "react"
//import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./components/data"
import './style.css' 

export default function App() {
  const cards = Data.map(item => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return(
    <div>
      <Navbar />
      {cards}
    </div>
  )
}
