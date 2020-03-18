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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropMenu */ \"./src/modules/dropMenu.js\");\n/* harmony import */ var _modules_openPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/openPopup */ \"./src/modules/openPopup.js\");\n/* harmony import */ var _modules_sendForms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForms */ \"./src/modules/sendForms.js\");\n/* harmony import */ var _modules_forbidInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forbidInput */ \"./src/modules/forbidInput.js\");\n/* harmony import */ var _modules_inputMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/inputMask */ \"./src/modules/inputMask.js\");\n/* harmony import */ var _modules_hideGift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hideGift */ \"./src/modules/hideGift.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n/* harmony import */ var _modules_upArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/upArrow */ \"./src/modules/upArrow.js\");\n/* harmony import */ var _modules_fixMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fixMenu */ \"./src/modules/fixMenu.js\");\n/* harmony import */ var _modules_smoothMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/smoothMenu */ \"./src/modules/smoothMenu.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_popupMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/popupMenu */ \"./src/modules/popupMenu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_modules_hideGift__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\nObject(_modules_upArrow__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\nconsole.log(location);\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const documentWidth = parseInt(document.documentElement.clientWidth),\r\n  windowsWidth = parseInt(window.innerWidth),\r\n  scrollbarWidth = windowsWidth - documentWidth;\r\n\r\n  Object(_modules_dropMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); \r\n  Object(_modules_openPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scrollbarWidth, '.open-popup', );\r\n  Object(_modules_openPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scrollbarWidth, '.callback-btn');\r\n  Object(_modules_openPopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scrollbarWidth, '.fixed-gift', _modules_hideGift__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n  Object(_modules_sendForms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(scrollbarWidth);\r\n  Object(_modules_forbidInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n    [/[^\\d|+]/ig, /[A-Z\\d]/ig],\r\n    ['input[type=\"tel\"]', 'input[type=\"text\"]']\r\n  );\r\n  Object(_modules_inputMask__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    slideName: '.main-slider .slide',\r\n    sliderName: '.main-slider',\r\n    slideTime: 4000\r\n  });\r\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    slideName: '.gallery-slider .slide',\r\n    sliderName: '.gallery-slider',\r\n    slideTime: 2500,\r\n    dotUlName: 'gallery-slider-dots',\r\n    dotClass: 'gallery-slider-dot',\r\n    dotActiveClass: 'gallery-dot-active',\r\n    arrowName: 'arrow gallery-arrow',\r\n    arrowNextName: 'next',\r\n    arrowPrevName: 'prev',\r\n\r\n  });\r\n  Object(_modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n  Object(_modules_fixMenu__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n  Object(_modules_smoothMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n  Object(_modules_popupMenu__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst calc = () => {\r\n  if (location.pathname === '/index.html' || location.pathname === '/' || location.pathname === '') {\r\n    const prices = {\r\n      'mozaika': {\r\n        1: 1999,\r\n        6: 9900,\r\n        9: 13900,\r\n        12: 19900,\r\n      },\r\n      'schelkovo': {\r\n        1: 2999,\r\n        6: 14990,\r\n        9: 21990,\r\n        12: 24990,\r\n      }\r\n    },\r\n    discount = [\r\n      ['ТЕЛО2019', '30'],\r\n    ]\r\n    document.querySelector('#card_order').addEventListener('input', e => {\r\n      const target = e.target,\r\n        promocode = document.querySelector('#card_order input[name=\"promocode\"]').value,\r\n        clubName = document.querySelector('input[name=\"club-name\"]:checked').value,\r\n        clubMonth =  document.querySelector('input[name=\"card-type\"]:checked').value;\r\n\r\n      if (target.matches('#card_check')) return;\r\n\r\n      let discountedPrice =  prices[clubName][clubMonth];\r\n      discount.forEach(promo => {\r\n        if ((new RegExp(promo[0], 'i')).test(promocode)) discountedPrice = Math.ceil((discountedPrice * (100 - promo[1])/100) / 10) * 10;\r\n      })\r\n      document.querySelector('#card_order input[name=\"price\"]').value = discountedPrice;\r\n      document.querySelector('#price-total').textContent = discountedPrice;\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (calc);\n\n//# sourceURL=webpack:///./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/dropMenu.js":
/*!*********************************!*\
  !*** ./src/modules/dropMenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst dropMenu = () => {\r\n  const clubsList = document.querySelector('.clubs-list');\r\n  clubsList.addEventListener('click', e => {\r\n    const target = e.target;\r\n    if (target.matches('p')) {\r\n      clubsList.querySelector('ul').style.display = (getComputedStyle(clubsList.querySelector('ul')).display == 'none') ? 'block' : 'none';\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropMenu);\n\n//# sourceURL=webpack:///./src/modules/dropMenu.js?");

/***/ }),

