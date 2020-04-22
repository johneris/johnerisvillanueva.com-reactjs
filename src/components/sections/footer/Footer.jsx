import React, { Component } from 'react'
import styled from 'styled-components';

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

const SectionButton = styled.button`
  margin-top: 1em;
  font-size: 1em;
  color: #E1E2E7;
  background-color: transparent;
  text-decoration: underline;
  text-transform: lowercase;

  :focus {
    outline: none;
  }
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <InfoContainer>
            <LogoWebsiteContainer>
              <LogoImage src="/images/ic_logo.svg"/>
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
            <SectionButton onClick={this.props.onHomeClicked}>Home</SectionButton>
            <SectionButton onClick={this.props.onProjectsClicked}>Projects</SectionButton>
            <SectionButton onClick={this.props.onSkillsClicked}>Skills</SectionButton>
            <SectionButton onClick={this.props.onAboutClicked}>About</SectionButton>
            <SectionButton onClick={this.props.onContactClicked}>Contact</SectionButton>
          </SectionsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Footer
