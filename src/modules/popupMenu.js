const popupMenu = () => {
  const topMenu = document.querySelector('.top-menu'),
    popMenu = document.querySelector('.popup-menu.hidden-large');

  topMenu.addEventListener('click', e => {
    if (!e.target.matches('img')) return;
    popMenu.style.display = 'flex';
  });

  popMenu.addEventListener('click', e => {
    if (!e.target.matches('img') && !e.target.matches('a')) return;
    popMenu.style.display = '';
  });
};

export default popupMenu;