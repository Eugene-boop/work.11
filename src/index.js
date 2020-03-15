'use strict';

import dropMenu from './modules/dropMenu';
import openPopup from './modules/openPopup';
import sendForms from './modules/sendForms';
import forbidInput from './modules/forbidInput';
import inputMask from './modules/inputMask';

document.addEventListener('DOMContentLoaded', () => {
  dropMenu(); 
  openPopup('.open-popup');
  openPopup('.callback-btn');
  sendForms();
  forbidInput(
    [/[^\d|+]/ig, /[A-Z\d]/ig],
    ['input[type="tel"]', 'input[type="text"]']
  );
  inputMask();
});