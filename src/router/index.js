import { lazy } from 'react';

// Exports router config

// Route /
const Index = lazy(() => import('views/Index/Index'));

// Route /about
const About = lazy(() => import('views/About/About'));

// Route /cabinet
const Cabinet = lazy(() => import('views/Cabinet/Cabinet'));

// Route /auth
const Auth = lazy(() => import('containers/Auth/Auth'));

export default [
  {
    path: '/',
    view: Index,
    exact: true
  },
  {
    path: '/auth',
    view: Auth,
    exact: true
  },
  {
    path: '/about',
    view: About,
    exact: true
  },
  {
    path: '/cabinet',
    view: Cabinet,
    exact: true
  }
];
