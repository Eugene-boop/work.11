'use strict';

const openPopup = selector => {
  const openBtn = document.querySelector(selector),
    popup = document.querySelector(openBtn.dataset.popup);
  
  openBtn.addEventListener('click', e => {
    e.preventDefault();
    popup.style.display = 'block';
    document.body.style.cssText = 'position:fixed; width:100%;';
  });

  popup.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.form-content')) {
      popup.style.display = 'none';
      document.body.style.cssText = 'position:""; width:""';
    }
  })
};

export default openPopup;