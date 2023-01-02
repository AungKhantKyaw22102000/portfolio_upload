import React from "react"
import Joke from "./Joke"
import jokeData from "./jokeData"

/*
Challenge see if you can correctly pass the necessary props to the Joke component in the .map()
(and render the jokeElements array) so the jokes show up on the page again
*/

export default function App() {
    const jokeElements = jokeData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

/*
Challenge: Think critically - how would you pass in a prop that wasn't a string datatype.

E.g. Say you want each Joke component to recieve an "upvotes" and "downvotes" prop that is a number, as well as a prop
with an array of comments, and a boolean of whether the joke is a pun (`isPun`).
*/

/*
Change: turn the strings in the array into <h3> elements instead
*/
/*
export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>, 
            <h3>Green</h3>, 
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            {colors}
        </div>
    )
}
*/