/***/ "./src/modules/fixMenu.js":
/*!********************************!*\
  !*** ./src/modules/fixMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fixMenu = () => {\r\n  const menu = document.querySelector('.top-menu'),\r\n    burgerShowWidth = 767;\r\n  const check = () => {\r\n      if (window.pageYOffset > document.body.querySelector('.head').offsetHeight && document.body.offsetWidth <= burgerShowWidth) {\r\n        menu.style.position = 'fixed';\r\n      } else menu.style.position = '';\r\n  };\r\n  check();\r\n  window.addEventListener('scroll', () => {\r\n    check();\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fixMenu);\n\n//# sourceURL=webpack:///./src/modules/fixMenu.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst hideGift = btn => {\r\n  if (localStorage.getItem('giftOpened')) {\r\n    return\r\n  } else if (btn) { // проверка на вызов при клике, аргументом передается кнопка: при клике\r\n    btn.remove(); \r\n    localStorage.giftOpened = true;\r\n  } else {\r\n    if(location.pathname === '/index.html' || location.pathname === '/' || location.pathname === '') {\r\n      document.body.insertAdjacentHTML('afterbegin', `<div class=\"fixed-gift\" data-popup=\"#gift\">\r\n        <img src=images/gift.png alt>\r\n      </div>`);\r\n    } \r\n  }\r\n\r\n} \r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (hideGift);\n\n//# sourceURL=webpack:///./src/modules/hideGift.js?");

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

/***/ "./src/modules/openPopup.js":
/*!**********************************!*\
  !*** ./src/modules/openPopup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst openPopup = (scrollWidth, selector, afterOpen = () => {}) => {\r\n  const openBtn = document.querySelector(selector),\r\n    popup = openBtn ? document.querySelector(openBtn.dataset.popup) : null,\r\n    wrapper = document.querySelectorAll('.wrapper');\r\n\r\n  if (!popup) return;\r\n  \r\n  openBtn.addEventListener('click', function(e) {\r\n    e.preventDefault();\r\n    popup.style.display = 'block';\r\n    document.body.style.cssText = ` overflow: hidden; width: 100%`;\r\n    wrapper.forEach(element => {\r\n      element.style.paddingRight = +getComputedStyle(element).paddingRight.slice(0, -2) + scrollWidth + 'px';\r\n    });\r\n    afterOpen(this);\r\n  });\r\n\r\n  popup.addEventListener('click', e => {\r\n    const target = e.target;\r\n    if (!target.closest('.form-content') || target.matches('.close-btn')) {\r\n      popup.style.display = 'none';\r\n      document.body.style.cssText = ``;\r\n      wrapper.forEach(element => {\r\n        element.style.paddingRight = '';\r\n      });\r\n      const form = popup.querySelector('form');\r\n\r\n      if (form.querySelector('.status-alert')) {\r\n        form.removeChild(popup.querySelector('.status-alert'));\r\n        form.querySelectorAll('*').forEach(item => {\r\n          item.style.display = (item.style.display == 'none' && \r\n            !item.matches('.statusMessage')) ? '' : 'none';\r\n        });\r\n        \r\n      } \r\n      form.querySelectorAll('input').forEach(item => {\r\n        if (item.name !== 'form_name') {\r\n          item.value = '';\r\n        } \r\n      });\r\n      \r\n    }\r\n  })\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (openPopup);\n\n//# sourceURL=webpack:///./src/modules/openPopup.js?");

/***/ }),

/***/ "./src/modules/popupMenu.js":
/*!**********************************!*\
  !*** ./src/modules/popupMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst popupMenu = () => {\r\n  const topMenu = document.querySelector('.top-menu'),\r\n    popMenu = document.querySelector('.popup-menu.hidden-large');\r\n\r\n  topMenu.addEventListener('click', e => {\r\n    if (!e.target.matches('img')) return;\r\n    popMenu.style.display = 'flex';\r\n  });\r\n\r\n  popMenu.addEventListener('click', e => {\r\n    if (!e.target.matches('img') && !e.target.matches('a')) return;\r\n    popMenu.style.display = '';\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popupMenu);\n\n//# sourceURL=webpack:///./src/modules/popupMenu.js?");

/***/ }),

