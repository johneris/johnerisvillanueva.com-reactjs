import React, { Component } from 'react';
import styled from 'styled-components';

import Hobby from '../../ui_library/Hobby';

const Container = styled.div`
  width: 100%;
  height: 25em;

  background-color: #1B262C;
`;

const Wrapper = styled.div`
  width: calc(80% + (0.9rem * 2));
  height: 100%;
  
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: repeat(3, 0.9rem) 25.5rem 0.9rem auto 0.9rem;
  grid-template-rows: 1fr;
`;

const ExperienceContainer = styled.div`
  padding-left: 1em;

  border-style: solid;
  border-color: #1B262C;
  border-width: 1px;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HobbiesContainer = styled.div`
  margin-top: 2em;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1.5em;
`;

const VerticalBar = styled.div`
  width: 0.9rem;
  height: 100%;
`;

const WhiteVerticalBar = styled(VerticalBar)`
  background-color: #FFFFFF;
`;

const ColoredVerticalBar = styled(VerticalBar)`
  background-color: #1B262C;
`;

const YearMonthDayLabel = styled.p`
  color: #1B262C;
  font-size: 4em;
`;

const ExperienceInfo = styled.p`
  margin-top: 1.4em;

  color: #1B262C;
  font-size: 1.5em;
`;

const InterestHeader = styled.h2`
  color: #E1E2E7;
  font-size: 1.5em;
  text-align: center;
`;

export class AboutSection extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <WhiteVerticalBar/>
          <ColoredVerticalBar/>
          <WhiteVerticalBar/>
          <ExperienceContainer>
            <YearMonthDayLabel><span style={{color: '#23A155'}}>4Y</span>EARS</YearMonthDayLabel>
            <YearMonthDayLabel><span style={{color: '#23A155'}}>7M</span>ONTHS</YearMonthDayLabel>
            <YearMonthDayLabel><span style={{color: '#23A155'}}>5D</span>AYS</YearMonthDayLabel>
            <ExperienceInfo>in the professional software development industry</ExperienceInfo>
          </ExperienceContainer>
          <WhiteVerticalBar/>
          <InterestsContainer>
            <InterestHeader>My hobbies and interests beside<br/>software development</InterestHeader>
            <HobbiesContainer>
              <Hobby name="Run" logoSrc="/images/ic_run.svg"/>
              <Hobby name="Hike" logoSrc="/images/ic_hike.svg"/>
              <Hobby name="Swim" logoSrc="/images/ic_swim.svg"/>
            </HobbiesContainer>
          </InterestsContainer>
          <WhiteVerticalBar/>
        </Wrapper>
      </Container>
    )
  }
}

export default AboutSection
