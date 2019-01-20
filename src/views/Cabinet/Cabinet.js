import React, { Component } from 'react';
import styled from 'styled-components';

import withLayout from 'components/layout';

const Wrapper = styled.section`
  padding: 10px;
`;
const Heading = styled.h1`
  text-align: center;
`;

class Cabinet extends Component {
  render () {
    return (
      <Wrapper>
        <Heading>Cabinet</Heading>
      </Wrapper>
    );
  }
}

export default withLayout(Cabinet);
