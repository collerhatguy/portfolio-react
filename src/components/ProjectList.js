import React from 'react'
import Project from "./Project";

export default function ProjectList({projects, mainProject}) {
    
    return (
        <div className="project-list">
            {projects.map((project, index) => {
                return <Project project={project} indexOfMain={mainProject} index={index} key={index} />
            })}
        </div>
    )
}
