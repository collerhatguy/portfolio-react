import React from 'react';

export default function Project({project, indexOfMain, index}) {
    return (
        <div className={indexOfMain === index ? "project main-project" : "project"}>
            <h2 className="project-name">{project}</h2>
            <h3 className="project-live-server">
                Live Server: 
                <a  
                    target="_blank" 
                    href={`https://collerhatguy.github.io/${project}/`}
                >click here</a>
            </h3>
            <h3 className="project-repository">
                Repository: 
                <a 
                    target="_blank" 
                    href={`https://github.com/collerhatguy/${project}`}
                >click here</a>
            </h3>
        </div>
    )
}
