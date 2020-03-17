'use strict';

import dropMenu from './modules/dropMenu';
import openPopup from './modules/openPopup';
import sendForms from './modules/sendForms';
import forbidInput from './modules/forbidInput';
import inputMask from './modules/inputMask';
import hideGift from './modules/hideGift';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import upArrow from './modules/upArrow';
import fixMenu from './modules/fixMenu';
hideGift();
upArrow();

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
  slider({
    slideName: '.main-slider .slide',
    sliderName: '.main-slider',
    slideTime: 4000
  });
  slider({
    slideName: '.gallery-slider .slide',
    sliderName: '.gallery-slider',
    slideTime: 2500,
    dotUlName: 'gallery-slider-dots',
    dotClass: 'gallery-slider-dot',
    dotActiveClass: 'gallery-dot-active',
    arrowName: 'arrow gallery-arrow',
    arrowNextName: 'next',
    arrowPrevName: 'prev',

  });
  sliderCarousel();
  fixMenu();
});