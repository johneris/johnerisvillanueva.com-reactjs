import React from 'react';
import '../../../styles/styles.css';

import HeaderSection from "./HeaderSection";

export default {
  title: 'HeaderSection',
  component: HeaderSection,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const Default = () => (
  <HeaderSection/>
);

export const WithHeight = () => (
  <HeaderSection height="4em"/>
);
