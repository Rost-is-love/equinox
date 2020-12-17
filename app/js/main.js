!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ({\n  $window: window,\n  $document: document,\n  $html: document.documentElement,\n  $body: document.body\n});\n\n//# sourceURL=webpack:///./src/js/_vars.js?')},"./src/js/functions/resize.js":
/*!************************************!*\
  !*** ./src/js/functions/resize.js ***!
  \************************************/
/*! exports provided: resizeContent */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resizeContent\", function() { return resizeContent; });\nvar resizeContent = function resizeContent(selector) {\n  var mobileWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 576;\n  var isPlugin = arguments.length > 2 ? arguments[2] : undefined;\n  var desktopAction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var mobileAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n\n  if (!isPlugin) {\n    // actions with selector\n    if (window.innerWidth > mobileWidth) {\n      desktopAction();\n    } else {\n      mobileAction();\n    }\n  } else {\n    if (window.innerWidth <= mobileWidth && selector.dataset.pluginActivated == 'false') {\n      mobileAction();\n      selector.dataset.pluginActivated = 'true';\n    }\n\n    if (window.innerWidth > mobileWidth) {\n      desktopAction();\n      selector.dataset.pluginActivated = 'false';\n    }\n  }\n}; // plugin selector must have data-plugin-activated attribute\n\n/*\nconst slider = document.querySelector('.swiper-container');\n\nlet mySwiper;\n\nfunction sliderMobile() {\n\tmySwiper = new Swiper(slider, {\n\t\tspeed: 400,\n\t\tspaceBetween: 100\n\t});\n}\n\nfunction disableSlider() {\n\tif (slider.classList.contains('swiper-container-initialized')) {\n\t\tmySwiper.destroy();\n\t}\n}\n\nresizeContent(slider, 768, true, disableSlider, sliderMobile);\n\nwindow.addEventListener('resize', () => {\n\tresizeContent(slider, 768, true, disableSlider, sliderMobile);\n});\n\n*/\n\n//# sourceURL=webpack:///./src/js/functions/resize.js?")},"./src/js/functions/smooth-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/smooth-scroll.js ***!
  \*******************************************/
/*! no static exports found */function(module,exports){eval("var anchor = document.querySelector('.to-projects');\nanchor.addEventListener('click', function (e) {\n  e.preventDefault();\n  var blockID = anchor.getAttribute('href').substr(1);\n  document.getElementById(blockID).scrollIntoView({\n    behavior: 'smooth',\n    block: 'start'\n  });\n});\n/* const scrollTo = (element) => {\n\twindow.scroll({\n\t\tbehavior: 'smooth',\n\t\tleft: 0,\n\t\ttop: element.offsetTop // - document.querySelector('.nav').clientHeight,\n\t});\n}\n\n\n// usage\n\nanchors.forEach((el) => {\n\tel.addEventListener('click', (e) => {\n\t\te.preventDefault();\n\n\t\tlet id = e.currentTarget.getAttribute('href');\n\n\t\tscrollTo(document.querySelector(id))\n\t});\n}); */\n\n//# sourceURL=webpack:///./src/js/functions/smooth-scroll.js?")},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.min.js */ \"./src/js/vendor/focus-visible.min.js\");\n/* harmony import */ var _vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ \"./src/js/_vars.js\");\n/* harmony import */ var _functions_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/smooth-scroll */ \"./src/js/functions/smooth-scroll.js\");\n/* harmony import */ var _functions_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _functions_resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/resize */ \"./src/js/functions/resize.js\");\n\n\n\n // import {disableScroll, enableScroll} from './functions/stop-scroll';\n//disableScroll(fix) // fix -> class of element with position: fixed\n\nvar astrofall = document.querySelector('.first-game__link');\nvar spacetor = document.querySelector('.second-game__link');\nvar hayseed = document.querySelector('.third-game__link');\nvar astrofallPopup = document.querySelector('.first-popup');\nvar spacetorPopup = document.querySelector('.second-popup');\nvar hayseedPopup = document.querySelector('.third-popup');\nvar gamePopup = document.querySelectorAll('.game-popup');\nvar closePopup = document.querySelectorAll('.game-popup__close');\nvar body = document.body;\n\nvar addPopup = function addPopup(popup) {\n  popup.classList.add('popup-open');\n};\n\nvar removePopup = function removePopup() {\n  gamePopup.forEach(function (e) {\n    e.classList.remove('popup-open');\n  });\n};\n\nvar disableScroll = function disableScroll() {\n  var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';\n  body.style.paddingRight = paddingOffset;\n  body.classList.add('disable-scroll');\n};\n\nvar enableScroll = function enableScroll() {\n  body.classList.remove('disable-scroll');\n  body.style.paddingRight = '0px';\n};\n\nastrofall.addEventListener('click', function () {\n  addPopup(astrofallPopup);\n  disableScroll();\n});\nspacetor.addEventListener('click', function () {\n  addPopup(spacetorPopup);\n  disableScroll();\n});\nhayseed.addEventListener('click', function () {\n  addPopup(hayseedPopup);\n  disableScroll();\n});\nclosePopup.forEach(function (el) {\n  el.addEventListener('click', function () {\n    removePopup();\n    enableScroll();\n  });\n});\ngamePopup.forEach(function (el) {\n  el.addEventListener('click', function (e) {\n    if (e.target === el) {\n      removePopup(el);\n      enableScroll();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?")},"./src/js/vendor/focus-visible.min.js":
/*!********************************************!*\
  !*** ./src/js/vendor/focus-visible.min.js ***!
  \********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n!function (e, t) {\n  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(0, function () {\n  "use strict";\n\n  function e(e) {\n    var t = !0,\n        n = !1,\n        o = null,\n        d = {\n      text: !0,\n      search: !0,\n      url: !0,\n      tel: !0,\n      email: !0,\n      password: !0,\n      number: !0,\n      date: !0,\n      month: !0,\n      week: !0,\n      time: !0,\n      datetime: !0,\n      "datetime-local": !0\n    };\n\n    function i(e) {\n      return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList);\n    }\n\n    function s(e) {\n      e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""));\n    }\n\n    function u(e) {\n      t = !1;\n    }\n\n    function a() {\n      document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c);\n    }\n\n    function c(e) {\n      e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c));\n    }\n\n    document.addEventListener("keydown", function (n) {\n      n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && s(e.activeElement), t = !0);\n    }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function (e) {\n      "hidden" === document.visibilityState && (n && (t = !0), a());\n    }, !0), a(), e.addEventListener("focus", function (e) {\n      var n, o, u;\n      i(e.target) && (t || (n = e.target, o = n.type, "INPUT" === (u = n.tagName) && d[o] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && s(e.target);\n    }, !0), e.addEventListener("blur", function (e) {\n      var t;\n      i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout(function () {\n        n = !1;\n      }, 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")));\n    }, !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));\n  }\n\n  if ("undefined" != typeof window && "undefined" != typeof document) {\n    var t;\n    window.applyFocusVisiblePolyfill = e;\n\n    try {\n      t = new CustomEvent("focus-visible-polyfill-ready");\n    } catch (e) {\n      (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});\n    }\n\n    window.dispatchEvent(t);\n  }\n\n  "undefined" != typeof document && e(document);\n});\n\n//# sourceURL=webpack:///./src/js/vendor/focus-visible.min.js?')}});
//# sourceMappingURL=main.js.map
