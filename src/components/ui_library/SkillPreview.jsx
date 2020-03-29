import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import '../../App.css'

const Container = styled.div`
  width: 154px;
  height: 154px;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
  color: #35404E;
`;

const ToolsContainer = styled.div`
  margin-top: 12px;
  display: flex;
`;

const ToolIcon = styled.img`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export class SkillPreview extends Component {
  render() {
    const { name, logoSrc, toolsSrc } = this.props
    return (
      <Container>
        <SkillIcon src={logoSrc}></SkillIcon>
        <SkillLabel>{name}</SkillLabel>
        <ToolsContainer>
          {toolsSrc.map(toolSrc =>
            <ToolIcon src={toolSrc}/>
          )}
        </ToolsContainer>
      </Container>
    )
  }
}

SkillPreview.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  toolsSrc: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillPreview
