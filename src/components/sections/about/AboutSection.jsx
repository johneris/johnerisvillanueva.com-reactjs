import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import Hobby from '../../ui_library/hobby/Hobby';

const Container = styled.div`
  width: 100%;

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

  @media ${device.lowerThanLaptopL} {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

const ExperienceContainer = styled.div`
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 1em;

  border-style: solid;
  border-color: #1B262C;
  border-width: 1px;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.lowerThanLaptopL} {
    margin-top: 2rem;
  }
`;

const InterestsContainer = styled.div`
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.lowerThanTablet} {
    padding: 2rem 1rem;
  }
`;

const HobbiesContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1.5rem;

  @media ${device.lowerThanTablet} {
    grid-column-gap: 1rem;
  }
`;

const VerticalBar = styled.div`
  width: 0.9rem;
  height: 100%;

  @media ${device.lowerThanLaptopL} {
    display: none;
  }
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

  @media ${device.lowerThanTablet} {
    font-size: 3em;
  }
`;

const ExperienceInfo = styled.p`
  margin-top: 1.4em;

  color: #1B262C;
  font-size: 1.5em;

  @media ${device.lowerThanTablet} {
    font-size: 1em;
  }
`;

const InterestHeader = styled.h2`
  color: #E1E2E7;
  font-size: 1.5em;
  text-align: center;

  @media ${device.lowerThanTablet} {
    font-size: 1em;
  }
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
