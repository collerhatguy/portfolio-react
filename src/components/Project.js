import React from 'react';

export default function Project({project, indexOfMain, index}) {
    return (
        <div className={indexOfMain === index ? "project main-project" : "project"}>
            <h2 className="project-name">{project}</h2>
            <h3 className="project-live-server">
                <a  
                    target="_blank" 
                    href={`https://collerhatguy.github.io/${project}/`}
                >Live Server</a>
            </h3>
            <h3 className="project-repository">
                <a 
                    target="_blank" 
                    href={`https://github.com/collerhatguy/${project}`}
                >Repository</a>
            </h3>
           <div 
                className="project-photo"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/projectPhotos/${project}.png)`}}>
            </div>
        </div>
    )
}
