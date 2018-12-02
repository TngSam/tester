import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from 'components/ui/Logo/Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2D2F31;
  color: white;
  padding: 0.1% 10%;
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
      </StyledHeader>
    );
  }
}

export default Header;
