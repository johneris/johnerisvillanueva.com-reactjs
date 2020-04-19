import React, { Component } from 'react';
import styled from 'styled-components';

import Project from '../../ui_library/Project';

import '../../../App.css';

const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const NavigationContainer = styled.div`

`;

const ProjectCountLabel = styled.p`
  color: #ADC6D5;
  font-size: 1.5em;
`;

export class ProjectsSection extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <HeaderContainer>
            <ProjectCountLabel>1 of 10 projects</ProjectCountLabel>
            <NavigationContainer>
              <h1>Hello</h1>
            </NavigationContainer>
          </HeaderContainer>
          <Project/>
        </Wrapper>
      </Container>
    )
  }
}

export default ProjectsSection
