import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const AppRoleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AppImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const RoleContainer = styled.div`
  padding-left: 1rem;

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
  margin-top: 0.2em;

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
  white-space: pre-wrap;

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

const InvolvementDate = styled.p`
  margin-top: 0.4rem;
  
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
    const { 
      title, appImageSrc, role, vendor, description, 
      involvementDescription, involvementDate, features, platforms
    } = this.props;
    return (
      <Container>
        <ProjectTitle>{title}</ProjectTitle>
        <DetailsContainer>
          <InfoContainer>
            <AppRoleContainer>
              <AppImage src={appImageSrc}/>
              <RoleContainer>
                <RoleLabel>{role}</RoleLabel>
                <DevelopedLabel>{vendor}</DevelopedLabel>
              </RoleContainer>
            </AppRoleContainer>
            <PlatformList>
              { platforms.map(platform => {  
                return <PlatformItem key={platform.name}>
                  <ProjectPlatform name={platform.name} logoSrc={platform.logoSrc}/>
                </PlatformItem>
              }) }
            </PlatformList>
            <ProjectDescription>{description}</ProjectDescription>
            <InvolvementDescription>{involvementDescription}</InvolvementDescription>
            <InvolvementDate>{involvementDate}</InvolvementDate>
          </InfoContainer>
          <FeatureList>
            { features.map(feature => {
              return <FeatureItem key={feature}>
                <ProjectFeature name={feature}/>
              </FeatureItem>
            }) }
          </FeatureList>
        </DetailsContainer>
      </Container>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  appImageSrc: PropTypes.string,
  role: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  involvementDescription: PropTypes.string.isRequired,
  involvementDate: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    logoSrc: PropTypes.string
  })).isRequired
};

export default Project
