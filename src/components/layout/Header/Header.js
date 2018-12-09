import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import * as R from 'ramda';
import { findObjByProp } from 'helpers/index';

import Logo from 'components/ui/Logo/Logo';
import Nav from 'components/ui/Nav/Nav';
import NavItem from 'components/ui/Nav/NavItem/NavItem';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2D2F31;
  color: white;
  padding: 0.1% 10%;
  max-height: 75px;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

/**
 * Implements a global header
 * @class
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
class Header extends Component {
  state = {
    nav: {
      hidden: true,
      links: [
        { to: '/about', name: 'about', icon: 'question', active: false },
        { to: '/cabinet', name: 'cabinet', icon: 'user-circle', active: false },
        { to: '/', name: 'index', icon: 'ellipsis-v', active: true }
      ]
    }
  }
  componentDidMount () {
    // Set current pathname as active in the navigation
    let pathname = '/';
    if (window && window.location && window.location.pathname) {
      pathname = window.location.pathname;
    }
    const activeLinkName = findObjByProp(this.state.nav.links, 'to', pathname).name;
    this.setActiveLink(activeLinkName);
  }
  constructor () {
    super();

    this.setActiveLink = this.setActiveLink.bind(this);
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }
  render () {
    return (
      <StyledHeader onMouseEnter={this.showNav} onMouseLeave={this.hideNav}>
        <Logo/>

        <Nav visible={this.state.nav.hidden}>
          {this.state.nav.links.map((link, i) => (
            <Link to={`${link.to}`} key={i}>
              <NavItem
                rotate={i + 1}
                visible={this.state.nav.hidden}
                active={findObjByProp(this.state.nav.links, 'name', link.name).active}
                onItemClick={() => this.setActiveLink(link.name)}
              >
                <FontAwesomeIcon icon={link.icon} />
              </NavItem>
            </Link>
          ))}
        </Nav>
      </StyledHeader>
    );
  }

  showNav () {
    this.setState({
      nav: {
        ...this.state.nav,
        hidden: false
      }
    });
  }
  hideNav () {
    this.setState({
      nav: {
        ...this.state.nav,
        hidden: true
      }
    });
  }

  setActiveLink (linkName) {
    this.setState(state => {
      return {
        nav: {
          ...state.nav,
          links: R.map(link => ({
            ...link,
            active: R.equals(link.name, linkName)
          }), state.nav.links)
        }
      };
    });
  }
}

export default Header;
