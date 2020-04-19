import React, { Component } from 'react';
import styled from 'styled-components';

import '../../App.css';
import ProjectFeature from '../ui_library/ProjectFeature';

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const DetailsContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
`;

const InfoContainer = styled.div`
`;

const MainFeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 1.5rem;
`;

const RoleContainer = styled.div`
  height: 5rem;
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
`;

const RoleLabel = styled.h2`
  color: #4E5F69;
  font-size: 1.5em;
`;

const DevelopedLabel = styled.h2`
  margin-top: 0.6em;

  color: #A7ADB1;
  font-size: 1.5em;
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
          </InfoContainer>
          <MainFeaturesContainer>
            <ProjectFeature name="Loyalty and Rewards"/>
            <ProjectFeature name="Indoor Map"/>
            <ProjectFeature name="Cinema Booking"/>
            <ProjectFeature name="Mall Information"/>
          </MainFeaturesContainer>
        </DetailsContainer>
      </Container>
    )
  }
}

export default Project
