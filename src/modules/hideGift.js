'use strict';

const hideGift = btn => {
  if (localStorage.getItem('giftOpened')) {
    return
  } else if (btn) { // проверка на вызов при клике, аргументом передается кнопка: при клике
    btn.remove(); 
    localStorage.giftOpened = true;
  } else {
    document.body.insertAdjacentHTML('afterbegin', `<div class="fixed-gift" data-popup="#gift">
    <img src=images/gift.png alt>
  </div>`);
  }

} 

export default hideGift;