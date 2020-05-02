import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import SkillPreview from '../../ui_library/skill_preview/SkillPreview';
import SocialMediaLink from '../../ui_library/social_media_link/SocialMediaLink';
import Button from '../../ui_library/button/Button';

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media ${device.lowerThanLaptop} {
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  margin-left: auto;
  margin-right: 0;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-column-gap: 4em;
  justify-content: space-between;
  align-content: center;

  @media ${device.lowerThanLaptop} {
    width: 80%;
    margin-right: auto;

    grid-template-columns: 100%;
    grid-template-rows: repeat(2, calc((100vh - 4rem)/2)) 35em;
  }

  @media ${device.lowerThanTablet} {
    grid-template-rows: calc((100vh - 4em) * 0.75) calc((100vh - 4em) * 0.25) 35em;
  }

  @media ${device.lowerThanMobileL} {
    grid-template-rows: calc((100vh - 4em) * 0.6) calc((100vh - 4em) * 0.4) 35em;
  }
`;

const HeadingSkillsContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media ${device.lowerThanLaptop} {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    
    justify-content: flex-end;
  }

  @media ${device.lowerThanTablet} {
    justify-content: center;
    align-items: center;
  }
`;

const ContactContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 4rem;

  @media (max-width: 1160px) {
    padding-top: 2rem;
  }

  @media ${device.lowerThanLaptop} {
    padding-top: 4rem;
    justify-content: flex-start;
  }

  @media ${device.lowerThanTablet} {
    padding-top: 1em;
  }

  @media ${device.lowerThanMobileL} {
    justify-content: center;
  }
`;

const GreetingsContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.lowerThanLaptop} {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
`;

const SoftwareDevLabel = styled.h2`
  color: #FFFFFF;
  font-size: 2em;

  @media (max-width: 1160px) {
    font-size: 1.2em;
  }

  @media ${device.lowerThanLaptop} {
    font-size: 2em;
  }

  @media ${device.lowerThanTablet} {
    font-size: 1.5em;
  }

  @media ${device.lowerThanMobileL} {
    font-size: 1em;
  }
`;

const WebMobileLabel = styled.h1`
  color: #FFFFFF;
  font-size: 4em;
  white-space: nowrap;

  @media (max-width: 1160px) {
    font-size: 3.2em;
  }

  @media ${device.lowerThanLaptop} {
    font-size: 4em;
  }

  @media ${device.lowerThanTablet} {
    font-size: 2.5em;
  }

  @media ${device.lowerThanMobileL} {
    font-size: 1.5em;
  }
`;

const SkillListContainer = styled.div`
  margin-top: 2.8rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(7em, 10em));
  grid-template-rows: 10em;
  grid-column-gap: 1em;

  @media (max-width: 1160px) {
    margin-top: 2rem;
  }

  @media ${device.lowerThanTablet} {
    margin-top: 1.5em;

    grid-template-columns: repeat(2, minmax(7em, 10em));
    grid-template-rows: repeat(2, minmax(7em, 10em));
    grid-column-gap: 2em;
    grid-row-gap: 2em;
  }

  @media ${device.lowerThanMobileL} {
    margin-top: 1em;

    grid-template-columns: repeat(2, minmax(7em, 8em));
    grid-template-rows: repeat(2, minmax(7em, 8em));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }
`;

const EmailLabel = styled.p`
  margin-top: 1.4rem;
  color: #CCD5DB;
  font-size: 1.5em;

  @media (max-width: 1160px) {
    font-size: 1em;
  }

  @media ${device.lowerThanLaptop} {
    font-size: 1.5em;
  }

  @media ${device.lowerThanTablet} {
    font-size: 1em;
  }
`;

const SocialMediaListContainer = styled.div`
  margin-top: 1.4rem;
`;

const SocialMediaList = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0px;

  li:not(:last-child) {
    margin-right: 1.4em;
  }
`;

const SocialMediaItem = styled.li`
`;

const MeBackground = styled.div`
  height: 100%;
  width: 19em;
  background-color: #212B31;

  position: absolute;
  top: 0;
  right: 9em;
  z-index: 1;

  @media (max-width: 1250px) {
    width: 23%;
    right: 11%;
  }

  @media (max-width: 1200px) {
    width: 21%;
    right: 11%;
  }

  @media (max-width: 1150px) {
    width: 19%;
    right: 11%;
  }

  @media (max-width: 1100px) {
    width: 17%;
    right: 11%;
  }

  @media ${device.lowerThanLaptop} { 
    display: none;
  }
`

const MeImage = styled.img`
  max-width: 35rem;

  position: relative;
  z-index: 2;

  @media (max-width: 1350px) {
    width: 100%;
  }

  @media ${device.lowerThanLaptop} { 
    width: auto;
    max-height: 25rem;
    max-width: 95%;
  }
`

const GreetingsLabelContainer = styled.div`
  height: 0px;
  width: 10em;

  position: relative;
  top: 2em;
  left: -1em;
  z-index: 3;

  display: flex;
  justify-content: center;

  @media ${device.lowerThanLaptop} { 
    height: auto;
    width: auto;

    position: static;
    margin-bottom: 1em;
  }
`;

const GreetingsLabel = styled.div`
  color: #CCD5DB;
  font-size: 1.5em;

  @media (max-width: 1160px) {
    font-size: 1em;
  }
`;

export class HomeSection extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <HeadingSkillsContainer>
            <SoftwareDevLabel>Software Developer</SoftwareDevLabel>
            <WebMobileLabel>Web and Mobile</WebMobileLabel>
            <SkillListContainer>
              <SkillPreview name="Android" logoSrc="/images/ic_android.svg"/>
              <SkillPreview name="iOS" logoSrc="/images/ic_ios.svg"/>
              <SkillPreview name="Web" logoSrc="/images/ic_web.svg"/>
              <SkillPreview name="Backend" logoSrc="/images/ic_backend.svg"/>
            </SkillListContainer>
          </HeadingSkillsContainer>
          <ContactContainer>
            <Button>Contact Me</Button>
            <EmailLabel>email: me@johnerisvillanueva.com</EmailLabel>
            <SocialMediaListContainer>
              <SocialMediaList>
                <SocialMediaItem>
                  <SocialMediaLink name="LinkedIn" logoSrc="/images/ic_linkedin.svg" 
                  link="https://www.linkedin.com/in/john-eris-villanueva-838216b2/"/>
                </SocialMediaItem>
                <SocialMediaItem>
                  <SocialMediaLink name="Github" logoSrc="/images/ic_github.svg" 
                  link="https://github.com/johneris/"/>
                </SocialMediaItem>
                {/* <SocialMediaItem>
                  <SocialMediaLink name="Facebook" logoSrc="/images/ic_facebook.svg" 
                  link="https://www.facebook.com/johneris.villanueva/"/>
                </SocialMediaItem> */}
              </SocialMediaList>
            </SocialMediaListContainer>
          </ContactContainer>
          <GreetingsContainer>
            <MeBackground/>
            <GreetingsLabelContainer><GreetingsLabel>Hi, I'm Eris</GreetingsLabel></GreetingsLabelContainer>
            <MeImage src="/images/img_me.png"/>
          </GreetingsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default HomeSection
