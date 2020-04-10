import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  margin-left: auto;
  margin-right: 0;

  /* 2x2 Grid */
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;
  align-content: center;
`;

const HeadingSkillsContainer = styled.div`
  /* background-color: blue; */
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
`;

const ContactContainer = styled.div`
  /* background-color: black; */
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const GreetingsContainer = styled.div`
  /* background-color: ghostwhite; */
  grid-column: 3 / span 1;
  grid-row: 1 / span 2;
`;

const FullStackLabel = styled.h2`
  color: #FFFFFF;
  font-size: 2em;
`;

const WebMobileLabel = styled.h1`
  color: #FFFFFF;
  font-size: 4em;
`;

const SkillListContainer = styled.div`
  margin-top: 2.8em;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0px;

  li:not(:last-child) {
    margin-right: 2em;
  }
`;

const SkillListItem = styled.li`
`;

const EmailLabel = styled.p`
  margin-top: 1.4rem;
  color: #CCD5DB;
  font-size: 1.5em;
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
`

const MeImage = styled.img`
  height: 38em;

  position: relative;
  z-index: 2;
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
`;

const GreetingsLabel = styled.div`
  color: #CCD5DB;
  font-size: 1.5em;
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
              <SkillList>
                <SkillListItem><SkillPreview name="Android" logoSrc={ic_android}/></SkillListItem>
                <SkillListItem><SkillPreview name="iOS" logoSrc={ic_ios}/></SkillListItem>
                <SkillListItem><SkillPreview name="Web" logoSrc={ic_web}/></SkillListItem>
                <SkillListItem><SkillPreview name="Backend" logoSrc={ic_backend}/></SkillListItem>
              </SkillList>
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
