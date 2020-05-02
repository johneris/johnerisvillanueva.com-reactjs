import React from 'react';
import '../../../styles/styles.css';

import ProjectPlatform from './ProjectPlatform';

export default {
  title: 'ProjectPlatform',
  component: ProjectPlatform
};

export const android = () => (
  <ProjectPlatform 
    name="Android" logoSrc='/images/ic_android.svg'
  />
);

export const iOS = () => (
  <ProjectPlatform 
    name="iOS" logoSrc='/images/ic_ios.svg'
  />
);

export const web = () => (
  <ProjectPlatform 
    name="Web" logoSrc='/images/ic_web.svg'
  />
);

export const backend = () => (
  <ProjectPlatform 
    name="Backend" logoSrc='/images/ic_backend.svg'
  />
);
