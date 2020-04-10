import React from 'react';
import '../App.css';

import SocialMediaLink from '../components/ui_library/SocialMediaLink';

import ic_android from '../images/ic_android.svg';

export default {
  title: 'SocialMediaLink',
  component: SocialMediaLink,
};

export const linkedin = () => (
  <SocialMediaLink 
    name="LinkedIn" logoSrc={ic_android}
    link="https://linkedin.com"
  />
);