/***/ "./src/modules/sendForms.js":
/*!**********************************!*\
  !*** ./src/modules/sendForms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst sendForms = scrollWidth => {\r\n  document.addEventListener('submit', e => e.preventDefault());\r\n  \r\n  const send = (form) => {\r\n    const errorMessage = 'Что-то пошло не так',\r\n      successMessage = 'Спасибо! Скоро свяжемся';\r\n    \r\n    const statusMessage = document.createElement('div');\r\n    statusMessage.textContent =  'Загрузка...';\r\n    statusMessage.style.fontSize = '1.5rem';\r\n    statusMessage.style.color = 'white';\r\n    statusMessage.style.marginTop = '5px';\r\n    statusMessage.style.display = 'none';\r\n    statusMessage.classList.add('statusMessage');\r\n    form.appendChild(statusMessage);\r\n\r\n    const statusAlert = document.createElement('div');\r\n    statusAlert.style.cssText = 'font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;';\r\n    statusAlert.classList.add('status-alert');\r\n\r\n    const wrapper = document.querySelectorAll('.wrapper');\r\n\r\n    const showPopup = msg => {\r\n      const popup = document.getElementById('thanks');\r\n      if (msg) {\r\n        popup.querySelector('h4').textContent = 'Ошибка';\r\n        popup.querySelector('p').innerHTML = `Сообщите оператору или на почту </br> ${msg}`;\r\n      }\r\n      popup.style.display = 'block';\r\n      document.body.style.cssText = ` overflow: hidden; width: 100%`;\r\n      wrapper.forEach(element => {\r\n        element.style.paddingRight = +getComputedStyle(element).paddingRight.slice(0, -2) + scrollWidth + 'px';\r\n      });\r\n      const hide = e => {\r\n        const target = e.target;\r\n        if (!target.closest('.form-content') || target.matches('.close-btn')) {\r\n          popup.style.display = 'none';\r\n          document.body.style.cssText = ``;\r\n          wrapper.forEach(element => {\r\n            element.style.paddingRight = '';\r\n          });\r\n          popup.removeEventListener('click', hide);\r\n        }\r\n      };\r\n\r\n      popup.addEventListener('click', hide)\r\n    };\r\n\r\n    const informate = (error = null) => {\r\n      if (error) {\r\n        statusAlert.textContent = errorMessage;\r\n      }else {\r\n        statusAlert.textContent = successMessage;\r\n      }\r\n      if (form.closest('#banner') || form.closest('#footer')) {\r\n        showPopup(error);\r\n        return;\r\n      }\r\n      if (form.closest('#cards')) {\r\n        if (error) {\r\n          statusMessage.textContent =  errorMessage;\r\n        }else {\r\n          statusMessage.textContent =  successMessage;\r\n        }\r\n        return;\r\n      };\r\n      form.querySelectorAll('*').forEach(item => {\r\n        item.style.display = 'none';\r\n      });          \r\n      form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';\r\n      form.insertAdjacentElement('afterbegin', statusAlert);\r\n    };\r\n\r\n    form.addEventListener('submit', e => {\r\n      statusMessage.textContent =  'Загрузка...';\r\n      statusMessage.style.display = '';\r\n      if (form.closest('#cards')) statusMessage.style.color = 'black';\r\n\r\n      const formData = new FormData(form);\r\n      const body = {};\r\n      formData.forEach((val, key) => {\r\n        if (!key.startsWith('mask')) {\r\n          body[key] = val;\r\n        }\r\n      });\r\n\r\n      form.querySelectorAll('input').forEach(item => {\r\n        if (item.type !== 'checkbox' && item.type !== 'radio' && item.name !== 'form_name'  ) {\r\n          item.value = '';\r\n        } else if ((form.matches('#card_order') && (item.value === '1' || item.value ===  'mozaika')) ||\r\n        (form.matches('#footer_form') && item.value ===  'mozaika') || (form.matches('#card_order') && item.value === '1s')) {\r\n          item.checked = true;\r\n        } else item.checked = false;\r\n\r\n      });\r\n\r\n      postData(body)\r\n        .then(response => {\r\n          if (response.status !== 200)  throw new Error(response.statusText);\r\n          informate();\r\n        })\r\n        .catch(error => {\r\n          informate(error);\r\n          console.log(error);\r\n        })\r\n        .finally( () => {\r\n          if (form.closest('#cards')) {\r\n            setTimeout(() => {\r\n              statusMessage.style.display = 'none';\r\n              statusMessage.textContent =  'Загрузка...';\r\n            }, 3000);\r\n            return;\r\n          }\r\n          statusMessage.style.display = 'none';\r\n        });\r\n\r\n\r\n\r\n    });\r\n\r\n    const postData = data => fetch('./server.php', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data), \r\n    });\r\n  };\r\n\r\n  const forms = document.querySelectorAll('form');\r\n  forms.forEach(item => {\r\n    send(item);\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendForms);\n\n//# sourceURL=webpack:///./src/modules/sendForms.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst slider = ({ slideName, sliderName, dotUlName, dotClass, dotActiveClass, arrowName, arrowNextName, arrowPrevName, slideTime }) => {\r\n\r\n  const slider = document.querySelector(sliderName);\r\n    let dot,\r\n    slide = document.querySelectorAll(slideName); // slideName\r\n\r\n\r\n  for (let i = 1; i < slide.length; i++) {\r\n    slide[i].style.display = 'none';\r\n  }\r\n  \r\n  if (arrowName) {\r\n    slider.style.position = 'relative';\r\n    slider.insertAdjacentHTML('beforeend',`<a href=\"#\" class=\"${arrowName} ${arrowPrevName}\"></a>\r\n    <a href=\"#\" class=\"${arrowName} ${arrowNextName}\"></a>`);\r\n  }\r\n\r\n  if (dotUlName) {\r\n    const dotUl = document.createElement('ul');\r\n    dotUl.classList.add(dotUlName);\r\n    slider.parentNode.style.position = 'relative';\r\n    slider.insertAdjacentElement('beforeend', dotUl);\r\n\r\n    const addDots = () => {\r\n      let dotStr = '';\r\n      for (let i = 0; i < slide.length; i++) {\r\n        dotStr += `<li class=\"${dotClass}\"></li>`;\r\n      }\r\n      dotUl.insertAdjacentHTML(\"afterbegin\", dotStr);\r\n      dotUl.childNodes[0].classList.add(dotActiveClass);\r\n    };\r\n\r\n    addDots();\r\n\r\n    dot = dotUl.childNodes;\r\n  }\r\n    \r\n\r\n  let currentSlide = 0,\r\n    interval,\r\n    startSlide,\r\n    stopSlide;\r\n\r\n  const prevSlide = (elem, index, strClass) => {\r\n    if (strClass) {\r\n      elem[index].classList.remove(strClass);\r\n      return;\r\n    }\r\n    elem[index].style.display = 'none';\r\n  };\r\n\r\n  const nextSlide = (elem, index, strClass) => {\r\n    if (strClass) {\r\n      elem[index].classList.add(strClass);\r\n      return;\r\n    }\r\n    elem[index].style.display = 'flex';\r\n  };\r\n\r\n  if (slideTime) {\r\n    const autoPlaySlide = () => {\r\n      prevSlide(slide, currentSlide);\r\n      if (dotUlName) {\r\n        prevSlide(dot, currentSlide, dotActiveClass);\r\n      } \r\n      currentSlide++;\r\n      if (currentSlide >= slide.length) currentSlide = 0;\r\n      nextSlide(slide, currentSlide);\r\n      if (dotUlName) {\r\n        nextSlide(dot, currentSlide, dotActiveClass);\r\n      } \r\n    };\r\n\r\n    startSlide = (time) => {\r\n      interval = setInterval(autoPlaySlide, time);\r\n    };\r\n\r\n    stopSlide = () => {\r\n      clearInterval(interval);\r\n    };\r\n\r\n    startSlide(slideTime);\r\n  }\r\n\r\n  \r\n\r\n  // не работает из-за того, что часть кнопок перекрывает изображение справа\r\n  if ((dotUlName || arrowName) && sliderName) {\r\n    slider.addEventListener('click', event => {\r\n      event.preventDefault();\r\n  \r\n      const target = event.target;\r\n  \r\n      if (!target.matches(`.${arrowNextName}, .${arrowPrevName}, .${dotClass}`)) return;\r\n  \r\n      prevSlide(slide, currentSlide);\r\n      if (dotUlName) {\r\n        prevSlide(dot, currentSlide, dotActiveClass);\r\n      } \r\n  \r\n      if (target.matches(`.${arrowNextName}`)) {\r\n        currentSlide++;\r\n      } else if (target.matches(`.${arrowPrevName}`)) {\r\n        currentSlide--;\r\n      } else if (target.matches(`.${dotClass}`)) {\r\n        dot.forEach((elem, ind) => {\r\n          if (elem === target) {\r\n            currentSlide = ind;\r\n          }\r\n        });\r\n      }\r\n  \r\n      if (currentSlide >= slide.length) currentSlide = 0;\r\n      if (currentSlide < 0) currentSlide = slide.length - 1;\r\n      nextSlide(slide, currentSlide);\r\n      if (dotUlName) {\r\n        nextSlide(dot, currentSlide, dotActiveClass);\r\n      } \r\n    });\r\n  \r\n    if (slideTime) {\r\n      slider.addEventListener('mouseover', e => {\r\n        if (e.target.matches(`.${dotClass}`)  ||\r\n        e.target.matches(`.${arrowPrevName}`) || e.target.matches(`.${arrowNextName}`)) {\r\n          stopSlide();\r\n        }\r\n      });\r\n    \r\n      slider.addEventListener('mouseout', e => {\r\n        if (e.target.matches(`.${dotClass}`)  ||\r\n        e.target.matches(`.${arrowPrevName}`) || e.target.matches(`.${arrowNextName}`)) {\r\n          startSlide(slideTime);\r\n        }\r\n      });\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);  \n\n//# sourceURL=webpack:///./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sliderCarousel = () => {\r\n  const carousel = document.querySelector('.carousel');\r\n  /* этот код помечает картинки, для удобства разработки */\r\n  let i = 1;\r\n  for(let li of carousel.querySelectorAll('.slide')) {\r\n    li.style.position = 'relative';\r\n    li.insertAdjacentHTML('beforeend', `<span style=\"position:absolute;left:0;top:0\">${i}</span>`);\r\n    i++;\r\n  }\r\n\r\n  /* конфигурация */\r\n  let width = 222; // ширина картинки\r\n  let count = 1; // видимое количество изображений\r\n\r\n  let list = carousel.querySelector('.images');\r\n  let listElems = carousel.querySelectorAll('.slide');\r\n\r\n  let position = 0; // положение ленты прокрутки\r\n\r\n  carousel.querySelector('.prev').onclick = function() {\r\n    // сдвиг влево\r\n    position += width * count;\r\n    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент\r\n    position = Math.min(position, 0)\r\n    list.style.marginLeft = position + 'px';\r\n  };\r\n\r\n  carousel.querySelector('.next').onclick = function() {\r\n    if (position === -width * (listElems.length / 2)) return;\r\n    position -= width * count;\r\n    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент\r\n    position = Math.max(position, -width * (listElems.length - count));\r\n    list.style.marginLeft = position + 'px';\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderCarousel);\n\n//# sourceURL=webpack:///./src/modules/sliderCarousel.js?");

