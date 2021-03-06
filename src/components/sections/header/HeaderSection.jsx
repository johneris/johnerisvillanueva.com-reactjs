import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

const Container = styled.nav`
  height: ${props => {
    return props.height;
  }};

  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 0.6em;
  padding-bottom: 0.6em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSideContainer = styled.div`
  width: 10em;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightSideContainer = styled.div`
  width: 10em;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  visibility: hidden;

  @media ${device.lowerThanLaptop} { 
    visibility: visible;
  }
`;

const LogoImage = styled.img`
  height: 1.75em;
  margin-top: 0.4em;

  @media ${device.lowerThanLaptop} { 
    margin-top: 0;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  padding: 0;
  
  display: ${ props => {
    return props.isOpen ? "none" : "block" 
  }};
`;

const CloseButton = styled.button`
  background-color: transparent;
  padding: 0;

  position: absolute;
  display: ${ props => {
    return props.isOpen ? "block" : "none" 
  }};
`;

const ImageIcon = styled.img`
  height: 3em;
`;

const NavListContainer = styled.div`
  @media ${device.lowerThanLaptop} { 
    width: 100%;
    height: 100vh;
    
    background-color: #1B262C;
    opacity: 0.95;

    position: absolute;
    top: 0;
    left: 0;

    display: ${ props => {
      return props.isOpen ? "flex" : "none" 
    }};
    align-items: center;
    justify-content: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding-inline-start: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.lowerThanLaptop} { 
    height: 100%;
    flex-direction: column;
  } 
`;

const NavListItem = styled.li`
  @media ${device.lowerThanLaptop} {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const NavListItemLink = styled.a`
  padding: 0.2em 0.4em;
  margin: 0.4em;
  color: #CCD5DB;
  background-color: transparent;
  font-size: 1.5rem;
  text-transform: lowercase;

  :hover {
    background-color: #22A055;
    border-radius: 4px;
    color: white;
  }
`;

export class HeaderSection extends Component {

  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  state = {
    isResponsiveNavOpen: false
  }

  openNav() {
    this.setState({
      isResponsiveNavOpen: true
    });
  }

  closeNav() {
    this.setState({
      isResponsiveNavOpen: false
    });
  }

  onNavClicked(navItem) {
    this.setState({
      isResponsiveNavOpen: false
    });
    switch (navItem) {
      case "home":
        this.props.onHomeClicked()
        break;
      case "projects":
        this.props.onProjectsClicked()
        break;
      case "skills":
        this.props.onSkillsClicked()
        break;
      case "about":
        this.props.onAboutClicked()
        break;
      case "contact":
        this.props.onContactClicked()
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Container height={this.props.height}>
        <Wrapper>
          <LeftSideContainer><LogoImage src="/images/ic_logo.svg" alt="logo"/></LeftSideContainer>
          <NavListContainer isOpen={this.state.isResponsiveNavOpen}>
            <NavList>
              <NavListItem><NavListItemLink onClick={this.onNavClicked.bind(this, 'home')}>Home</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink onClick={this.onNavClicked.bind(this, 'projects')}>Projects</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink onClick={this.onNavClicked.bind(this, 'skills')}>Skills</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink onClick={this.onNavClicked.bind(this, 'about')}>About</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink onClick={this.onNavClicked.bind(this, 'contact')}>Contact</NavListItemLink></NavListItem>
            </NavList>
          </NavListContainer>
          <RightSideContainer>
            <MenuButton onClick={this.openNav} isOpen={this.state.isResponsiveNavOpen}>
              <ImageIcon src="/images/ic_menu_24px.svg" alt="menu" />
            </MenuButton>
            <CloseButton onClick={this.closeNav} isOpen={this.state.isResponsiveNavOpen}>
              <ImageIcon src="/images/ic_close_24px.svg" alt="close menu" />
            </CloseButton>
          </RightSideContainer>
        </Wrapper>
      </Container>
    )
  }
}

HeaderSection.propTypes = {
  height: PropTypes.string
};

export default HeaderSection
