const sliderCarousel = () => {
  const carousel = document.querySelector('.carousel');
  /* этот код помечает картинки, для удобства разработки */
  let i = 1;
  for(let li of carousel.querySelectorAll('.slide')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  }

  /* конфигурация */
  let width = 222; // ширина картинки
  let count = 1; // видимое количество изображений

  let list = carousel.querySelector('.images');
  let listElems = carousel.querySelectorAll('.slide');

  let position = 0; // положение ленты прокрутки

  carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

  carousel.querySelector('.next').onclick = function() {
    if (position === -width * (listElems.length / 2)) return;
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };
};

export default sliderCarousel;