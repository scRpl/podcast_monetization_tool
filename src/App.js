import React, { Fragment } from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Podcasts from './pages/podcasts';
import Advertisers from './pages/advertisers';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/advertisers">
          <Advertisers />
        </Route>
        <Route path="/podcasts">
          <Podcasts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
