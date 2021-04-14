import React from 'react'

export default function Project({project}) {
    return (
        <div>
            <h2 className="project-name">{project}</h2>
            <h3>Live Server: 
                <a target="_blank" href={`https://collerhatguy.github.io/${project}/`}>click here</a>
            </h3>
            <h3>Repository: 
                <a target="_blank" href={`https://github.com/collerhatguy/${project}`}>click here</a>
            </h3>
            
        </div>
    )
}
