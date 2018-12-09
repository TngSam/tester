import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import routerConfig from 'router/index';

export default function RoutesProvider () {
  return (
    <Switch>
      {routerConfig.map((route, i) => {
        return (<Route
          path={route.path}
          component={route.view}
          exact={route.exact}
          key={i}
        />);
      })}
    </Switch>
  );
}
