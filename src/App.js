import React from "react";
import "./style/App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/projects" className="link">
          My Projects
        </Link>
        <Link to="/">
          About Page
        </Link>
      </nav>
      <Switch>
        <Route path="/projects" component={ProjectPage}/>
        <Route path="/" exact component={AboutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
