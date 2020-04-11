import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../../App.css';
import ic_logo from '../../../images/ic_logo.svg';

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
  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideContainer = styled.div`
  width: 150px;
`;

const NavListContainer = styled.div`
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavListItem = styled.li`
`;

const NavListItemLink = styled.a`
  padding: 4px 8px;
  margin: 8px;
  color: #CCD5DB;
  font-size: 1.75em;
  text-transform: lowercase;

  :hover {
    background-color: #22A055;
    border-radius: 4px;
    color: white;
  }
`;

export class Header extends Component {
  render() {
    return (
      <Container height={this.props.height}>
        <Wrapper>
          <SideContainer><img src={ic_logo} alt="logo"/></SideContainer>
          <NavListContainer>
            <NavList>
              <NavListItem><NavListItemLink href="#">Home</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">Projects</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">About</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">Contact</NavListItemLink></NavListItem>
            </NavList>
          </NavListContainer>
          <SideContainer/>
        </Wrapper>
      </Container>
    )
  }
}

Header.propTypes = {
  height: PropTypes.number
};

export default Header
