import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../components/Main";

export default ({ auth }) => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);
