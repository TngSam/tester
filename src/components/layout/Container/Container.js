import React, { Component } from 'react';

/**
 * Implements a container
 * @class
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Container extends Component {
  render () {
    return (
      <main>
        { this.props.children }
      </main>
    );
  }
}

export default Container;
