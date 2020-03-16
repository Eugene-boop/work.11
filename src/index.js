'use strict';

import dropMenu from './modules/dropMenu';
import openPopup from './modules/openPopup';
import sendForms from './modules/sendForms';
import forbidInput from './modules/forbidInput';
import inputMask from './modules/inputMask';
import hideGift from './modules/hideGift';
import mainSlider from './modules/mainSlider';
import sliderCarousel from './modules/sliderCarousel';
hideGift();

document.addEventListener('DOMContentLoaded', () => {
  const documentWidth = parseInt(document.documentElement.clientWidth),
  windowsWidth = parseInt(window.innerWidth),
  scrollbarWidth = windowsWidth - documentWidth;

  dropMenu(); 
  openPopup(scrollbarWidth, '.open-popup', );
  openPopup(scrollbarWidth, '.callback-btn');
  openPopup(scrollbarWidth, '.fixed-gift', hideGift);
  sendForms(scrollbarWidth);
  forbidInput(
    [/[^\d|+]/ig, /[A-Z\d]/ig],
    ['input[type="tel"]', 'input[type="text"]']
  );
  inputMask();
  mainSlider();
  sliderCarousel();
});