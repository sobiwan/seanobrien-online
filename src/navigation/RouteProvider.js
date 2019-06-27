import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Creed from '../components/Creed';
import Process from '../components/Process';
import Team from '../components/Team';
import Resources from '../components/Resources';

export default ({ auth }) => (
  <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />
  </Switch>
);
