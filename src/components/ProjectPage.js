import React from "react";
import ProjectList from "./ProjectList";
import useMenuSelector from "../hooks/useMenuSelector";

export default function ProjectPage() {
    const projects = [
      "hearthstone-react-2", 
      "coal-miner-fixed", "calculator", 
      "JosephVoelker", "shapeMaker", 
      "christmasTree", "Tyson.css", 
      "emotional-furnace"
    ]
    const [handleProjectLeft, handleProjectRight, mainProject] = useMenuSelector(projects);
    return (
        <div>
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
