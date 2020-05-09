import React, { Component } from 'react';
import Head from 'next/head';
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
import ScrollTopButton from '../components/ui_library/scroll_top_button/ScrollTopButton';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderHomeContainer = styled.section`
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

const ScrollTopButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 5%;

  display: ${ props => {
    return props.showSrollToTop ? "flex" : "none" 
  }};
`;

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSrollToTop: false
    }
  }

  componentDidMount() {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        this.setState({
          showSrollToTop: false
        });
      }
    }.bind(this);
    Events.scrollEvent.register('end', function(to, element) {
      if (to === "home" || to === null) {
        return;
      }
      this.setState({
        showSrollToTop: true
      });
    }.bind(this));
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.onscroll = null;
    Events.scrollEvent.remove('end');
  }

  scrollTo(elementName) {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Eris | Web and Mobile Developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <MainContainer>
          {/* Header and Home */}
          <Element name="home"/>
          <HeaderHomeContainer id="home">
            <HeaderContainer>
              <HeaderSection 
                height="4em"
                onHomeClicked={this.scrollTo.bind(this, 'home')}
                onProjectsClicked={this.scrollTo.bind(this, 'projects')}
                onSkillsClicked={this.scrollTo.bind(this, 'skills')}
                onAboutClicked={this.scrollTo.bind(this, 'about')}
                onContactClicked={this.scrollTo.bind(this, 'contact')}
              />
            </HeaderContainer>
            <ParticleContainer><CustomizedParticles width="100%" height="100vh"/></ParticleContainer>
            <HomeContainer>
              <HomeSection 
                onAndroidClicked={this.scrollTo.bind(this, 'skills_android')}
                oniOSClicked={this.scrollTo.bind(this, 'skills_ios')}
                onWebClicked={this.scrollTo.bind(this, 'skills_web')}
                onBackendClicked={this.scrollTo.bind(this, 'skills_backend')}
                onContactMeClicked={this.scrollTo.bind(this, 'contact')}
              />
            </HomeContainer>
          </HeaderHomeContainer>
          {/* Projects */}
          <Element name="projects"/>
          <ProjectsSection/>
          {/* Skills */}
          <Element name="skills"/>
          <SkillsSection/>
          {/* Quote */}
          <QuotationSection/>
          {/* About */}
          <Element name="about"/>
          <AboutSection/>
          {/* Contact */}
          <Element name="contact"/>
          <ContactSection/>
          {/* Footer */}
          <FooterSection 
            onHomeClicked={this.scrollTo.bind(this, 'home')}
            onProjectsClicked={this.scrollTo.bind(this, 'projects')}
            onSkillsClicked={this.scrollTo.bind(this, 'skills')}
            onAboutClicked={this.scrollTo.bind(this, 'about')}
            onContactClicked={this.scrollTo.bind(this, 'contact')}
          />
          <ScrollTopButtonContainer showSrollToTop={this.state.showSrollToTop}>
            <ScrollTopButton onClick={this.scrollTo.bind(this, 'home')} href="#home"></ScrollTopButton>
          </ScrollTopButtonContainer>
        </MainContainer>
      </div>
    )
  }
}

export default App
