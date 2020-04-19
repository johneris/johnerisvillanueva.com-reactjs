import React from 'react';
import '../App.css';

import NavIconButton from "../components/ui_library/NavIconButton";

import ic_previous from '../images/ic_previous.svg';

export default {
  title: 'NavIconButton',
  component: NavIconButton
};

export const Default = () => (
  <NavIconButton name="previous project" iconSrc={ic_previous}/>
);
