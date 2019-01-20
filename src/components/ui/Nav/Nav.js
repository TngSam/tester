import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { FaUserCircle, FaNewspaper } from 'react-icons/fa';
import styled from 'styled-components';

const StyledNav = styled.nav`
  min-width: 12.5%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: block;
  padding: 10% 10% 7.5% 10%;
  border-radius: 3px;
  transition: background 0.35s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.075);
  }
`;

/**
 * Component that builds up a circular navigation
 * @class
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Nav extends Component {
  render () {
    return (
      <StyledNav>
        <StyledLink to="/">
          <FaNewspaper size={32} color="#3F51B5"/>
        </StyledLink>
        <StyledLink to="/cabinet">
          <FaUserCircle size={30} color="#3F51B5"/>
        </StyledLink>
      </StyledNav>
    );
  }
};

export default Nav;
