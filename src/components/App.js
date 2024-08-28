import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Badges from "../pages/Badges";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Layout from "./Layout";
import Articles from "../pages/Articles";
import ArticleDetail from "../pages/ArticleDetail";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/">
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/articles" component={Articles}></Route>
          <Route exact path="/articles/:slug" component={ArticleDetail}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
