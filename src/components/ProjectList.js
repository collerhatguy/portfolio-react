import React from 'react'
import Project from "./Project";

export default function ProjectList({projects}) {
    
    return (
        <div className="project-list">
            {projects.map((project, index) => {
                return <Project project={project} key={index} />
            })}
        </div>
    )
}
