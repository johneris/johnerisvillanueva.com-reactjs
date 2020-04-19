import React, { Component } from 'react';
import styled from 'styled-components';

import '../../App.css'

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
  background-color: green;
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
            <h1>Hello</h1>
          </MainFeaturesContainer>
        </DetailsContainer>
      </Container>
    )
  }
}

export default Project
