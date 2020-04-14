import React, { Component } from 'react'
import styled from 'styled-components'

import Skill from '../../ui_library/Skill';

import ic_android from '../../../images/ic_android.svg';

const Container = styled.div`
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
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
`;

const TitleLabel = styled.h2`
  margin-bottom: 4rem;
  font-size: 2em;
  color: #CCD5DB;
`;

export class SkillsSection extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <TitleLabel>Tech Stack</TitleLabel>
          <SkillsContainer>
            <Skill 
              name="Android" logoSrc={ic_android}
              title="Native Java/Kotlin"
              details={["IDE: Android Studio", 
              "Libraries Used: Dagger, Retrofit, RxJava, Gson",
              "Architecture - MVP, MVVM, Clean Architecture",
              "Others: Play Store Deployment"]}
            />
            <Skill 
              name="Android" logoSrc={ic_android}
              title="Native Java/Kotlin"
              details={["IDE: Android Studio", 
              "Libraries Used: Dagger, Retrofit, RxJava, Gson",
              "Architecture - MVP, MVVM, Clean Architecture",
              "Others: Play Store Deployment"]}
            />
            <Skill 
              name="Android" logoSrc={ic_android}
              title="Native Java/Kotlin"
              details={["IDE: Android Studio", 
              "Libraries Used: Dagger, Retrofit, RxJava, Gson",
              "Architecture - MVP, MVVM, Clean Architecture",
              "Others: Play Store Deployment"]}
            />
            <Skill 
              name="Android" logoSrc={ic_android}
              title="Native Java/Kotlin"
              details={["IDE: Android Studio", 
              "Libraries Used: Dagger, Retrofit, RxJava, Gson",
              "Architecture - MVP, MVVM, Clean Architecture",
              "Others: Play Store Deployment"]}
            />
          </SkillsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default SkillsSection
