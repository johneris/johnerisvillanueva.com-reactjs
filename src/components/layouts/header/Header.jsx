import React, { Component } from 'react';
import styled from 'styled-components';

import '../../../App.css';
import ic_logo from '../../../images/ic_logo.svg';

const Container = styled.nav`
  background-color: #1F2029;
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
  color: rgb(225, 226, 231, 0.6);
  font-size: 1.2em;

  :hover {
    background-color: #22A055;
    border-radius: 4px;
    color: white;
  }
`;

export class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <img src={ic_logo} alt="logo"/>
          <NavListContainer>
            <NavList>
              <NavListItem><NavListItemLink href="#">Home</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">Projects</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">About</NavListItemLink></NavListItem>
              <NavListItem><NavListItemLink href="#">Contact</NavListItemLink></NavListItem>
            </NavList>
          </NavListContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Header
