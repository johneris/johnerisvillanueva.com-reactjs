import React, { Component } from 'react';
import styled from 'styled-components';

import SkillPreview from '../../ui_library/SkillPreview';

import '../../../App.css';
import ic_android from '../../../images/ic_android.svg';
import ic_ios from '../../../images/ic_ios.svg';
import ic_web from '../../../images/ic_web.svg';
import ic_backend from '../../../images/ic_backend.svg';

const Container = styled.div`
  height: 100%;
  background-color: #1B262C;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeadingSkillsContainer = styled.div`
  /* background-color: blue; */
`;

const ContactContainer = styled.div`
  /* background-color: black; */
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
  margin-top: 56px;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0px;

  li:not(:last-child) {
    margin-right: 40px;
  }
`;

const SkillListItem = styled.li`
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
            <h1>B</h1>
          </ContactContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Home
