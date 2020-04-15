import React from 'react';
import '../App.css';

import Hobby from '../components/ui_library/Hobby';

import ic_run from '../images/ic_run.svg';
import ic_hike from '../images/ic_hike.svg';
import ic_swim from '../images/ic_swim.svg';

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
    name="Run" logoSrc={ic_run}
  />
);

export const hike = () => (
  <Hobby 
    name="Hike" logoSrc={ic_hike}
  />
);

export const web = () => (
  <Hobby 
    name="Swim" logoSrc={ic_swim}
  />
);
