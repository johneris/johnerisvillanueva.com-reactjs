import React from 'react';
import '../App.css';

import Skill from '../components/ui_library/Skill';

import ic_android from '../images/ic_android.svg';

export default {
  title: 'Skill',
  component: Skill,
  decorators: [storyFn => <div style={{ 
    backgroundColor: '#1B262C', 
    height: "100%",
    width: "100%"
  }}>{storyFn()}</div>]
};

export const android = () => (
  <Skill 
    name="Android" logoSrc={ic_android}
    level="Intermediate"
    title="Native Java/Kotlin" 
    details={["IDE: Android Studio", 
    "Libraries Used: Dagger, Retrofit, RxJava, Gson",
    "Architecture - MVP, MVVM, Clean Architecture",
    "Others: Play Store Deployment"]}
  />
);
