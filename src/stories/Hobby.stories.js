import React from 'react';
import '../App.css';

import Hobby from '../components/ui_library/Hobby';

export default {
  title: 'Hobby',
  component: Hobby,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C',
    height: "12em",
    width: "12em"
  }}>{storyFn()}</div>]
};

export const run = () => (
  <Hobby 
    name="Run" logoSrc='/images/ic_run.svg'
  />
);

export const hike = () => (
  <Hobby 
    name="Hike" logoSrc='/images/ic_hike.svg'
  />
);

export const web = () => (
  <Hobby 
    name="Swim" logoSrc='/images/ic_swim.svg'
  />
);
