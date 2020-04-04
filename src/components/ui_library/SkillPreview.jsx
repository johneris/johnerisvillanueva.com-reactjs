import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import '../../App.css'

const Container = styled.div`
  width: 200px;
  height: 200px;

  border-style: solid;
  border-color: #90B7CC;
  border-width: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillIcon = styled.img`
`;

const SkillLabel = styled.h4`
  font-size: 1em;
  margin-top: 12px;
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
