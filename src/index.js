'use strict';

import dropMenu from './modules/dropMenu';
import openPopup from './modules/openPopup';

document.addEventListener('DOMContentLoaded', () => {
  dropMenu(); 
  openPopup('.open-popup');
  openPopup('.callback-btn');
});