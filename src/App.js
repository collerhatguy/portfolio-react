import React, {useState, useEffect} from "react";
import "./style/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={ProjectPage}/>
        <Route path="/" exact component={AboutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
