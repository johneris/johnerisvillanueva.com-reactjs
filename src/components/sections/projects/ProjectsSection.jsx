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
        title: 'Zing at Ayala Malls',
        appImageSrc: '/images/projects/ic_zing.png',
        role: 'Role: Team Lead, iOS and Backend Developer',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'Z!ng is Ayala Malls’ mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Jan 2019 - Present',
        features: ['Loyalty and Rewards', 'Indoor Map', 'Cinema Booking', 'Mall Information'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'UnionBank Online',
        appImageSrc: '/images/projects/ic_ubonline.png',
        role: 'Role: Lead iOS Developer',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'I worked on the core features of the app including the Dashboard, Fund Transfer, Bills Payment, Buy Load, and a lot more.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Apr 2017 – Dec 2018',
        features: ['Fund Transfer', 'Bills Payment', 'Buy Load', 'Quick Balance'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'TakeFive Outdoors',
        appImageSrc: '/images/projects/ic_takefive.png',
        role: 'Role: Team Lead, iOS and Backend Developer',
        vendor: 'Freelance',
        description: 'TakeFive Outdoors organize monthly trips to mountains, beach, and anything outdoors. Book for trips using the app.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Oct 2018 – Present',
        features: ['Trips', 'Online Booking', 'Profile Levels', 'Vouchers'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'Figaro Coffee Systems Inc.',
        appImageSrc: '/images/projects/ic_figaro.png',
        role: 'Role: iOS Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'The Figaro Coffee App has a built-in rewards system that provides a give-gifts function to loyal and regular customers.',
        involvementDescription: 'Involvement: from start to production',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['', '', '', ''],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'BG BRIDAL GALLERY',
        appImageSrc: '/images/projects/ic_bridal_gallery.png',
        role: 'Role: iOS Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'With its easy interface, Bridal Gallery is the most innovative wedding planning app in the Philippines today.',
        involvementDescription: 'Involvement: from start to production and maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['', '', '', ''],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'MyPocketDoctor',
        appImageSrc: '/images/projects/ic_mypocketdoctor.png',
        role: 'Role: iOS and Android Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'MyPocketDoctor is a medical advisory app, that provides you with fast access to doctors (telemedicine).',
        involvementDescription: 'Involvement: from start to production and maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['', '', '', ''],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'POS!BLE',
        appImageSrc: '/images/projects/ic_posible.png',
        role: 'Role: Android Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'Using an Android device, the retailers of POS!BLE can transact Bills Payment, Prepaid Load, and a lot more.',
        involvementDescription: 'Involvement: maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['', '', '', ''],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'Old Spice Sales App',
        appImageSrc: '/images/projects/ic_oldspice.png',
        role: 'Role: Android Developer',
        vendor: 'Freelance',
        description: 'This app is used to advertise Old Spice products. It allows the agent to browse the products and play videos of Old Spice.',
        involvementDescription: 'Involvement: design to finish',
        involvementDate: 'Date: 2015',
        features: ['', '', '', ''],
        platforms: [
          { name: 'Android', logoSrc: '/images/ic_android.svg' }
        ]
      },
      {
        title: 'Oral-B Electric Toothbrush Sales App',
        appImageSrc: '/images/projects/ic_oralb.png',
        role: 'Role: Android Developer',
        vendor: 'Freelance',
        description: 'This app is used to advertise the electric toothbrush of Oral-B. The app is a manual vs electric brushing game.',
        involvementDescription: 'Involvement: design to finish',
        involvementDate: 'Date: 2015',
        features: ['', '', '', ''],
        platforms: [
          { name: 'Android', logoSrc: '/images/ic_android.svg' }
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
            appImageSrc={project.appImageSrc}
            role={project.role}
            vendor={project.vendor}
            description={project.description}
            involvementDescription={project.involvementDescription}
            involvementDate={project.involvementDate}
            features={project.features}
            platforms={project.platforms}
          />
        </Wrapper>
      </Container>
    )
  }
}

export default ProjectsSection
