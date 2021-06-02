import React from 'react';
import facePic from "./face.jpg"

export default function AboutPage() {
    return (
        <div id="about-page">
            <header>
                <h1>Jacob Shomali's Portfolio Website</h1>
            </header>
            <h2>Who am I?</h2>
            <p>
                I am a self taught web developer that understands and 
                has done projects with HTML, CSS, JavaScript, and React. 
                You can expect me to use destructuring, api integration, 
                async and await, and higher order methods. I am also 
                attending Lambda’s coding bootcamp. I have been programming 
                on my own for several months now and plan to do so for my whole life.
            </p>
            <div className="face-picture-container">
                <img src={facePic} />
            </div>
            <footer>
                <a href="mailto:jacobshomali3@gmail.com">jacobshomali3@gmail.com</a>
                <a href="tel:+8102315851">810-231-5851</a>
                <address>6402 Maplebrook Lane, Flint MI, 48507</address>
            </footer>
        </div>
    )
}
