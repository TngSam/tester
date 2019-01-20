import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import routerConfig from 'router';
import NotFound from 'views/NotFound/NotFound';

/**
 * Impelements routes provider which exports routes that contain related views
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
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
      <Route component={NotFound}/>
    </Switch>
  );
}
