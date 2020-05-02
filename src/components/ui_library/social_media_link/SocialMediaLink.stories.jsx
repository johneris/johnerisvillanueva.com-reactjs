import React from 'react';
import '../../../styles/styles.css';

import SocialMediaLink from './SocialMediaLink';

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
    name="LinkedIn" logoSrc='/images/ic_linkedin.svg'
    link="https://linkedin.com"
  />
);
