import React, { Component } from 'react';
import styled from 'styled-components';

import Project from '../../ui_library/Project';
import NavIconButton from '../../ui_library/NavIconButton';

import '../../../App.css';
import ic_previous from '../../../images/ic_previous.svg';
import ic_next from '../../../images/ic_next.svg';

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
  display: flex;
  flex-direction: row;
`;

const ProjectCountLabel = styled.p`
  color: #ADC6D5;
  font-size: 1.5em;
`;

const NavIconWrapper = styled.div`
  margin-left: 1rem;
`;

export class ProjectsSection extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <HeaderContainer>
            <ProjectCountLabel>1 of 10 projects</ProjectCountLabel>
            <NavigationContainer>
              <NavIconWrapper><NavIconButton name="previous project" iconSrc={ic_previous}/></NavIconWrapper>
              <NavIconWrapper><NavIconButton name="next project" iconSrc={ic_next}/></NavIconWrapper>
            </NavigationContainer>
          </HeaderContainer>
          <Project/>
        </Wrapper>
      </Container>
    )
  }
}

export default ProjectsSection