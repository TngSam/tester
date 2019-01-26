import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import RoutesProvider from 'components/base/RoutesProvider/RoutesProvider';

import 'stylesheet/base.scss';

class App extends Component {
  render () {
    return (
      <Fragment>
        <Helmet>
          <title>TestifyMe</title>
        </Helmet>

        <RoutesProvider/>
      </Fragment>
    );
  }
}

export default App;
