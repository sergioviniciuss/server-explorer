import React from "react";
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import "./style.scss";
import { routesConfig } from "../../routes";

export const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        {routesConfig.map((route) => (
          <Route
            key={route.id}
            path={route.url}
            component={route.component}
            exact
          />
        ))}
      </Switch>
    </HashRouter>
  );
};
