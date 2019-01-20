import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from 'components/ui/Logo/Logo';
import Nav from 'components/ui/Nav/Nav';

const StyledHeader = styled.header`
  padding: 1.75% 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
 * Implements a global header
 * @class
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <Logo/>
        <Nav/>
      </StyledHeader>
    );
  }
}

export default Header;
