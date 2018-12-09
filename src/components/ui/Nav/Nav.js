import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledNav = styled.ul`
  position: absolute;
  top: 199%;
  left: 50%;
  transform: translate(-45.25%, -50%);
  overflow: hidden;
  width: 15em;
  height: 5.5em;
  transition: width .75s, height .75s;
  ${props => props.visible && css`
    width: 0;
    height: 0;
    transition-delay: 1s;
  `}
`;

/**
 * Component that builds up a circular navigation
 * @class
 * @prop {bool} visible - A visibility of navigation
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Nav extends Component {
  render () {
    return (
      <StyledNav visible={this.props.visible}>
        {this.props.children}
      </StyledNav>
    );
  }
};
Nav.propTypes = {
  visible: PropTypes.bool
};

export default Nav;
