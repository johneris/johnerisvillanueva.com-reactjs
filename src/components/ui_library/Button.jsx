import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 3px;
  border: 1.5px solid #23A155;
  padding: 0.5em 1em;
  font-size: 1.2em;
  background-color: #23A155;
  color: #FFFFFF;
`;

export class Button extends Component {
  render() {
    const children = this.props.children;
    return (
      <StyledButton>{children}</StyledButton>
    )
  }
}

Button.propTypes = {
  children: PropTypes.element.isRequired
}

export default Button
