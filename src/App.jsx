import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import CustomizedParticles from './components/ui_library/CustomizedParticles';
import Header from './components/sections/header/Header';
import Home from './components/sections/home/Home';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1B262C;
`;

const StyledCustomizedParticles = styled(CustomizedParticles)`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
`;

export class App extends Component {
  render() {
    return (
      <Container>
        <StyledCustomizedParticles/>
        <Wrapper>
          <Header/>
          <Home/>
        </Wrapper>
      </Container>
    )
  }
}

export default App
