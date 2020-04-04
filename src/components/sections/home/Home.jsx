import React, { Component } from 'react';
import styled from 'styled-components';

import '../../../App.css';

const Container = styled.div`
  height: 100%;
  background-color: #1B262C;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export class Home extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <h1>Hello</h1>
        </Wrapper>
      </Container>
    )
  }
}

export default Home
