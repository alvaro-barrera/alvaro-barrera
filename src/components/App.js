import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Training from "../pages/Training";
import Layout from "./Layout";

function App() {
  return (
    <Router basename='/'>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/education" component={Training}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;