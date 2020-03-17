const smoothMenu = () => {
  const topMenu = document.querySelector('.hidden-small'),
    topMenuBig = document.querySelector('.popup-menu.hidden-large');

  topMenu.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if (!target.matches('a')) return;
    document.querySelector(target.href.match(/#.+$/)[0]).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  topMenuBig.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if (!target.matches('a')) return;
    document.querySelector(target.href.match(/#.+$/)[0]).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

export default smoothMenu;
