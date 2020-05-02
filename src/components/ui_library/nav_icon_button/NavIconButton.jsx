import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  background-color: #A7ADB1;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  background-color: #A7ADB1;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 1.5em;
  max-width: 1.5em;
`

export class NavIconButton extends Component {
  render() {
    const { name, iconSrc } = this.props;
    return (
      <Container>
        <Button>
          <Icon src={iconSrc} alt={name}/>
        </Button>
      </Container>
    )
  }
}

NavIconButton.propTypes = {
  name: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired
};

export default NavIconButton
