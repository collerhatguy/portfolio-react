import React from 'react'
import Project from "./Project";

export default function ProjectList() {
    const projects = [
        "hearthstone-react-2", 
        "coal-miner-fixed", "calculator", 
        "JosephVoelker", "shapeMaker", 
        "christmasTree", "Tyson.css", 
        "emotional-furnace"
    ]
    return (
        <div className="project-list">
            <header>
                <h1>Jacobs Projects:</h1>
            </header>
            {projects.map((project, index) => {
                return <Project project={project} key={index} />
            })}
            
        </div>
    )
}
