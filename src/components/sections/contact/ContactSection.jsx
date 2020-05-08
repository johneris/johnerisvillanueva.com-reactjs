import React, { Component } from 'react'
import styled from 'styled-components';

import { device } from '../../../helpers/MediaQueryHelper';

const Container = styled.section`
  width: 80%;
  margin: auto;

  padding-top: 5em;
  padding-bottom: 5em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleLabel = styled.p`
  color: #1B262C;
  font-size: 2em;
  text-align: center;
`;

const HubspotFormContainer = styled.div`
  width: 30em;
  margin-top: 3em;

  @media ${device.lowerThanTablet} {
    width: 20em;
  }

  @media ${device.lowerThanMobileM} {
    width: 15em;
  }
`;

export class ContactSection extends Component {

  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    
    script.addEventListener('load', () => {
    	if(window.hbspt) {
      	window.hbspt.forms.create({
        	portalId: '7066917',
          formId: '43535f8f-187c-40c7-bdd2-0b41d59c0142',
          target: '#hubspotForm'
        })
      }
    });
  }
  
	render() {
  	return (
  		<Container id="contact">
        <TitleLabel>Have something to say or just want to say Hi?</TitleLabel>
        <HubspotFormContainer>
  		    <div id="hubspotForm"></div>
        </HubspotFormContainer>
  		</Container>
    );
  }
}

export default ContactSection