/***/ }),

/***/ "./src/modules/smoothMenu.js":
/*!***********************************!*\
  !*** ./src/modules/smoothMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst smoothMenu = () => {\r\n  const topMenu = document.querySelector('.hidden-small'),\r\n    topMenuBig = document.querySelector('.popup-menu.hidden-large');\r\n\r\n  topMenu.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    const target = e.target;\r\n    if (!target.matches('a')) return;\r\n    document.querySelector(target.href.match(/#.+$/)[0]).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    });\r\n  });\r\n\r\n  topMenuBig.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    const target = e.target;\r\n    if (!target.matches('a')) return;\r\n    document.querySelector(target.href.match(/#.+$/)[0]).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (smoothMenu);\r\n\n\n//# sourceURL=webpack:///./src/modules/smoothMenu.js?");

/***/ }),

/***/ "./src/modules/upArrow.js":
/*!********************************!*\
  !*** ./src/modules/upArrow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst upArrow = () => {\r\n  const totop = document.getElementById('totop');\r\n  const check = () => {\r\n    if (window.pageYOffset > document.body.querySelector('header').offsetHeight) {\r\n      totop.style.display = '';\r\n    } else totop.style.display = 'none';\r\n  };\r\n  check();\r\n  window.addEventListener('scroll', () => {\r\n    check();\r\n  });\r\n  // плавно\r\n  totop.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: 'smooth'\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (upArrow);\n\n//# sourceURL=webpack:///./src/modules/upArrow.js?");

/***/ })

/******/ });