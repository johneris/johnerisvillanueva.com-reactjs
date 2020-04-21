import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  background-color: #26343C;

  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialMediaIcon = styled.img`
  height: 1.5em;
  max-width: 1.5em;
`

export class SocialMediaLink extends Component {
  render() {
    const { name, logoSrc, link } = this.props
    return (
      <Container>
        <a href={link}><SocialMediaIcon src={logoSrc} alt={name}/></a>
      </Container>
    )
  }
}

SocialMediaLink.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SocialMediaLink
