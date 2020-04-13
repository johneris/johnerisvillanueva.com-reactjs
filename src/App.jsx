import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import { device } from './helpers/MediaQueryHelper';

import CustomizedParticles from './components/ui_library/CustomizedParticles';
import Header from './components/sections/header/Header';
import Home from './components/sections/home/Home';
import Contact from './components/sections/contact/Contact';
import Footer from './components/sections/footer/Footer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderHomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B262C;

  @media ${device.lowerThanLaptopL} {
    height: calc(100vh + 38em);

    display: flex;
    flex-direction: column;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 3;

  @media ${device.lowerThanLaptopL} { 
    position: static;
  }
`;

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  @media ${device.lowerThanLaptopL} { 
    position: static;
  }
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
        <Contact/>
        {/* Footer */}
        <Footer/>
      </MainContainer>
    )
  }
}

export default App
