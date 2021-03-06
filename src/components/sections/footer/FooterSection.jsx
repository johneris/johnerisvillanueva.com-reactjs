import React, { Component } from 'react'
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

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
  flex-direction: row;
  justify-content: space-between;

  @media ${device.lowerThanLaptop} {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  margin-right: 4rem;
  display: flex;
  flex-direction: column;

  @media ${device.lowerThanLaptop} {
    margin-right: 0;
  }
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: nowrap;

  @media ${device.lowerThanLaptop} {
    margin-top: 4rem;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const LogoWebsiteContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: flex-start;

  @media ${device.lowerThanLaptop} {
    flex-flow: column;
  }
`;

const InfoSectionContainer = styled.div`
  margin-top: 2em;
`;

const LogoImage = styled.img`
  height: 1.5em;
  margin-right: 1em;

  @media ${device.lowerThanLaptop} {
    margin-bottom: 1em;
  }
`;

const Info = styled.p`
  margin-bottom: 1rem;
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

const WebsiteLink = styled.a`
  font-size: 1em;
  color: #E1E2E7;
  text-decoration: underline;
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <InfoContainer>
            <LogoWebsiteContainer>
              <LogoImage src="/images/ic_logo.svg"/>
              <Info>
                <WebsiteLink target="_blank" rel="noopener noreferrer" href='https://johnerisvillanueva.com'>
                  johnerisvillanueva.com
                </WebsiteLink>
              </Info>
            </LogoWebsiteContainer>
            <InfoSectionContainer>
              <Info>This is my personal website that is created to showcase my portfolio.</Info>
              <Info>
                It is created using&nbsp;
                <WebsiteLink target="_blank" rel="noopener noreferrer" href='https://reactjs.org/'>
                React.js
                </WebsiteLink>
                &nbsp;and statically exported using&nbsp;
                <WebsiteLink target="_blank" rel="noopener noreferrer" href='https://nextjs.org/'>
                Next.js
                </WebsiteLink>
                .
              </Info>
              <Info>
                The code for this website is available at&nbsp;
                <WebsiteLink target="_blank" rel="noopener noreferrer" href='https://github.com/johneris/johnerisvillanueva.com-reactjs/'>
                github.com
                </WebsiteLink>
                .
              </Info>
            </InfoSectionContainer>
            {/* <InfoSectionContainer>
              <Info>For my blog about software development, visit https://pinoycoder.ph.</Info>
            </InfoSectionContainer> */}
            <InfoSectionContainer>
              <Info>&copy; John Eris Villanueva 2020</Info>
            </InfoSectionContainer>
          </InfoContainer>
          <SectionsContainer>
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
