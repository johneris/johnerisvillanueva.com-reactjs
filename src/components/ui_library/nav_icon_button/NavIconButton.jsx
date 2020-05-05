import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #A7ADB1;

  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

const Icon = styled.img`
  height: 1.5rem;
  max-width: 1.5rem;
`

export class NavIconButton extends Component {
  render() {
    const { name, iconSrc, onClick } = this.props;
    return (
      <Button onClick={onClick}>
        <Icon src={iconSrc} alt={name}/>
      </Button>
    )
  }
}

NavIconButton.propTypes = {
  name: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired
};

export default NavIconButton
