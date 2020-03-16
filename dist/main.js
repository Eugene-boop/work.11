/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropMenu */ \"./src/modules/dropMenu.js\");\n/* harmony import */ var _modules_openPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/openPopup */ \"./src/modules/openPopup.js\");\n/* harmony import */ var _modules_sendForms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForms */ \"./src/modules/sendForms.js\");\n/* harmony import */ var _modules_forbidInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forbidInput */ \"./src/modules/forbidInput.js\");\n/* harmony import */ var _modules_inputMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/inputMask */ \"./src/modules/inputMask.js\");\n/* harmony import */ var _modules_hideGift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hideGift */ \"./src/modules/hideGift.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/mainSlider */ \"./src/modules/mainSlider.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_modules_hideGift__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  Object(_modules_dropMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); \r\n  Object(_modules_openPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.open-popup');\r\n  Object(_modules_openPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.callback-btn');\r\n  Object(_modules_openPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.fixed-gift', _modules_hideGift__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n  Object(_modules_sendForms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  Object(_modules_forbidInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n    [/[^\\d|+]/ig, /[A-Z\\d]/ig],\r\n    ['input[type=\"tel\"]', 'input[type=\"text\"]']\r\n  );\r\n  Object(_modules_inputMask__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  Object(_modules_mainSlider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  Object(_modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n  \r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/dropMenu.js":
/*!*********************************!*\
  !*** ./src/modules/dropMenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst dropMenu = () => {\r\n  const clubsList = document.querySelector('.clubs-list');\r\n  clubsList.addEventListener('click', e => {\r\n    const target = e.target;\r\n    if (target.matches('p')) {\r\n      clubsList.querySelector('ul').style.display = (clubsList.querySelector('ul').style.display == 'none') ? 'block' : 'none';\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropMenu);\n\n//# sourceURL=webpack:///./src/modules/dropMenu.js?");

/***/ }),

/***/ "./src/modules/forbidInput.js":
/*!************************************!*\
  !*** ./src/modules/forbidInput.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst forbidInput = (pattern, selector) => {\r\n  selector.forEach((elem, i) => {\r\n    const inputs = document.querySelectorAll(elem);\r\n    inputs.forEach(input => {\r\n      input.addEventListener('input', () => {\r\n        input.value = input.value.replace(pattern[i], '');\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (forbidInput);\n\n//# sourceURL=webpack:///./src/modules/forbidInput.js?");

/***/ }),

/***/ "./src/modules/hideGift.js":
/*!*********************************!*\
  !*** ./src/modules/hideGift.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst hideGift = btn => {\r\n  if (localStorage.getItem('giftOpened')) {\r\n    return\r\n  } else if (btn) { // проверка на вызов при клике, аргументом передается кнопка: при клике\r\n    btn.remove(); \r\n    localStorage.giftOpened = true;\r\n  } else {\r\n    if(location.pathname === '/index.html' || location.pathname === '/') {\r\n      document.body.insertAdjacentHTML('afterbegin', `<div class=\"fixed-gift\" data-popup=\"#gift\">\r\n        <img src=images/gift.png alt>\r\n      </div>`);\r\n    } \r\n  }\r\n\r\n} \r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (hideGift);\n\n//# sourceURL=webpack:///./src/modules/hideGift.js?");

/***/ }),

