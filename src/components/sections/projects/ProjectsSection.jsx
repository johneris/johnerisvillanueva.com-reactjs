import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import Project from '../../ui_library/project/Project';
import NavIconButton from '../../ui_library/nav_icon_button/NavIconButton';

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

  @media ${device.lowerThanMobileM} {
    font-size: 1.2em;
  }
`;

const NavIconWrapper = styled.div`
  margin-left: 1rem;
`;

export class ProjectsSection extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  state = {
    projects: [
      {
        title: 'Project A',
        role: 'Role: Team Captain, iOS Developer, Backend Developer',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'Z!ng is Ayala Malls',
        involvement: 'Involvement: January 2019 - May 2020',
        features: ['Loyalty and Rewards', 'Indoor Map', 'Cinema Booking', 'Mall Information'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'Project B',
        role: 'Role: Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'Z!ng is Ayala Malls',
        involvement: 'Involvement: January 2019 - May 2020',
        features: ['Loyalty and Rewards', 'Indoor Map'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      }
    ],
    selectedIndex: 0
  }

  next() {
    if (this.state.selectedIndex >= this.state.projects.length - 1) {
      return
    }
    let newIndex = this.state.selectedIndex + 1;
    this.setState({
      selectedIndex: newIndex
    });
  }

  previous() {
    if (this.state.selectedIndex <= 0) {
      return
    }
    let newIndex = this.state.selectedIndex - 1;
    this.setState({
      selectedIndex: newIndex
    });
  }

  render() {
    let project = this.state.projects[this.state.selectedIndex];
    return (
      <Container>
        <Wrapper>
          <HeaderContainer>
            <ProjectCountLabel>{this.state.selectedIndex + 1} of {this.state.projects.length} projects</ProjectCountLabel>
            <NavigationContainer>
              <NavIconWrapper><NavIconButton name="previous project" iconSrc="/images/ic_previous.svg" onClick={this.previous}/></NavIconWrapper>
              <NavIconWrapper><NavIconButton name="next project" iconSrc="/images/ic_next.svg" onClick={this.next}/></NavIconWrapper>
            </NavigationContainer>
          </HeaderContainer>
          <Project title={project.title}
            role={project.role}
            vendor={project.vendor}
            description={project.description}
            involvement={project.involvement}
            features={project.features}
            platforms={project.platforms}
          />
        </Wrapper>
      </Container>
    )
  }
}

export default ProjectsSection
