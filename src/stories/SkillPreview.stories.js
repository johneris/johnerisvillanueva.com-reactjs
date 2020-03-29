import React from 'react';
import '../App.css';

import SkillPreview from '../components/ui_library/SkillPreview';

import ic_android from '../images/ic_android.svg';
import ic_ios from '../images/ic_ios.svg';
import ic_web from '../images/ic_web.svg';
import ic_backend from '../images/ic_backend.svg';
import ic_android_studio from '../images/ic_android_studio.svg';
import ic_java from '../images/ic_java.svg';
import ic_kotlin from '../images/ic_kotlin.svg';
import ic_xcode from '../images/ic_xcode.svg';
import ic_swift from '../images/ic_swift.svg';
import ic_vscode from '../images/ic_vscode.svg';
import ic_vuejs from '../images/ic_vuejs.svg';
import ic_intellij from '../images/ic_intellij.svg';
import ic_springboot from '../images/ic_springboot.svg';
import ic_laravel from '../images/ic_laravel.svg';

export default {
  title: 'SkillPreview',
  component: SkillPreview,
};

export const android = () => (
  <SkillPreview 
    name="Android" logoSrc={ic_android} 
    toolsSrc={[ic_android_studio, ic_java, ic_kotlin]}
  />
);

export const iOS = () => (
  <SkillPreview 
    name="iOS" logoSrc={ic_ios} 
    toolsSrc={[ic_xcode, ic_swift]}
  />
);

export const web = () => (
  <SkillPreview 
    name="Web" logoSrc={ic_web} 
    toolsSrc={[ic_vscode, ic_vuejs]}
  />
);

export const backend = () => (
  <SkillPreview 
    name="Backend" logoSrc={ic_backend} 
    toolsSrc={[ic_intellij, ic_springboot, ic_laravel]}
  />
);
