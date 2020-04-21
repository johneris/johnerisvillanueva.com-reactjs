import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const HobbyIcon = styled.img`
`;

const HobbyLabel = styled.h4`
  font-size: 1em;
  margin-top: 1em;
  color: #CCD5DB;
`;

export class Hobby extends Component {
  render() {
    const { name, logoSrc } = this.props
    return (
      <Container>
        <HobbyIcon src={logoSrc}></HobbyIcon>
        <HobbyLabel>{name}</HobbyLabel>
      </Container>
    )
  }
}

Hobby.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired
};

export default Hobby
