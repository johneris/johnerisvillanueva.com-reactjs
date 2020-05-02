import React from 'react';
import '../../../styles/styles.css';

import Skill from './Skill';

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
    name="Android" logoSrc='/images/ic_android.svg'
    level="Intermediate"
    title="Native Java/Kotlin" 
    details={["IDE: Android Studio", 
    "Libraries Used: Dagger, Retrofit, RxJava, Gson",
    "Architecture - MVP, MVVM, Clean Architecture",
    "Others: Play Store Deployment"]}
  />
);
