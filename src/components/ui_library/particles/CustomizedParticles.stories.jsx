import React from 'react';
import '../../../styles/styles.css';

import CustomizedParticles from "./CustomizedParticles";

export default {
  title: 'CustomizedParticles',
  component: CustomizedParticles,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const Default = () => (
  <CustomizedParticles/>
);