/***/ "./src/modules/inputMask.js":
/*!**********************************!*\
  !*** ./src/modules/inputMask.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n// для применения маски нужно создать 2 инпута, один невидим\r\n// с данными для отправки, второй с маской\r\n// <input type=\"text\" name=\"number\" style=\"display:none;\">\r\n// <input type=\"text\" name=\"masknumber\"></input>\r\n// именно в такой последовательности!\r\n// применяется ко всем инпутам типа тел.\r\nconst inputMask = () => {\r\n  let inputs = document.querySelectorAll('input[name=\"phone\"]');\r\n\r\n  \r\n  inputs.forEach(inp => {\r\n    const createMask = str => {\r\n      if (!str.startsWith('+')) return '+' + str.replace(/(\\d{1})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/,   \"$1 ($2) $3-$4-$5\");\r\n      return str.replace(/(\\d{1})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, \"$1 ($2) $3-$4-$5\");\r\n    };\r\n    \r\n    const destroyMask = str => {\r\n      return str.replace(/\\D/g,'').substring(0, 16);\r\n    };\r\n\r\n    inp.nextElementSibling.addEventListener('input', function() {\r\n      inp.value = destroyMask(this.value);\r\n      this.value = createMask(this.value);\r\n    });  \r\n\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputMask);\n\n//# sourceURL=webpack:///./src/modules/inputMask.js?");

/***/ }),

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mainSlider = () => {\r\n  const slide = document.querySelectorAll('.main-slider .slide'),\r\n    dotUl = document.querySelector('.dots'),\r\n    slider = document.querySelector('.main-slider');\r\n\r\n  // const addDots = () => {\r\n  //   let dotStr = '';\r\n  //   for (let i = 0; i < slide.length; i++) {\r\n  //     dotStr += '<li class=\"dot\"></li>';\r\n  //   }\r\n  //   dotUl.insertAdjacentHTML(\"afterbegin\", dotStr);\r\n  //   dotUl.childNodes[0].classList.add('dot-active');\r\n  // };\r\n\r\n  // addDots();\r\n\r\n  // const dot = dotUl.childNodes;\r\n\r\n  let currentSlide = 0,\r\n    interval;\r\n\r\n  const prevSlide = (elem, index, strClass) => {\r\n    if (strClass) {\r\n      elem[index].classList.remove(strClass);\r\n      return;\r\n    }\r\n    elem[index].style.display = 'none';\r\n  };\r\n\r\n  const nextSlide = (elem, index, strClass) => {\r\n    if (strClass) {\r\n      elem[index].classList.add(strClass);\r\n      return;\r\n    }\r\n    elem[index].style.display = 'flex';\r\n  };\r\n\r\n  const autoPlaySlide = () => {\r\n    prevSlide(slide, currentSlide);\r\n    // prevSlide(dot, currentSlide, 'dot-active');\r\n    currentSlide++;\r\n    if (currentSlide >= slide.length) currentSlide = 0;\r\n    nextSlide(slide, currentSlide);\r\n    // nextSlide(dot, currentSlide, 'dot-active');\r\n  };\r\n\r\n  const startSlide = (time = 3000) => {\r\n    interval = setInterval(autoPlaySlide, time);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  startSlide(4000);\r\n  // не работает из-за того, что часть кнопок перекрывает изображение справа\r\n  // slider.addEventListener('click', event => {\r\n    \r\n\r\n  //   const target = event.target;\r\n  //   console.log('target: ', target);\r\n\r\n  //   if (!target.matches('.dot')) return;\r\n\r\n  //   prevSlide(slide, currentSlide);\r\n  //   prevSlide(dot, currentSlide, 'dot-active');\r\n\r\n  //   dot.forEach((elem, ind) => {\r\n  //     if (elem === target) {\r\n\r\n  //       currentSlide = ind;\r\n  //     }\r\n  //   });\r\n    \r\n\r\n  //   nextSlide(slide, currentSlide);\r\n  //   nextSlide(dot, currentSlide, 'dot-active');\r\n  // });\r\n\r\n  // slider.addEventListener('mouseover', e => {\r\n  //   if (e.target.matches('.portfolio-btn')  ||\r\n  //   event.target.matches('.dot')) {\r\n  //     stopSlide();\r\n  //   }\r\n  // });\r\n\r\n  // slider.addEventListener('mouseout', e => {\r\n  //   if (e.target.matches('.portfolio-btn')  ||\r\n  //   event.target.matches('.dot')) {\r\n  //     startSlide();\r\n  //   }\r\n  // });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSlider);  \n\n//# sourceURL=webpack:///./src/modules/mainSlider.js?");

/***/ }),

/***/ "./src/modules/openPopup.js":
/*!**********************************!*\
  !*** ./src/modules/openPopup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst openPopup = (selector, afterOpen = () => {}) => {\r\n  const openBtn = document.querySelector(selector),\r\n    popup = openBtn ? document.querySelector(openBtn.dataset.popup) : null;\r\n\r\n  if (!popup) return;\r\n  \r\n  openBtn.addEventListener('click', function(e) {\r\n    e.preventDefault();\r\n    popup.style.display = 'block';\r\n    document.body.style.cssText = 'position:fixed; width:100%;';\r\n    afterOpen(this);\r\n  });\r\n\r\n  popup.addEventListener('click', e => {\r\n    const target = e.target;\r\n    if (!target.closest('.form-content') || target.matches('.close-btn')) {\r\n      popup.style.display = 'none';\r\n      document.body.style.cssText = 'position:\"\"; width:\"\"';\r\n    }\r\n  })\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (openPopup);\n\n//# sourceURL=webpack:///./src/modules/openPopup.js?");

/***/ }),

