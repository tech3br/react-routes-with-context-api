import React from "react";

import { Switch } from "react-router";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Route from "./Route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
};

export default Routes;
