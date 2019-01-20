import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import RoutesProvider from 'components/base/RoutesProvider/RoutesProvider';

class App extends Component {
  render () {
    return (
      <section>
        <RoutesProvider/>
      </section>
    );
  }
}

export default App;
