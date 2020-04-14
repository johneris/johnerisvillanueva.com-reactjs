import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../App.css'

const Container = styled.div`
  width: 100%;
  min-height: 10em;
  
  padding-top: 2em;
  padding-bottom: 2em;
  border-style: solid;
  border-color: #90B7CC;
  border-width: 1px;

  display: flex;
  flex-direction: row;
`;

const SkillContainer = styled.div`
  width: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillIcon = styled.img`
`;

const SkillLabel = styled.h4`
  font-size: 1em;
  margin-top: 1em;
  color: #CCD5DB;
`;

const InfoTitle = styled.h4`
  font-size: 1em;
  margin-top: 0.5em;
  color: #CCD5DB;
  font-weight: bold;
`;

const InfoDetailContainer = styled.div`
  margin-top: 1em;
`;

const InfoDetail = styled.p`
  font-size: 1em;
  color: #CCD5DB;
`;

export class Skill extends Component {
  render() {
    const { 
      name, logoSrc,
      title, details
    } = this.props
    return (
      <Container>
        <SkillContainer>
          <SkillIcon src={logoSrc}></SkillIcon>
          <SkillLabel>{name}</SkillLabel>
        </SkillContainer>
        <InfoContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoDetailContainer>
            { details.map(info => {
              return <InfoDetail>{info}</InfoDetail>
            }) }
          </InfoDetailContainer>
        </InfoContainer>
      </Container>
    )
  }
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Skill
