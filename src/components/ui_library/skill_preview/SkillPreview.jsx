import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: 10rem;
  max-height: 10rem;

  min-width: 7rem;
  min-height: 7rem;
  
  border-style: solid;
  border-color: #90B7CC;
  border-width: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillIcon = styled.img`
  height: 50%;
`;

const SkillLabel = styled.h4`
  font-size: 1em;
  margin-top: .75em;
  color: #CCD5DB;
`;

export class SkillPreview extends Component {
  render() {
    const { name, logoSrc } = this.props;
    return (
      <Container>
        <SkillIcon src={logoSrc}></SkillIcon>
        <SkillLabel>{name}</SkillLabel>
      </Container>
    )
  }
}

SkillPreview.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired
};

export default SkillPreview
