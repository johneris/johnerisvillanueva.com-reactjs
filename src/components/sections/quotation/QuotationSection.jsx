import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Quote = styled.q`
  font-size: 2em;
  text-align: center;
`;

const Author = styled.p`
  margin-top: 1.5rem;
  
  color: #A7ADB1;
  font-size: 2em;
  font-style: italic;
`;

export class QuotationSection extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Quote>
            If life were predictable it would cease to be life and be without flavor.
          </Quote>
          <Author>- Someone</Author>
        </Wrapper>
      </Container>
    )
  }
}

export default QuotationSection
