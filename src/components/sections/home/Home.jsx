import React, { Component } from 'react';
import styled from 'styled-components';

import SkillPreview from '../../ui_library/SkillPreview';
import Button from '../../ui_library/Button';

import '../../../App.css';
import ic_android from '../../../images/ic_android.svg';
import ic_ios from '../../../images/ic_ios.svg';
import ic_web from '../../../images/ic_web.svg';
import ic_backend from '../../../images/ic_backend.svg';
import img_me from '../../../images/img_me.png';

const Container = styled.div`
  height: 100%;
  background-color: #1B262C;
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

const SkillsContainer = styled.div`
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

const MeImage = styled.img`
  height: 38em;
`

const EmailLabel = styled.p`
  margin-top: 1.4em;
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
            <SkillsContainer>
              <SkillList>
                <SkillListItem><SkillPreview name="Android" logoSrc={ic_android}/></SkillListItem>
                <SkillListItem><SkillPreview name="iOS" logoSrc={ic_ios}/></SkillListItem>
                <SkillListItem><SkillPreview name="Web" logoSrc={ic_web}/></SkillListItem>
                <SkillListItem><SkillPreview name="Backend" logoSrc={ic_backend}/></SkillListItem>
              </SkillList>
            </SkillsContainer>
          </HeadingSkillsContainer>
          <ContactContainer>
            <Button>Contact Me</Button>
            <EmailLabel>email: me@johnerisvillanueva.com</EmailLabel>
          </ContactContainer>
          <GreetingsContainer>
            <MeImage src={img_me}/>
          </GreetingsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Home