/***/ "./src/modules/sendForms.js":
/*!**********************************!*\
  !*** ./src/modules/sendForms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst sendForms = () => {\r\n  document.addEventListener('submit', e => e.preventDefault());\r\n\r\n  const send = (form) => {\r\n    const errorMessage = 'Что-то пошло не так',\r\n      successMessage = 'Спасибо! Скоро свяжемся',\r\n      loadMessage = 'Загрузка...';\r\n\r\n    const statusMessage = document.createElement('div');\r\n    statusMessage.textContent = ``;\r\n    statusMessage.style.fontSize = '1.5rem';\r\n    statusMessage.style.color = 'white';\r\n    statusMessage.style.marginTop = '5px';\r\n    form.appendChild(statusMessage);\r\n\r\n    const statusAlert = document.createElement('div');\r\n    statusAlert.style.cssText = 'font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;';\r\n\r\n    form.addEventListener('submit', e => {\r\n      statusMessage.style.display = 'block';\r\n      if (form.closest('#cards')) statusMessage.style.color = 'black';\r\n      statusMessage.textContent = loadMessage;\r\n\r\n      const formData = new FormData(form);\r\n      const body = {};\r\n      formData.forEach((val, key) => {\r\n        if (!key.startsWith('mask')) {\r\n          body[key] = val;\r\n        }\r\n      });\r\n\r\n      postData(body)\r\n        .then(response => {\r\n          if (response.status !== 200)  throw new Error(response.statusText);\r\n          statusAlert.textContent = successMessage;\r\n          form.innerHTML = '';\r\n          form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';\r\n          if (form.closest('#cards')) statusAlert.style.color = 'black';\r\n          form.insertAdjacentElement('afterbegin', statusAlert);\r\n          form.querySelectorAll('input').forEach(item => {\r\n            item.classList.remove('success');\r\n            item.value = '';\r\n          });\r\n        })\r\n        .catch(error => {\r\n          statusAlert.textContent = errorMessage;\r\n          form.innerHTML = '';\r\n          form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';\r\n          if (form.closest('#cards')) statusAlert.style.color = 'black';\r\n          form.insertAdjacentElement('afterbegin', statusAlert);\r\n          console.log(error);\r\n        })\r\n        .finally( () => {\r\n          statusMessage.style.display = 'none';\r\n        });\r\n\r\n\r\n\r\n    });\r\n\r\n    const postData = data => fetch('./server.php', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data), \r\n    });\r\n  };\r\n\r\n  const forms = document.querySelectorAll('form');\r\n  forms.forEach(item => {\r\n    send(item);\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendForms);\n\n//# sourceURL=webpack:///./src/modules/sendForms.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sliderCarousel = () => {\r\n  const carousel = document.querySelector('.carousel');\r\n  /* этот код помечает картинки, для удобства разработки */\r\n  let i = 1;\r\n  for(let li of carousel.querySelectorAll('.slide')) {\r\n    li.style.position = 'relative';\r\n    li.insertAdjacentHTML('beforeend', `<span style=\"position:absolute;left:0;top:0\">${i}</span>`);\r\n    i++;\r\n  }\r\n\r\n  /* конфигурация */\r\n  let width = 222; // ширина картинки\r\n  let count = 1; // видимое количество изображений\r\n\r\n  let list = carousel.querySelector('.images');\r\n  let listElems = carousel.querySelectorAll('.slide');\r\n  console.log('listElems: ', listElems);\r\n\r\n  let position = 0; // положение ленты прокрутки\r\n\r\n  carousel.querySelector('.prev').onclick = function() {\r\n    // сдвиг влево\r\n    position += width * count;\r\n    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент\r\n    position = Math.min(position, 0)\r\n    list.style.marginLeft = position + 'px';\r\n  };\r\n\r\n  carousel.querySelector('.next').onclick = function() {\r\n    if (position === -width * (listElems.length / 2)) return;\r\n    position -= width * count;\r\n    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент\r\n    position = Math.max(position, -width * (listElems.length - count));\r\n    list.style.marginLeft = position + 'px';\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderCarousel);\n\n//# sourceURL=webpack:///./src/modules/sliderCarousel.js?");

/***/ })

/******/ });