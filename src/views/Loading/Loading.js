import React, { Component } from 'react';

import Loader from 'react-loaders';
import 'stylesheet/loader.scss';

class Loading extends Component {
  render () {
    return (
      <div className="component-wrapper">
        <Loader type="line-scale"/>
      </div>
    );
  }
}

export default Loading;
