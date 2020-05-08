import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

const Container = styled.section`
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Quote = styled.q`
  font-size: 2em;
  text-align: center;

  @media ${device.lowerThanTablet} {
    font-size: 1.5em;
  }
`;

const Author = styled.p`
  margin-top: 1.5rem;
  
  color: #A7ADB1;
  font-size: 1.5em;
  font-style: italic;

  @media ${device.lowerThanTablet} {
    font-size: 1em;
  }
`;

export class QuotationSection extends Component {
  render() {
    return (
      <Container id="quote">
        <Wrapper>
          <Quote>
          <span style={{color: '#23A155'}}>Change - real change - comes from the inside out.</span>
          &nbsp;It doesn't come from hacking at the leaves of attitude and behavior with quick fix personality ethic techniques.
          &nbsp;<span style={{color: '#23A155'}}>It comes from striking at the root</span>
          &nbsp;- the fabric of our thought, the fundamental, essential paradigms,
          &nbsp;<span style={{color: '#23A155'}}>which we give definition to our character</span>
          &nbsp;and create the lens through
          &nbsp;<span style={{color: '#23A155'}}>which we see the world</span>.
          </Quote>
          <Author>- Stephen Covey, The 7 Habits of Highly Effective People</Author>
        </Wrapper>
      </Container>
    )
  }
}

export default QuotationSection
