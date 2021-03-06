import React from 'react';
import '../../../styles/styles.css';

import HomeSection from "./HomeSection";

export default {
  title: 'HomeSection',
  component: HomeSection,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const Default = () => (
  <HomeSection/>
);
