import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/Homepage.scss";
import Main from "./pages/Main";
import Aside from "./components/Aside";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import OneProject from "./pages/OneProject";
import Skills from "./pages/Skills";
import Private from "./pages/Private";

function App() {
  return (
    <div className="homepage">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={OneProject} />
        <Route path="/skills" component={Skills} />
        <Route path="/private" component={Private} />
      </Switch>
    </div>
  );
}

export default App;
