import React from 'react';

export default function Project({project, indexOfMain, index}) {
    return (
        <div className={indexOfMain === index ? "project main-project" : "project"}>
            <h2 className="project-name">{project.name}</h2>
            <h3 className="project-live-server">
                Live Server: 
                <a  
                    target="_blank" 
                    href={`https://collerhatguy.github.io/${project.name}/`}
                >click here</a>
            </h3>
            <h3 className="project-repository">
                Repository: 
                <a 
                    target="_blank" 
                    href={`https://github.com/collerhatguy/${project.name}`}
                >click here</a>
            </h3>
            <blockquote class="imgur-embed-pub" lang="en" data-id="a/jz7cro0" data-context="false" >
                <a href={project.img}></a>
            </blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
        </div>
    )
}
