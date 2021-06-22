import React from "react";
import "./style/App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" exact className="link">
          My Projects
        </Link>
        <Link to="/about" className="link">
          About Page
        </Link>
      </nav>
      <Switch>
        <Route path="/" exact component={ProjectPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
