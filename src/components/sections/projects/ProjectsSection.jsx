import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import Project from '../../ui_library/project/Project';
import NavIconButton from '../../ui_library/nav_icon_button/NavIconButton';

const Container = styled.section`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
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
        description: 'Zing is Ayala Malls’ mobile app and website that is meant to maximize the malling experience of its customers. With Zing, users can get free WiFi in all Ayala Malls, book movie tickets instantly, earn Zing points and redeem them as vouchers, find and navigate to shops and restaurants, and get updates on exclusive sales and promos.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Jan 2019 - May 2020',
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
        description: 'UnionBank Online allows customers to bank securely whenever and wherever they need. With the app, users can easily manage accounts, cards, transfer funds, pay bills, buy load, split bills, request for payment, and a lot more.\n\nAwards:\n- 2018 Best Retail Mobile Banking Experience by The Asset Magazine\n- 2018 Online Banking Initiative of the Year by Asian Banking and Finance\n- 2018 Best Technology Implementation - Front End by Retail Banker International (Highly Commended).',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Apr 2017 – Dec 2018',
        features: ['Fund Transfer', 'Bills Payment', 'Buy Load', 'Request Payment'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web', logoSrc: '/images/ic_web.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'Luxe Lips',
        appImageSrc: '/images/projects/ic_luxelips.png',
        role: 'Role: Team Lead, Flutter (iOS, Android) and Backend Developer',
        vendor: 'Freelance Client: Luxe Lips',
        description: 'Luxe Lips is a medical app for non-invasive aesthetic professionals. It also lets clients access consultations, face maps, and aesthetic tools and bookings via their mobile phones. Luxe Lips is also a patient management software designed for private cosmetic clinics.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Aug 2020 – Present',
        features: ['Cosmetic Clinic', 'Prescriptions', 'Consulations', 'Face Map'],
        platforms: [
          { name: 'iOS', logoSrc: '/images/ic_ios.svg' },
          { name: 'Android', logoSrc: '/images/ic_android.svg' },
          { name: 'Web Admin Portal', logoSrc: '/images/ic_web.svg' },
          { name: 'Backend', logoSrc: '/images/ic_backend.svg' }
        ]
      },
      {
        title: 'TakeFive Outdoors',
        appImageSrc: '/images/projects/ic_takefive.png',
        role: 'Role: Team Lead, iOS and Backend Developer',
        vendor: 'Freelance Client: Takefive Outdoors',
        description: 'TakeFive Outdoors transformed into a digital enterprise by providing customers access to easy online booking of trips. With the app, users can browse the avaialable schedule of trips and readily know how many seats are still available. TakeFive helps local communities benefit from tourism by giving authentic experience to its clients. They organize monthly trips to different mountains, falls, beach, cave and anything related to the outdoors.',
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
        description: 'Figaro prides itself in serving coffee made from freshly-roasted beans sourced from all over the Philippines. The Figaro Coffee App has a built-in rewards system that provides a give-gifts function to loyal customers.',
        involvementDescription: 'Involvement: from start to production',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Loyalty and Rewards', 'Online Ordering', 'Store Locations'],
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
        description: 'With its user friendly interface, Bridal Gallery is the most innovative wedding planning app in the Philippines today. Reliable wedding planning services in Philippines is just so easy to find. Users can create an idea gallery by finding great planning tips, global themes, and the finest professionals.',
        involvementDescription: 'Involvement: from start to production and maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Wedding Tips', 'Wedding Planning', 'Wedding Professionals'],
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
        description: 'MyPocketDoctor is a medical advisory app that provides fast access to doctors (telemedicine). The doctors are all fully licensed European doctors. There are many cases where fast medical advise is needed such as when traveling, communicating with staff in foreign clinics, finding out if there is a need to go to the emergency ward or go to see a doctor. Clients can avoid the waiting time and travel involved.',
        involvementDescription: 'Involvement: from start to production and maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Medical Profile', 'Online Consultation', 'Online Payment'],
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
        description: 'POS!BLE is a network that connects established brands and service providers. Using an Android device, the retailers of POS!BLE can transact Bills Payment (through Bayad Center), Prepaid Load, Online Pins, Inventory Management, and a lot more.',
        involvementDescription: 'Involvement: maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Bills Payment', 'Prepaid Load', 'Online Pins'],
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
        vendor: 'Freelance Client: MASA Inc.',
        description: 'This app runs on a tablet and is used to advertise Old Spice products. The app allows the agent to browse the products and play commercial videos of Old Spice.',
        involvementDescription: 'Involvement: design to finish',
        involvementDate: 'Date: 2015',
        features: ['Products Gallery', 'Commercial Videos'],
        platforms: [
          { name: 'Android', logoSrc: '/images/ic_android.svg' }
        ]
      },
      {
        title: 'Oral-B Electric Toothbrush Sales App',
        appImageSrc: '/images/projects/ic_oralb.png',
        role: 'Role: Android Developer',
        vendor: 'Freelance Client: MASA Inc.',
        description: 'This app runs on a tablet and is used to advertise the electric toothbrush of Oral-B. The app is a brushing game comparing the manual and electric toothbrush.',
        involvementDescription: 'Involvement: design to finish',
        involvementDate: 'Date: 2015',
        features: ['Products Gallery', 'Brushing Game'],
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
