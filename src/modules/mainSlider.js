const mainSlider = () => {
  const slide = document.querySelectorAll('.main-slider .slide'),
    dotUl = document.querySelector('.dots'),
    slider = document.querySelector('.main-slider');

  // const addDots = () => {
  //   let dotStr = '';
  //   for (let i = 0; i < slide.length; i++) {
  //     dotStr += '<li class="dot"></li>';
  //   }
  //   dotUl.insertAdjacentHTML("afterbegin", dotStr);
  //   dotUl.childNodes[0].classList.add('dot-active');
  // };

  // addDots();

  // const dot = dotUl.childNodes;

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    if (strClass) {
      elem[index].classList.remove(strClass);
      return;
    }
    elem[index].style.display = 'none';
  };

  const nextSlide = (elem, index, strClass) => {
    if (strClass) {
      elem[index].classList.add(strClass);
      return;
    }
    elem[index].style.display = 'flex';
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide);
    // prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) currentSlide = 0;
    nextSlide(slide, currentSlide);
    // nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide(4000);
  // не работает из-за того, что часть кнопок перекрывает изображение справа
  // slider.addEventListener('click', event => {
    

  //   const target = event.target;
  //   console.log('target: ', target);

  //   if (!target.matches('.dot')) return;

  //   prevSlide(slide, currentSlide);
  //   prevSlide(dot, currentSlide, 'dot-active');

  //   dot.forEach((elem, ind) => {
  //     if (elem === target) {

  //       currentSlide = ind;
  //     }
  //   });
    

  //   nextSlide(slide, currentSlide);
  //   nextSlide(dot, currentSlide, 'dot-active');
  // });

  // slider.addEventListener('mouseover', e => {
  //   if (e.target.matches('.portfolio-btn')  ||
  //   event.target.matches('.dot')) {
  //     stopSlide();
  //   }
  // });

  // slider.addEventListener('mouseout', e => {
  //   if (e.target.matches('.portfolio-btn')  ||
  //   event.target.matches('.dot')) {
  //     startSlide();
  //   }
  // });
};

export default mainSlider;  