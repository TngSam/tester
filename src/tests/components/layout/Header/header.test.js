import React from 'react';
import { shallow } from 'enzyme';

import { findObjByProp } from 'helpers/index';

import 'setupIcons';

import Header from 'components/layout/Header/Header';

test('An active link in the navigation is highlighted normally on click', () => {
  const header = shallow(<Header/>);
  header.instance().setActiveLink('about');

  const aboutLink = findObjByProp(header.state().nav.links, 'name', 'about');
  expect(aboutLink.active).toBeTruthy();
});
