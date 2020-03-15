'use strict';

const dropMenu = () => {
  const clubsList = document.querySelector('.clubs-list');
  clubsList.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('p')) {
      clubsList.querySelector('ul').style.display = (clubsList.querySelector('ul').style.display == 'none') ? 'block' : 'none';
    }
  });
}

export default dropMenu;