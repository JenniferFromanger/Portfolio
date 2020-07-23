import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/Homepage.scss";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="homepage">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
