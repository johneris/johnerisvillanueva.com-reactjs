import React, { Component } from 'react';
import styled from 'styled-components';
import * as moment from "moment/moment.js";

import { device } from '../../../helpers/MediaQueryHelper';

import Hobby from '../../ui_library/hobby/Hobby';

const Container = styled.section`
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
    display: flex;
    flex-direction: column;
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

  display: flex;
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
    let now = moment();
    let startDate = moment([2015, 4, 1]);

    let years = now.diff(startDate, 'year');
    startDate.add(years, 'years');

    let months = now.diff(startDate, 'months');
    startDate.add(months, 'months');

    let days = now.diff(startDate, 'days');

    let yearLabelSubstring = years > 1 ? 'EARS' : 'EAR'
    let monthLabelSubstring = months > 1 ? 'ONTHS' : 'ONTH'
    let dayLabelSubstring = days > 1 ? 'AYS' : 'AY'

    return (
      <Container id="about">
        <Wrapper>
          <WhiteVerticalBar/>
          <ColoredVerticalBar/>
          <WhiteVerticalBar/>
          <ExperienceContainer>
            { years > 0 &&
              <YearMonthDayLabel><span style={{color: '#23A155'}}>{years}Y</span>{yearLabelSubstring}</YearMonthDayLabel>
            }
            { months > 0 &&
              <YearMonthDayLabel><span style={{color: '#23A155'}}>{months}M</span>{monthLabelSubstring}</YearMonthDayLabel>
            }
            { days > 0 &&
              <YearMonthDayLabel><span style={{color: '#23A155'}}>{days}D</span>{dayLabelSubstring}</YearMonthDayLabel>
            }
            <ExperienceInfo>in the professional software development industry</ExperienceInfo>
          </ExperienceContainer>
          <WhiteVerticalBar/>
          <InterestsContainer>
            <InterestHeader>My hobbies and interests aside from<br/>software development</InterestHeader>
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
