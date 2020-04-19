import React from 'react';
import '../App.css';

import ProjectPlatform from '../components/ui_library/ProjectPlatform';

import ic_android from '../images/ic_android.svg';
import ic_ios from '../images/ic_ios.svg';
import ic_web from '../images/ic_web.svg';
import ic_backend from '../images/ic_backend.svg';

export default {
  title: 'ProjectPlatform',
  component: ProjectPlatform
};

export const android = () => (
  <ProjectPlatform 
    name="Android" logoSrc={ic_android}
  />
);

export const iOS = () => (
  <ProjectPlatform 
    name="iOS" logoSrc={ic_ios}
  />
);

export const web = () => (
  <ProjectPlatform 
    name="Web" logoSrc={ic_web}
  />
);

export const backend = () => (
  <ProjectPlatform 
    name="Backend" logoSrc={ic_backend}
  />
);
