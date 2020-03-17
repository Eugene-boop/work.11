const fixMenu = () => {
  const menu = document.querySelector('.top-menu'),
    burgerShowWidth = 767;
  const check = () => {
      if (window.pageYOffset > document.body.querySelector('.head').offsetHeight && document.body.offsetWidth <= burgerShowWidth) {
        menu.style.position = 'fixed';
      } else menu.style.position = '';
  };
  check();
  window.addEventListener('scroll', () => {
    check();
  });
};

export default fixMenu;