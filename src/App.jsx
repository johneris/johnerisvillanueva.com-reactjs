import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import Header from './components/sections/header/Header';
import Home from './components/sections/home/Home';

const Container = styled.div`
  height: 100%;

  background-color: red;

  display: flex;
  flex-direction: column;
`;

export class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Home/>
      </Container>
    )
  }
}

export default App
