import React from 'react';
import '../App.css';

import SkillPreview from '../components/ui_library/SkillPreview';

export default {
  title: 'SkillPreview',
  component: SkillPreview,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const android = () => (
  <SkillPreview 
    name="Android" logoSrc='/images/ic_android.svg'
  />
);

export const iOS = () => (
  <SkillPreview 
    name="iOS" logoSrc='/images/ic_ios.svg'
  />
);

export const web = () => (
  <SkillPreview 
    name="Web" logoSrc='/images/ic_web.svg'
  />
);

export const backend = () => (
  <SkillPreview 
    name="Backend" logoSrc='/images/ic_backend.svg'
  />
);
