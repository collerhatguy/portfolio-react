import React, {useState, useEffect} from "react";
import "./style/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={ProjectPage}/>
      </Switch>
    </Router>
  );
}

export default App;
