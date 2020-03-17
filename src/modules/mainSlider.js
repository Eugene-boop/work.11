const mainSlider = ({ slideName, sliderName, dotUlName = none, dotClass, dotActiveClass, arrowName, arrowNextName, arrowPrevName, }) => {
  const slide = document.querySelectorAll('.main-slider .slide'),
    dotUl = document.querySelector('.dots'),
    slider = document.querySelector('.main-slider');
    let dot;

  if (dotUlName) {
    const addDots = () => {
      let dotStr = '';
      for (let i = 0; i < slide.length; i++) {
        dotStr += `<li class="${dotClass}"></li>`;
      }
      dotUl.insertAdjacentHTML("afterbegin", dotStr);
      dotUl.childNodes[0].classList.add(dotActiveClass);
    };

    addDots();

    dot = dotUl.childNodes;
  }
    
  if (arrowName) {
    slider.insertAdjacentHTML('beforeend',`<a href="#" class="${arrowName} ${arrowLeftName}"></a>
    <a href="#" class="${arrowName} ${arrowPrevName}"></a>`);
  }

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
    if (dotUlName) {
      prevSlide(dot, currentSlide, dotActiveClass);
    } 
    currentSlide++;
    if (currentSlide >= slide.length) currentSlide = 0;
    nextSlide(slide, currentSlide);
    if (dotUlName) {
      nextSlide(dot, currentSlide, dotActiveClass);
    } 
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide(4000);
  // не работает из-за того, что часть кнопок перекрывает изображение справа
  if (dotUlName || arrowName) {
    slider.addEventListener('click', event => {
      event.preventDefault();
  
      const target = event.target;
  
      if (!target.matches('#arrow-right, #arrow-left, .dot')) return;
  
      prevSlide(slide, currentSlide);
      prevSlide(dot, currentSlide, 'dot-active');
  
      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, ind) => {
          if (elem === target) {
            currentSlide = ind;
          }
        });
      }
  
      if (currentSlide >= slide.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slide.length - 1;
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });
  
    slider.addEventListener('mouseover', e => {
      if (e.target.matches('.portfolio-btn')  ||
      event.target.matches('.dot')) {
        stopSlide();
      }
    });
  
    slider.addEventListener('mouseout', e => {
      if (e.target.matches('.portfolio-btn')  ||
      event.target.matches('.dot')) {
        startSlide();
      }
    });
  }
};

export default mainSlider;  