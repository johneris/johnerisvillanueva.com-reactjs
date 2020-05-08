import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { device } from '../../../helpers/MediaQueryHelper';

import Skill from '../../ui_library/skill/Skill';

const Container = styled.section`
  width: 100%;
  background-color: #1B262C;
`;

const Wrapper = styled.div`
  width: 80%;

  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.lowerThanLaptop} {
    width: 90%;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;

  @media ${device.lowerThanLaptopL} {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  }
`;

const TitleLabel = styled.h2`
  margin-bottom: 4rem;
  font-size: 2em;
  color: #CCD5DB;
`;

export class SkillsSection extends Component {
  render() {
    return (
      <Container id="skills">
        <Wrapper>
          <TitleLabel>Tech Stack</TitleLabel>
          <SkillsContainer>
            <Element name="skills_android" id="skills-android">
              <Skill 
                name="Android" logoSrc="/images/ic_android.svg"
                level="Intermediate"
                title="Native Kotlin/Java" 
                details={["IDE: Android Studio", 
                "Tools/Libraries: Dagger, Retrofit, RxJava, Gson",
                "Architecture - MVP, MVVM, Clean Architecture",
                "Others: Play Store Deployment, Firebase"]}
              />
            </Element>
            <Element name="skills_ios" id="skills-ios">
              <Skill 
                name="iOS" logoSrc="/images/ic_ios.svg"
                level="Advanced"
                title="Native Objective-C/Swift" 
                details={["IDE: XCode", 
                "Tools/Libraries: Cocoapods, Carthage, XCodeGen, IGListKit, RxSwift, Fastlane",
                "Architecture - MVP, MVVM, uFeatures, Coordinator",
                "Others: App Store Deployment, Firebase, Buddybuild, TestFlight"]}
              />
            </Element>
            <Element name="skills_web" id="skills-web">
              <Skill 
                name="Web" logoSrc="/images/ic_web.svg"
                level="Beginner"
                title="React.js, Next.js, Wordpress" 
                details={["Code Editor: Visual Studio Code", 
                "Tools/Libraries: Yarn, npm, Storybook, Moment.js, particles.js",
                "Others: Static Site Deployment to GitHub Pages, Digital Ocean Deployment"]}
              />
            </Element>
            <Element name="skills_backend" id="skills-backend">
              <Skill 
                name="Backend" logoSrc="/images/ic_backend.svg"
                level="Intermediate"
                title="Spring Boot Kotlin/Java, Laravel" 
                details={["IDE/Code Editor: IntelliJ IDEA, Visual Studio Code", 
                "Tools/Libraries: Gson, Feign, Laravel Nova, Laravel Socialite, Laravel Passport",
                "Architecture - MVC, Clean Architecture, Microservices",
                "Others: LEMP stack Deployment in Digital Ocean, Postman, Swagger"]}
              />
            </Element>
          </SkillsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default SkillsSection
