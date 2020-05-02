import React from 'react';
import '../App.css';

import NavIconButton from "../components/ui_library/NavIconButton";

export default {
  title: 'NavIconButton',
  component: NavIconButton
};

export const Default = () => (
  <NavIconButton name="previous project" iconSrc='/images/ic_previous.svg'/>
);
