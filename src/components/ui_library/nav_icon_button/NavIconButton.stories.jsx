import React from 'react';
import '../../../styles/styles.css';

import NavIconButton from "./NavIconButton";

export default {
  title: 'NavIconButton',
  component: NavIconButton
};

export const Default = () => (
  <NavIconButton name="previous project" iconSrc='/images/ic_previous.svg'/>
);
