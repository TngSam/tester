import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import routerConfig from 'router';

import Loading from 'views/Loading/Loading';
const NotFound = lazy(() => import('views/NotFound/NotFound'));

/**
 * Impelements routes provider which exports routes that contain related views
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
export default function RoutesProvider () {
  return (
    <Suspense fallback={<Loading/>}>
      <Switch>
        {routerConfig.map((route, i) => {
          return (<Route
            path={route.path}
            render={() => <route.view/>}
            exact={route.exact}
            key={i}
          />);
        })}
        <Route render={() => <NotFound/>}/>
      </Switch>
    </Suspense>
  );
}
