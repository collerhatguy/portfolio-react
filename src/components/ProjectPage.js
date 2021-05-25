import React from "react";
import ProjectList from "./ProjectList";
import useMenuSelector from "../hooks/useMenuSelector";

export default function ProjectPage() {
    const projects = [
      "hearthstone-react-2",
      "coal-miner-fixed",
      "face-maker-2",
      "countdown-app",
      "zelda",
      "calculator",
      "front-end-mentor-2",
      "front-end-mentor-1",
      "JosephVoelker",
      "shapeMaker",
      "christmasTree",
      "Tyson.css",
    ]
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
        </div>
    )
}
