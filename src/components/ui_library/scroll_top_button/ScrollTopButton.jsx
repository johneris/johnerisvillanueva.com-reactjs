import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 3.2rem;
  height: 3.2rem;

  border-radius: 3px;
  background-color: #23A155;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledLink = styled.a`
`;

const UpImage = styled.img`
`;

export class ScrollTopButton extends Component {
  render() {
    return (
      <Container>
        <StyledLink onClick={this.props.onClick} href={this.props.href}>
          <UpImage src="/images/ic_up.svg"></UpImage>
        </StyledLink>
      </Container>
    )
  }
}

export default ScrollTopButton
