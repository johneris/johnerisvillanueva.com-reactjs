import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 22em;
  height: 4em;
  border-style: solid;
  border-color: #4E5F69;
  border-width: 1px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureTitle = styled.p`
  color: #4E5F69;
  font-size: 1.5em;
`;

export class ProjectFeature extends Component {
  render() {
    const { name } = this.props;
    return (
      <Container>
        <FeatureTitle>{name}</FeatureTitle>
      </Container>
    )
  }
}

ProjectFeature.propTypes = {
  name: PropTypes.string.isRequired
};

export default ProjectFeature
