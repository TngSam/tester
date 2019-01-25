// Exports router config

// Route /
import Index from 'views/Index/Index';

// Route /about
import About from 'views/About/About';

// Route /cabinet
import Cabinet from 'views/Cabinet/Cabinet';

// Route /auth
import Auth from 'containers/Auth/Auth';

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
