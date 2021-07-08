import React from "react";
import ProjectList from "./ProjectList";
import Footer from "./Footer";
import useMenuSelector from "../hooks/useMenuSelector";
import projects from "../project-data";

export default function ProjectPage() {
    const [handleProjectLeft, handleProjectRight, mainProject] = useMenuSelector(projects);
    return (
        <div id="project-page">
            <header>
                <h1>Jacobs Projects:</h1>
            </header>
            <div className="buttons-container">
                <button 
                    onClick={() => handleProjectLeft()}
                    className="btn left-btn">Left</button> 
                <button 
                    onClick={() => handleProjectRight()}
                    className="btn right-btn">Right</button> 
            </div>
            <ProjectList projects={projects} mainProject={mainProject}/>
            <Footer />
        </div>
    )
}
