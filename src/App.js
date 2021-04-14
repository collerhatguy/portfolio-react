import React, {useState, useEffect} from "react";
import "./style/App.css";
import ProjectList from "./components/ProjectList";

function App() {
  const projects = [
    "hearthstone-react-2", 
    "coal-miner-fixed", "calculator", 
    "JosephVoelker", "shapeMaker", 
    "christmasTree", "Tyson.css", 
    "emotional-furnace"
]
  const [mainProject, setMainProject] = useState(0);
  const handleProjectChange = (left) => {
    left ? handleProjectChangeLeft() : handleProjectChangeRight();
  }
  const handleProjectChangeLeft = () => {
    if (mainProject === 0) return
    setMainProject(prevProject => prevProject - 1)
  }
  const handleProjectChangeRight = () => {
    if (mainProject === projects.length - 1) return
    setMainProject(prevProject => prevProject + 1)
  }
  useEffect(() => {
    console.log(mainProject)
  }, [mainProject])
  return (
    <div className="App">

      <header>
          <h1>Jacobs Projects:</h1>
      </header>
      <div className="buttons-container">
          <button 
            onClick={() => handleProjectChange(true)}
            className="btn left-btn">Left</button> 
          <button 
            onClick={() => handleProjectChange(false)}
            className="btn right-btn">Right</button> 
      </div>
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
