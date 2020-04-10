import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../App.css'

const Container = styled.div`
  width: 100%;
  height: 100%;

  min-width: 8em;
  min-height: 8em;

  max-width: 10em;
  max-height: 10em;

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
    const { name, logoSrc, toolsSrc } = this.props
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
