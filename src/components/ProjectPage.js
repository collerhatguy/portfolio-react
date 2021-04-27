import React from "react";
import ProjectList from "./ProjectList";
import useMenuSelector from "../hooks/useMenuSelector";

export default function ProjectPage() {
    const projects = [
      {
        name: "hearthstone-react-2",
        img: "https://imgur.com/jz7cro0",
      },
      {
        name: "coal-miner-fixed",
        img: "https://imgur.com/3GrWKTx",
      },
      {
        name: "face-maker-2",
        img: "https://imgur.com/3GrWKTx",
      },
      {
        name: "zelda",
        img: "https://imgur.com/3GrWKTx",
      },
      {
        name:  "calculator",
        img: "https://imgur.com/eFniWMh",
      },
      {
        name: "JosephVoelker",
        img: "https://imgur.com/zfoAHBA",
      },
      {
        name: "shapeMaker",
        img: "https://imgur.com/n52OH0B",
      },
      {
        name: "christmasTree",
        img: "https://imgur.com/yKDi1wU",
      },
      {
        name: "Tyson.css",
        img: "https://imgur.com/wnVFxSw",
      },
      {
        name: "emotional-furnace",
        img: "https://imgur.com/9Y1wUOW",
      }
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
