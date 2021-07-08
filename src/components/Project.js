import React from 'react';

export default function Project({project, indexOfMain, index}) {
    return (
        <div className={`project ${indexOfMain === index ? "main-project" : ""}`}>
            <h2 className="project-name">{project.siteName}</h2>
                <h3>Made with:</h3>
            <div className="technologies">
                {project.technologies.map(tech => <h4 className="technology">{tech}</h4>)}
            </div>
            <h3 className="project-live-server">
                <a  
                    target="_blank" 
                    href={`https://collerhatguy.github.io/${project.repoName}/`}
                >Live Server</a>
            </h3>
            <h3 className="project-repository">
                <a 
                    target="_blank" 
                    href={`https://github.com/collerhatguy/${project.repoName}`}
                >Repository</a>
            </h3>
           <div 
                className="project-photo"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/projectPhotos/${project.repoName}.png)`}}>
            </div>
        </div>
    )
}
