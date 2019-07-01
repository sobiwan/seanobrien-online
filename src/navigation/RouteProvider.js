import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";

export default ({ auth }) => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
