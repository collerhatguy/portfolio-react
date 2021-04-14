import React from "react";
import "./style/App.css";
import Project from "./components/Project";

function App() {
  const projects = ["hearthstone-react-2", 
    "coal-miner-fixed", "calculator", 
    "JosephVoelker", "shapeMaker", 
    "christmasTree", "Tyson.css", 
    "emotional-furnace"
]
  return (
    <div className="App">
      {projects.map((project, index) => {
        return <Project project={project} key={index} />
      })}
    </div>
  );
}

export default App;
