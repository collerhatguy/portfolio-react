import React from 'react';
import Footer from "./Footer";

export default function AboutPage() {
    return (
        <div id="about-page">
            <header>
                <h1>Jacob Shomali's Portfolio Website</h1>
            </header>
            <div className="text-container">
                <h2>Who am I?</h2>
                <p>
                    I am a self taught web developer that understands and 
                    has done projects with HTML, CSS, JavaScript, and React. 
                    You can expect me to use destructuring, api integration, 
                    async and await, and higher order methods. I am also 
                    attending Lambda’s coding bootcamp. I have been programming 
                    on my own for several months now and plan to do so for my whole life.
                </p>
            </div>
            <Footer />
        </div>
    )
}
