import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import 'setupIcons';

import Layout from 'components/layout/Layout';
import Index from 'views/Index/Index';

test('Router default renders at index pathname', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Layout/>
    </MemoryRouter>
  );
  expect(wrapper.find(Index)).toHaveLength(1);
});
