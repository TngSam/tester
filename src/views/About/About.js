import React, { Component } from 'react';
import styled from 'styled-components';

import withLayout from 'components/layout';

const Wrapper = styled.section`
  padding: 10px;
`;
const Heading = styled.h1`
  text-align: center;
`;

class About extends Component {
  render () {
    return (
      <Wrapper>
        <Heading>About this project</Heading>
      </Wrapper>
    );
  }
}

export default withLayout(About);
