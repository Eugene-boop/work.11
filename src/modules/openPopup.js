'use strict';

const openPopup = (selector, afterOpen = () => {}) => {
  const openBtn = document.querySelector(selector),
    popup = openBtn ? document.querySelector(openBtn.dataset.popup) : null;

  if (!popup) return;
  
  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.display = 'block';
    document.body.style.cssText = 'position:fixed; width:100%;';
    afterOpen(this);
  });

  popup.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.form-content') || target.matches('.close-btn')) {
      popup.style.display = 'none';
      document.body.style.cssText = 'position:""; width:""';
    }
  })
};

export default openPopup;