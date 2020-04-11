import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import CustomizedParticles from './components/ui_library/CustomizedParticles';
import Header from './components/sections/header/Header';
import Home from './components/sections/home/Home';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderHomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B262C;
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 3;
`;

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ParticleContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export class App extends Component {
  render() {
    return (
      <MainContainer>
        {/* Header and Home */}
        <HeaderHomeContainer>
          <HeaderContainer><Header height="4em"/></HeaderContainer>
          <ParticleContainer><CustomizedParticles width="100%" height="100vh"/></ParticleContainer>
          <HomeContainer><Home/></HomeContainer>
        </HeaderHomeContainer>
        {/* Projects */}
        <div>
          <h1>Projects</h1>
        </div>
        {/* About */}
        <div>
          <h1>About</h1>
        </div>
        {/* Contact */}
        <div>
          <h1>Contact</h1>
        </div>
        {/* Footer */}
        <div>
          <h1>Footer</h1>
        </div>
      </MainContainer>
    )
  }
}

export default App
