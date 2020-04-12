import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import '../../../App.css';
import ic_logo from '../../../images/ic_logo.svg';
import ic_menu from '../../../images/ic_menu_24px.svg';
import ic_close from '../../../images/ic_close_24px.svg';

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

  @media ${device.lowerThanLaptopL} { 
    visibility: visible;
  }
`;

const LogoImage = styled.img`
  height: 1.75em;
  margin-top: 0.4em;

  @media ${device.lowerThanLaptopL} { 
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
  @media ${device.lowerThanLaptopL} { 
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

  @media ${device.lowerThanLaptopL} { 
    height: 100%;
    flex-direction: column;
  } 
`;

const NavListItem = styled.li`
  @media ${device.lowerThanLaptopL} {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const NavListItemLink = styled.a`
  padding: 0.2em 0.4em;
  margin: 0.4em;
  color: #CCD5DB;
  font-size: 1.5em;
  text-transform: lowercase;

  :hover {
    background-color: #22A055;
    border-radius: 4px;
    color: white;
  }
`;

export class Header extends Component {

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

  render() {
    return (
      <Container height={this.props.height}>
        <Wrapper>
          <LeftSideContainer><LogoImage src={ic_logo} alt="logo"/></LeftSideContainer>
          <NavListContainer isOpen={this.state.isResponsiveNavOpen}>
            <NavList>
              <NavListItem><NavListItemLink href="#">Home</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">Projects</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">About</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">Contact</NavListItemLink></NavListItem>
            </NavList>
          </NavListContainer>
          <RightSideContainer>
            <MenuButton onClick={this.openNav} isOpen={this.state.isResponsiveNavOpen}>
              <ImageIcon src={ic_menu} alt="menu" />
            </MenuButton>
            <CloseButton onClick={this.closeNav} isOpen={this.state.isResponsiveNavOpen}>
              <ImageIcon src={ic_close} alt="close menu" />
            </CloseButton>
          </RightSideContainer>
        </Wrapper>
      </Container>
    )
  }
}

Header.propTypes = {
  height: PropTypes.number
};

export default Header
