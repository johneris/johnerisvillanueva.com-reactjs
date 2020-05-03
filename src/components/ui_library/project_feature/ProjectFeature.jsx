import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

const Container = styled.div`
  width: auto;
  height: 4rem;
  border-style: solid;
  border-color: #4E5F69;
  border-width: 1px;

  padding-left: 2rem;
  padding-right: 2rem;

  max-width: 22em;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.lowerThanLaptopL} {
    height: 3rem;
    max-width: 18rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${device.lowerThanTablet} {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`;

const FeatureTitle = styled.p`
  color: #4E5F69;
  font-size: 1.5em;

  @media ${device.lowerThanLaptopL} {
    font-size: 1em;
  }

  @media ${device.lowerThanTablet} {
    font-size: 0.8em;
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
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
