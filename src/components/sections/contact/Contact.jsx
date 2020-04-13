import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
  padding-bottom: 5em;
`;

const TitleLabel = styled.p`
  color: #1B262C;
  font-size: 2em;
  text-align: center;
`;

const HubspotFormContainer = styled.div`
  width: 40em;
  margin-top: 3em;
`;

export class Contact extends Component {

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
  		<Container>
        <TitleLabel>Have something to say or just want to say Hi?</TitleLabel>
        <HubspotFormContainer>
  		    <div id="hubspotForm"></div>
        </HubspotFormContainer>
  		</Container>
    );
  }
}

export default Contact
