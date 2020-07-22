import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/Homepage.scss";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="homepage">
      <Aside />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
