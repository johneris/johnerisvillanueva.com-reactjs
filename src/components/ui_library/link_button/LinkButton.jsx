import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  border-radius: 3px;
  border: 1.5px solid #23A155;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #23A155;
  color: #FFFFFF;

  box-sizing: border-box;
`;

export class LinkButton extends Component {
  render() {
    const children = this.props.children;
    return (
      <StyledLink onClick={this.props.onClick} href={this.props.href}>{children}</StyledLink>
    )
  }
}

LinkButton.propTypes = {
  children: PropTypes.string.isRequired
}

export default LinkButton
