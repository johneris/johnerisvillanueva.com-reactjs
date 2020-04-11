import React from 'react';
import '../App.css';

import Home from "../components/sections/home/Home";

export default {
  title: 'Home',
  component: Home,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const Default = () => (
  <Home/>
);
