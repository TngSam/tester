import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { smoky } from 'stylesheet/vars';
import styled from 'styled-components';

const StyledFooter = styled.footer`

`;
const Copyright = styled.small`
  color: ${smoky};
  font-size: .625em;
`;

/**
 * Implements a global footer
 * @class
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Footer extends Component {
  render () {
    return (
      <StyledFooter>
        <Copyright>&copy; 2019 Tester. All rights reserved</Copyright>
      </StyledFooter>
    );
  }
}

export default Footer;
