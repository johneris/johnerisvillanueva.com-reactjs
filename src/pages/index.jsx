import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { device } from '../helpers/MediaQueryHelper';

import CustomizedParticles from '../components/ui_library/particles/CustomizedParticles';
import HeaderSection from '../components/sections/header/HeaderSection';
import HomeSection from '../components/sections/home/HomeSection';
import ProjectsSection from '../components/sections/projects/ProjectsSection';
import SkillsSection from '../components/sections/skills/SkillsSection';
import QuotationSection from '../components/sections/quotation/QuotationSection';
import AboutSection from '../components/sections/about/AboutSection';
import ContactSection from '../components/sections/contact/ContactSection';
import FooterSection from '../components/sections/footer/FooterSection';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderHomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B262C;

  min-height: 768px;

  @media ${device.lowerThanLaptop} {
    height: calc(100vh + 35rem);
    min-height: calc(768px + 35rem);

    display: flex;
    flex-direction: column;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 3;

  @media ${device.lowerThanLaptop} { 
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

  @media ${device.lowerThanLaptop} { 
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

  onHomeClicked() {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  onProjectsClicked() {
    scroller.scrollTo('projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  onSkillsClicked() {
    scroller.scrollTo('skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  onAboutClicked() {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  onContactClicked() {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <MainContainer>
        {/* Header and Home */}
        <Element name="home"/>
        <HeaderHomeContainer>
          <HeaderContainer>
            <HeaderSection 
              height="4em"
              onHomeClicked={this.onHomeClicked}
              onProjectsClicked={this.onProjectsClicked}
              onSkillsClicked={this.onSkillsClicked}
              onAboutClicked={this.onAboutClicked}
              onContactClicked={this.onContactClicked}
            />
          </HeaderContainer>
          <ParticleContainer><CustomizedParticles width="100%" height="100vh"/></ParticleContainer>
          <HomeContainer><HomeSection/></HomeContainer>
        </HeaderHomeContainer>
        {/* Projects */}
        <Element name="projects"/>
        {/* <ProjectsSection/> */}
        {/* Skills */}
        <Element name="skills"/>
        <SkillsSection/>
        {/* Quote */}
        {/* <QuotationSection/> */}
        {/* About */}
        <Element name="about"/>
        {/* <AboutSection/> */}
        {/* Contact */}
        <Element name="contact"/>
        {/* <ContactSection/> */}
        {/* Footer */}
        {/* <FooterSection 
          onHomeClicked={this.onHomeClicked}
          onProjectsClicked={this.onProjectsClicked}
          onSkillsClicked={this.onSkillsClicked}
          onAboutClicked={this.onAboutClicked}
          onContactClicked={this.onContactClicked}
        /> */}
      </MainContainer>
    )
  }
}

export default App
