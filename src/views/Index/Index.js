import React, { Component } from 'react';

import withLayout from 'components/layout';

import Test from 'components/ui/Test/Test';

class Index extends Component {
  render () {
    return (
      <Test/>
    );
  }
}

export default withLayout(Index);
