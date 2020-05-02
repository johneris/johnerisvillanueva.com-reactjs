import React from 'react';
import '../../../styles/styles.css';

import Header from "./Header";

export default {
  title: 'Header',
  component: Header,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const Default = () => (
  <Header/>
);

export const WithHeight = () => (
  <Header height="4em"/>
);
