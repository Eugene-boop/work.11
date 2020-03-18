'use strict';

const openPopup = (scrollWidth, selector, afterOpen = () => {}) => {
  const openBtn = document.querySelector(selector),
    popup = openBtn ? document.querySelector(openBtn.dataset.popup) : null,
    wrapper = document.querySelectorAll('.wrapper');

  if (!popup) return;
  
  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.display = 'block';
    document.body.style.cssText = ` overflow: hidden; width: 100%`;
    wrapper.forEach(element => {
      element.style.paddingRight = +getComputedStyle(element).paddingRight.slice(0, -2) + scrollWidth + 'px';
    });
    afterOpen(this);
  });

  popup.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.form-content') || target.matches('.close-btn')) {
      popup.style.display = 'none';
      document.body.style.cssText = ``;
      wrapper.forEach(element => {
        element.style.paddingRight = '';
      });
      const form = popup.querySelector('form');

      if (form.querySelector('.status-alert')) {
        form.removeChild(popup.querySelector('.status-alert'));
        form.querySelectorAll('*').forEach(item => {
          item.style.display = (item.style.display == 'none' && 
            !item.matches('.statusMessage')) ? '' : 'none';
        });
        
      } 
      form.querySelectorAll('input').forEach(item => {
        if (item.name !== 'form_name') {
          item.value = '';
        } 
      });
      
    }
  })
};

export default openPopup;