import React, { Component } from 'react';

import Header from './Header/Header';
import Container from './Container/Container';
import Footer from './Footer/Footer';

import 'stylesheet/base.scss';

/**
 * Implements a global layout
 * @class
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Layout extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Container>
          Hello World!
        </Container>
        <Footer/>
      </section>
    );
  }
}

export default Layout;
