import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

import SkillPreview from '../../ui_library/SkillPreview';
import SocialMediaLink from '../../ui_library/SocialMediaLink';
import Button from '../../ui_library/Button';

import '../../../App.css';
import ic_android from '../../../images/ic_android.svg';
import ic_ios from '../../../images/ic_ios.svg';
import ic_web from '../../../images/ic_web.svg';
import ic_backend from '../../../images/ic_backend.svg';
import ic_linkedin from '../../../images/ic_linkedin.svg';
import ic_github from '../../../images/ic_github.svg';
import ic_facebook from '../../../images/ic_facebook.svg';
import img_me from '../../../images/img_me.png';

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media (max-width: 1439px) { 
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
  grid-column-gap: 2em;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 1439px) {
    width: 80%;
    margin-right: auto;

    grid-template-columns: 100%;
    grid-template-rows: repeat(2, calc((100vh - 4em)/2)) 38em;
    grid-column-gap: 2em;
  }

  @media (max-width: 767px) {
    grid-template-rows: calc((100vh - 4em) * 0.75) calc((100vh - 4em) * 0.25) 38em;
  }

  @media (max-width: 424px) {
    grid-template-rows: calc((100vh - 4em) * 0.6) calc((100vh - 4em) * 0.4) 38em;
  }
`;

const HeadingSkillsContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media (max-width: 1439px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    
    justify-content: flex-end;
  }

  @media (max-width: 767px) {
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
  padding-top: 0;

  @media (max-width: 1439px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;

    justify-content: flex-start;
    padding-top: 4em;
  }

  @media (max-width: 767px) {
    padding-top: 1em;
  }

  @media (max-width: 424px) {
    justify-content: center;
  }
`;

const GreetingsContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;

  @media (max-width: 1439px) { 
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const FullStackLabel = styled.h2`
  color: #FFFFFF;
  font-size: 2em;

  @media (max-width: 767px) {
    font-size: 1.5em;
  }

  @media (max-width: 424px) {
    font-size: 1em;
  }
`;

const WebMobileLabel = styled.h1`
  color: #FFFFFF;
  font-size: 4em;
  
  @media (max-width: 767px) {
    font-size: 2.5em;
  }

  @media (max-width: 424px) {
    font-size: 1.5em;
  }
`;

const SkillListContainer = styled.div`
  margin-top: 2.8em;

  display: grid;
  grid-template-columns: repeat(4, minmax(7em, 10em));
  grid-template-rows: 10em;
  grid-column-gap: 1em;

  @media (max-width: 767px) {
    margin-top: 1.5em;

    grid-template-columns: repeat(2, minmax(7em, 10em));
    grid-template-rows: repeat(2, minmax(7em, 10em));
    grid-column-gap: 2em;
    grid-row-gap: 2em;
  }

  @media (max-width: 424px) {
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

  @media (max-width: 767px) {
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
  right: 9.7em;
  z-index: 1;

  @media (max-width: 1439px) {
    display: none;
  }
`

const MeImage = styled.img`
  width: auto;
  height: 38em;

  position: relative;
  z-index: 2;

  @media (max-width: 1439px) {
    height: auto;

    position: static;
    margin-bottom: 3em;
  }

  @media (max-width: 424px) {
    width: 100%;
    margin-bottom: 0;
  }
`

const GreetingsLabelContainer = styled.div`
  height: 0px;
  width: 10em;

  position: relative;
  top: 2.8em;
  left: 12em;
  z-index: 3;

  display: flex;
  justify-content: center;

  @media (max-width: 1439px) { 
    height: auto;
    width: auto;

    position: static;
    margin-bottom: 1em;
  }
`;

const GreetingsLabel = styled.div`
  color: #CCD5DB;
  font-size: 1.5em;

  @media (max-width: 1439px) { 
    font-size: 2em;
  }
`;

export class Home extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <HeadingSkillsContainer>
            <FullStackLabel>Full Stack Developer</FullStackLabel>
            <WebMobileLabel>Web and Mobile</WebMobileLabel>
            <SkillListContainer>
              <SkillPreview name="Android" logoSrc={ic_android}/>
              <SkillPreview name="iOS" logoSrc={ic_ios}/>
              <SkillPreview name="Web" logoSrc={ic_web}/>
              <SkillPreview name="Backend" logoSrc={ic_backend}/>
            </SkillListContainer>
          </HeadingSkillsContainer>
          <ContactContainer>
            <Button>Contact Me</Button>
            <EmailLabel>email: me@johnerisvillanueva.com</EmailLabel>
            <SocialMediaListContainer>
              <SocialMediaList>
                <SocialMediaItem><SocialMediaLink name="LinkedIn" logoSrc={ic_linkedin} link="#"/></SocialMediaItem>
                <SocialMediaItem><SocialMediaLink name="Github" logoSrc={ic_github} link="#"/></SocialMediaItem>
                <SocialMediaItem><SocialMediaLink name="Facebook" logoSrc={ic_facebook} link="#"/></SocialMediaItem>
              </SocialMediaList>
            </SocialMediaListContainer>
          </ContactContainer>
          <GreetingsContainer>
            <MeBackground/>
            <GreetingsLabelContainer><GreetingsLabel>Hi, I'm Eris</GreetingsLabel></GreetingsLabelContainer>
            <MeImage src={img_me}/>
          </GreetingsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Home
