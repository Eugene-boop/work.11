const slider = ({ slideName, sliderName, dotUlName, dotClass, dotActiveClass, arrowName, arrowNextName, arrowPrevName, slideTime }) => {

  const slider = document.querySelector(sliderName);
    let dot,
    slide = document.querySelectorAll(slideName); // slideName


  for (let i = 1; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  
  if (arrowName) {
    slider.style.position = 'relative';
    slider.insertAdjacentHTML('beforeend',`<a href="#" class="${arrowName} ${arrowPrevName}"></a>
    <a href="#" class="${arrowName} ${arrowNextName}"></a>`);
  }

  if (dotUlName) {
    const dotUl = document.createElement('ul');
    dotUl.classList.add(dotUlName);
    slider.parentNode.style.position = 'relative';
    slider.insertAdjacentElement('beforeend', dotUl);

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
    

  let currentSlide = 0,
    interval,
    startSlide,
    stopSlide;

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

  if (slideTime) {
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

    startSlide = (time) => {
      interval = setInterval(autoPlaySlide, time);
    };

    stopSlide = () => {
      clearInterval(interval);
    };

    startSlide(slideTime);
  }

  

  // не работает из-за того, что часть кнопок перекрывает изображение справа
  if ((dotUlName || arrowName) && sliderName) {
    slider.addEventListener('click', event => {
      event.preventDefault();
  
      const target = event.target;
  
      if (!target.matches(`.${arrowNextName}, .${arrowPrevName}, .${dotClass}`)) return;
  
      prevSlide(slide, currentSlide);
      if (dotUlName) {
        prevSlide(dot, currentSlide, dotActiveClass);
      } 
  
      if (target.matches(`.${arrowNextName}`)) {
        currentSlide++;
      } else if (target.matches(`.${arrowPrevName}`)) {
        currentSlide--;
      } else if (target.matches(`.${dotClass}`)) {
        dot.forEach((elem, ind) => {
          if (elem === target) {
            currentSlide = ind;
          }
        });
      }
  
      if (currentSlide >= slide.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slide.length - 1;
      nextSlide(slide, currentSlide);
      if (dotUlName) {
        nextSlide(dot, currentSlide, dotActiveClass);
      } 
    });
  
    if (slideTime) {
      slider.addEventListener('mouseover', e => {
        if (e.target.matches(`.${dotClass}`)  ||
        e.target.matches(`.${arrowPrevName}`) || e.target.matches(`.${arrowNextName}`)) {
          stopSlide();
        }
      });
    
      slider.addEventListener('mouseout', e => {
        if (e.target.matches(`.${dotClass}`)  ||
        e.target.matches(`.${arrowPrevName}`) || e.target.matches(`.${arrowNextName}`)) {
          startSlide(slideTime);
        }
      });
    }
  }
};

export default slider;  