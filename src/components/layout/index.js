import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Container from './Container/Container';
import Footer from './Footer/Footer';

const StyledLayout = styled.div`
  padding: 0 20%;
`;

/**
 * Higher-order component which wraps a component into the global layout
 * @function
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
const withLayout = WrappedComponent => class extends Component {
  render() {
    return (
      <StyledLayout>
        <Header/>
        <Container>
          <WrappedComponent/>
        </Container>
        <Footer/>
      </StyledLayout>
    );
  }
}

export default withLayout;
