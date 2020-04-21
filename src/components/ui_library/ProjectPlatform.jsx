import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  height: 1.5rem;
`;

const Name = styled.p`
  margin-left: 0.5em;
  color: #4E5F69;
  font-size: 0.8em;
`;

export class ProjectPlatform extends Component {
  render() {
    const { name, logoSrc } = this.props;
    return (
      <Container>
        <Icon src={logoSrc}/>
        <Name>{name}</Name>
      </Container>
    )
  }
}

ProjectPlatform.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired
};

export default ProjectPlatform
