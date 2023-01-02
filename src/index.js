import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from "./Portfolioapp"
//import App from './App'
//import App from './Appjoke'

//ReactDOM.render(<p>Hi, my name is aung khant kyaw!</p>, document.getElementById("root"))

//Try to write that 1-liner of React code again! This time,
//see if you can figure out how to render an <ul> with 2+ <li>s inside
/*
ReactDOM.render(
    <ul><li>Thing 1</li><li>Thing 2</li></ul>,
    document.getElementById("root")
    )
*/

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the NavBar(which
// you can do inside the ReactDOM.render call below)

/*
function MainContent(){
    return(
        <h1>"I'm learning React!"</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)
*/

/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML)

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- apend it as a child of the div#root

*/
/*
const h1 = document.createElement("h1")
h1.textContent = "This is imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/

// const h1 = document.createElement("h1")
// h1.textContent = "Hello World"
// h1.className = "header"
// console.log(h1)

// JSX
/*
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
)
*/
/*
Challenge:

Create a navbar in JSX:
    - Use the sematic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nave elements
        -Inside the `ul`, have three `li`s for "Pricing", "About", and 
        "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
/*
const navbar = (
    <nav className="nav">
        <h1>Aung's Store</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

console.log(navbar)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)
*/
/*
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (> 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser
 */
/**
 Challenge: fix our code!

 Don't forget, you're not using CDNs anymore, so there's no 
 global "ReactDOM" varialbe to use anymore
*/
/*
const aung = (
    <div className="header">
        <h1>Aung Khant Kyaw</h1>
        <h2>I love React</h2>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(aung, document.getElementById("root"))
*/
// document.getElementById("root").append(JSON.stringify(aung))


/*
Challenge: Starting from scratch, build and render the HTML for our selection project.
Check the Google slide for what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can access it
  by using `src="./react-logo.png" in your image element
* You can also set the `width` attribute of the image element just like
  in HTML. In the slide, I have it set to 40px
*/
/*
const page = (
    <div>
        <img src={img} alt='logo' width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)


ReactDOM.render(page, document.getElementById("root"))
*/

/* 1. Why do we need to `import React from "react"` in out files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what whouold show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do and expect it to
handle the details. Imperative means I need to tell it HOW to do each step.


5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces.
*/
/*
function Aung(){
    return(
        <div>
        <img src={img} alt='logo' width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}


ReactDOM.render(<Aung />, document.getElementById("root"))
*/

/*Challenge:

Part 1: Create a page of your own using a custom Page component

iIt should return an ordered List with the reasons why you're excited
to be learning React :)

Render your list to the page
*/
/*
function Dosomething() {
    return(
        <div>
            <h1>It's working</h1>
            <ol>
                <li>Easy To understand</li>
                <li>Beautiful UI</li>
                <li>More comperative to use</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<Dosomething />, document.getElementById("root"))
*/

/*
challenge:

Part 2:
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with teh iamge of the React logo inside(src="./react-logo.png")
  and make sure to set the width to something more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons I'm excited to learn React").
  Place it above the ordered list.
- Add a `footer`after the list that says:
   "20xx <last name here> development. All rights reserved."
   */
/*
function Navbar(){
    return(
        <div>
            <header>
                <nav>
                    <img src={img} alt='logo' width="100px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Easy to Learn</li>
                <li>Nice UI</li>
                <li>Easy Responsive</li>
            </ol>
            <footer>
                <small>2022 Kyaw depleoment. All rights reserved.</small>
            </footer>
        </div>
    )
}
ReactDOM.render(<Navbar />, document.getElementById("root"))
*/

/*
Quiz

1. What is a React component?
A function that returns React elements. (UI)
*/

/**
 Mini Challenge:
 Move the `header` element from Page into its own component called "Header"
 Move the `footer` element into its own component called "Footer" and render that component inside the Page component.
 Move the `h1` and `ol` together into another component called "MainContent" and render inside Page as well.
 Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Contact"
 Using flexbox, line up the nav items horizontally, and put them inline with the React logo.
 Challenge: move the Footer and MainContent components into therir own files.
 */
/*
function Page(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))
*/

/**
 Challenge: Project setup

 - Create a `componenets` folder
 - Create the following components in separate files inside the components folder.
   In each one, just render an `h1` with the name of the component (e.g.
    return <h1>Navbar goes here</h1>);
     - Navbar
     - Main
 - Create an App component outside the components folder (sibling to the index.js file)
   - Have App render the Navbar and Main components
 - Import and render the App component inside of index.js using ReactDOM
   - At this point you should have your "Navbar goes here" etc. showing up in the mini-browser.
 - Go to Google fonts and get the "Inter" font with weights 400, 600, 700.
   Put the links to those fonts ABOVE the style.css link in index.html(use
    the `<link/>` elements instead of the @import or npm options for getting the fonts.
    You may beed to do some extra reserach to figure out how this works if you 
    haven't done it before)
 */
/*
function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if (hours < 12){
        timeofDay = "morning"
    }else if(hours >=12 && hours < 17){
        timeofDay = "afternoon"
    }else{
        timeofDay = "night"
    }

    return(
        <h1>Hello, {firstName} {lastName}. Good {timeofDay}. It is about {hours} o'clock!.</h1>
    )
}
*/

/*

1. What do props help up accomplish?
Make a component more reusable.

2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element?
(e.g. <div blachblahblah={true}>) Why or Why not?
No, becaue the JSX we use to describe native DOM elements will be turned into REAL DOM
elements by React. And real DOM elements only have the prooperaties/attributes
specified in the HTML specification. (Which doesn't include properties like `blahblahblah`)

4. How do I recieve props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}
*/

/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components
    (Joke compoent defined in its own file too)
    - Each Joke should recieve a "setup" prop and a "punchline" prop
      and render those however you'd like
- You you favourite 2-part jokes (setup & punchline), or check jokes.md file 
  for some examples.

  EXTRA CREDIT:
  Some jokes are only punchline with no setup:

  E.g.: "It's hard to explain puns to kleptomaniacs because
  they always take things literally."

  If you don't pass in a "question" prop, how might you make it only show the punchline?
*/

/*
map() method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

// const nums = [1, 2, 3, 4, 5]

// const squared = nums.map(function(items) {
//     return items * items
// })

// console.log(squared)

/*
Challenge 2:
Given an array of strings, return an array where the fist letter of each string is capitalized
*/

// const names = ["alice", "bob", "charlie", "danielle"]

// const uppercase = names.map(name => {
//     return name[0].toUpperCase() + name.slice()
// })

// console.log(uppercase)

/* Challenge 3:
Given an array of strings, return an array of strings that wraps each of the
original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
*/

//const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

//const element = pokemon.map(mon => `<p>${mon}</p>`)

//console.log(element)
/*
 1. What does the `.map()` array method do?
 Returns a new array. Whatever gets returned from the callback function provided is placed at the same
 index in the new array. Usually we take the items from the original array and modify them in some way.

 2. What do we usually use `.map()` for in React?
 Convert an array of raw data into an array of JSX elements that can be displayed on the page.

 3. Why is uing `.map()` better than just creating the components manually by typing them out?
 It makes our code more "self-sustaining" - not requiring additional changes whenever the data changes.

*/

ReactDOM.render(<Portfolio />, document.getElementById("root"))
