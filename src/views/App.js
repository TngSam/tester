import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import RoutesProvider from 'components/base/RoutesProvider/RoutesProvider';

class App extends Component {
  render () {
    return (
      <section>
        <Helmet>
          <title>Tester</title>
        </Helmet>

        <RoutesProvider/>
      </section>
    );
  }
}

export default App;
