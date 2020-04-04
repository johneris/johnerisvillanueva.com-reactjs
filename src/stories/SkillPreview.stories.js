import React from 'react';
import '../App.css';

import SkillPreview from '../components/ui_library/SkillPreview';

import ic_android from '../images/ic_android.svg';
import ic_ios from '../images/ic_ios.svg';
import ic_web from '../images/ic_web.svg';
import ic_backend from '../images/ic_backend.svg';

export default {
  title: 'SkillPreview',
  component: SkillPreview,
};

export const android = () => (
  <SkillPreview 
    name="Android" logoSrc={ic_android}
  />
);

export const iOS = () => (
  <SkillPreview 
    name="iOS" logoSrc={ic_ios}
  />
);

export const web = () => (
  <SkillPreview 
    name="Web" logoSrc={ic_web}
  />
);

export const backend = () => (
  <SkillPreview 
    name="Backend" logoSrc={ic_backend}
  />
);
