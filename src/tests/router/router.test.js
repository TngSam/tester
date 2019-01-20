import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import 'setupIcons';

import App from 'views/App';
import Index from 'views/Index/Index';

test('Router default renders at index pathname', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Index)).toHaveLength(1);
});
