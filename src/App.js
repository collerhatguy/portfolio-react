import React from "react";
import "./style/App.css";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">

      <header>
          <h1>Jacobs Projects:</h1>
      </header>
      <div className="buttons-container">
          <button className="btn left-btn">Left</button> 
          <button className="btn right-btn">Right</button> 
      </div>
      <ProjectList />
    </div>
  );
}

export default App;
