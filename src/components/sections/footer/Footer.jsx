import React, { Component } from 'react'
import styled from 'styled-components';

import ic_logo from '../../../images/ic_logo.svg';

const Container = styled.footer`
  width: 100%;

  background-color: #1B262C;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5.3em;
  padding-bottom: 5.3em;

  display: flex;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LogoWebsiteContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

const InfoSectionContainer = styled.div`
  margin-top: 2em;
`;

const LogoImage = styled.img`
  height: 1.5em;
  margin-right: 1em;
`;

const Info = styled.p`
  font-size: 1em;
  color: #E1E2E7;
`;

const SectionLabel = styled.p`
  font-size: 1em;
  color: #E1E2E7;
`;

const SectionLink = styled.a`
  margin-top: 1em;
  font-size: 1em;
  color: #E1E2E7;
  text-decoration: underline;
  text-transform: lowercase;
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <InfoContainer>
            <LogoWebsiteContainer>
              <LogoImage src={ic_logo}/>
              <Info>johnerisvillanueva.com</Info>
            </LogoWebsiteContainer>
            <InfoSectionContainer>
              <Info>This is my personal website that shows my portfolio.</Info>
              <Info>It is created using React.js. The code for this website is available at github.com.</Info>
            </InfoSectionContainer>
            <InfoSectionContainer>
              <Info>For my blog about software development, visit https://pinoydev.com.</Info>
              <Info>For my blog about adventure and recreation, visit https://weekendersph.com.</Info>
            </InfoSectionContainer>
            <InfoSectionContainer>
              <Info>&copy; John Eris Villanueva 2020</Info>
            </InfoSectionContainer>
          </InfoContainer>
          <SectionsContainer>
            <SectionLabel>Section</SectionLabel>
            <SectionLink href="#">Home</SectionLink>
            <SectionLink href="#">Projects</SectionLink>
            <SectionLink href="#">Skills</SectionLink>
            <SectionLink href="#">About</SectionLink>
            <SectionLink href="#">Contact</SectionLink>
          </SectionsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Footer
