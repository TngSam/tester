import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledNavItem = styled.li`
  position: absolute;
  top: 0;
  left: 45%;
  border-bottom-right-radius: 100%;
  transform-origin: top left;
  background-color: #252B43;
  width: 5.5em;
  height: 5.5em;
  overflow: hidden;
  transition: width .75s, height .75s;
  ${props => !props.active && css`
    &:hover {
      background-color: #1D223A;
    }
  `}
  ${props => props.rotate && css`
    transform: rotate(calc(0deg + ${(props.rotate - 1) * 60}deg));
    transition-delay: calc(0.15s * ${props.rotate});
    > div {
      position: absolute;
      top: 28.25%;
      right: 25%;
      transform: rotate(calc(0deg - ${(props.rotate - 1) * 60}deg));
    }
  `}
  ${props => props.visible && css`
    width: 0;
    height: 0;
  `}
  ${props => props.active && css`
    background-color: #445076;
  `}
`;

/**
 * A part of `Nav` component - circular nav item
 * @class
 * @prop {number} rotate - A rotation of the element (must be ascending by index). Non-zero
 * @prop {bool} visible - A visibility of nav item
 * @prop {bool} active - Is link active?
 * @prop {function} onItemClick - A click event
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class NavItem extends Component {
  render () {
    return (
      <StyledNavItem
        rotate={this.props.rotate}
        visible={this.props.visible}
        active={this.props.active}
        onClick={this.handleClick}
      >
        <div>{this.props.children}</div>
      </StyledNavItem>
    );
  }
  handleClick = () => {
    this.props.onItemClick();
  }
}
NavItem.propTypes = {
  rotate: (props, propName, componentName) => {
    if (props[propName] <= 0) {
      return new Error(`
        The rotation of '${componentName}' must be greater than zero.
      `);
    }
  },
  visible: PropTypes.bool
};

export default NavItem;
