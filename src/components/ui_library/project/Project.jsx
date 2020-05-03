import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import ProjectFeature from '../project_feature/ProjectFeature';
import ProjectPlatform from '../project_platform/ProjectPlatform';

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const DetailsContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  grid-column-gap: 15%;

  @media ${device.lowerThanLaptopL} {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${device.lowerThanMobileL} {
    /* background-color: gray; */
  }
`;

const InfoContainer = styled.div`
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${device.lowerThanLaptopL} {
    flex-direction: row;
    margin-bottom: 1rem;
  }

  @media ${device.lowerThanLaptop} {
    flex-wrap: wrap;
  }
`;

const FeatureItem = styled.li`
  margin-bottom: 1.5rem;

  @media ${device.lowerThanLaptopL} {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  @media ${device.lowerThanTablet} {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const PlatformList = styled.ul`
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PlatformItem = styled.li`
  margin-right: 1.5rem;
  margin-top: 1rem;
`;

const RoleContainer = styled.div`
  padding-left: 0.8rem;

  border-left-style: solid;
  border-width: 0.25rem;
  border-color: #24A255;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h1`
  color: #1B262C;
  font-size: 3em;

  @media ${device.lowerThanLaptop} {
    font-size: 2.5em;
  }

  @media ${device.lowerThanMobileM} {
    font-size: 2em;
  }
`;

const RoleLabel = styled.h2`
  color: #4E5F69;
  font-size: 1.5em;

  @media ${device.lowerThanLaptop} {
    font-size: 1.2em;
  }

  @media ${device.lowerThanMobileM} {
    font-size: 1em;
  }
`;

const DevelopedLabel = styled.h2`
  margin-top: 0.6em;

  color: #A7ADB1;
  font-size: 1.5em;

  @media ${device.lowerThanLaptop} {
    font-size: 1.2em;
  }

  @media ${device.lowerThanMobileM} {
    font-size: 1em;
  }
`;

const ProjectDescription = styled.p`
  margin-top: 1.3rem;

  color: #4E5F69;
  font-size: 1.2em;

  @media ${device.lowerThanLaptop} {
    font-size: 1em;
  }

  @media ${device.lowerThanMobileM} {
    font-size: 0.8em;
  }
`;

const InvolvementDescription = styled.p`
  margin-top: 2rem;
  
  color: #A7ADB1;
  font-size: 1.2em;

  @media ${device.lowerThanLaptop} {
    font-size: 1em;
  }
  
  @media ${device.lowerThanMobileM} {
    font-size: 0.8em;
  }
`;

export class Project extends Component {
  render() {
    return (
      <Container>
        <ProjectTitle>Mall’s App and Website</ProjectTitle>
        <DetailsContainer>
          <InfoContainer>
            <RoleContainer>
              <RoleLabel>Role: Team Captain, iOS Developer, Backend Developer</RoleLabel>
              <DevelopedLabel>Developed at White Cloak Technologies, Inc.</DevelopedLabel>
            </RoleContainer>
            <PlatformList>
              <PlatformItem><ProjectPlatform name="iOS" logoSrc="/images/ic_ios.svg"/></PlatformItem>
              <PlatformItem><ProjectPlatform name="Android" logoSrc="/images/ic_android.svg"/></PlatformItem>
              <PlatformItem><ProjectPlatform name="Web" logoSrc="/images/ic_web.svg"/></PlatformItem>
              <PlatformItem><ProjectPlatform name="Backend" logoSrc="/images/ic_backend.svg"/></PlatformItem>
            </PlatformList>
            <ProjectDescription>
              Z!ng is Ayala Malls’ mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards. Z!ng is Ayala Malls’ mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards.
            </ProjectDescription>
            <InvolvementDescription>Involvement: January 2019 - May 2020</InvolvementDescription>
          </InfoContainer>
          <FeatureList>
            <FeatureItem><ProjectFeature name="Loyalty and Rewards"/></FeatureItem>
            <FeatureItem><ProjectFeature name="Indoor Map"/></FeatureItem>
            <FeatureItem><ProjectFeature name="Cinema Booking"/></FeatureItem>
            <FeatureItem><ProjectFeature name="Mall Information"/></FeatureItem>
          </FeatureList>
        </DetailsContainer>
      </Container>
    )
  }
}

export default Project
