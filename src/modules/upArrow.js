const upArrow = () => {
  const totop = document.getElementById('totop');
  const check = () => {
    if (window.pageYOffset > document.body.querySelector('header').offsetHeight) {
      totop.style.display = '';
    } else totop.style.display = 'none';
  };
  check();
  window.addEventListener('scroll', () => {
    check();
  });
  // плавно
  totop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

export default upArrow;