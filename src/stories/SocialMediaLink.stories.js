import React from 'react';
import '../App.css';

import SocialMediaLink from '../components/ui_library/SocialMediaLink';

import ic_linkedin from '../images/ic_linkedin.svg';

export default {
  title: 'SocialMediaLink',
  component: SocialMediaLink,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const linkedin = () => (
  <SocialMediaLink 
    name="LinkedIn" logoSrc={ic_linkedin}
    link="https://linkedin.com"
  />
);
