"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend"],{

/***/ "./assets/js/frontend.js":
/*!*******************************!*\
  !*** ./assets/js/frontend.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/frontend.scss */ "./assets/css/frontend.scss");
/* harmony import */ var _node_modules_bootstrap_sass_assets_javascripts_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/bootstrap-sass/assets/javascripts/bootstrap */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js");
/* harmony import */ var _node_modules_bootstrap_sass_assets_javascripts_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_sass_assets_javascripts_bootstrap__WEBPACK_IMPORTED_MODULE_1__);



var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
jQuery(document).ready(function () {
  jQuery(document).on('scroll', function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery('.scroll-top-wrapper').addClass('show');
    } else {
      jQuery('.scroll-top-wrapper').removeClass('show');
    }
  });
  jQuery('.scroll-top-wrapper').on('click', scrollToTop);
  var errorNode = jQuery(".has-error");
  var envelopeNode = jQuery(".fa-paper-plane-o");

  if (errorNode.length > 0) {
    jQuery('html,body').animate({
      scrollTop: errorNode.offset().top - 200
    }, "slow");
  }

  if (envelopeNode.length > 0) {
    jQuery('html,body').animate({
      scrollTop: envelopeNode.offset().top - 200
    }, "slow");
  }
});

function scrollToTop() {
  jQuery('html, body').animate({
    scrollTop: 0
  }, 1000, 'swing');
}

/***/ }),

/***/ "./assets/css/frontend.scss":
/*!**********************************!*\
  !*** ./assets/css/frontend.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap-sass_assets_javascripts_bootstrap_js-node_modules_jquery_dist_-b535c7"], () => (__webpack_exec__("./assets/js/frontend.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBQyxxQkFBTSxDQUFDRixDQUFQLEdBQVdFLHFCQUFNLENBQUNDLE1BQVAsR0FBZ0JILENBQTNCO0FBRUFHLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFXO0FBQzlCRixFQUFBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkUsRUFBakIsQ0FBb0IsUUFBcEIsRUFBOEIsWUFBVztBQUNyQyxRQUFJSCxNQUFNLENBQUNJLE1BQUQsQ0FBTixDQUFlQyxTQUFmLEtBQTZCLEdBQWpDLEVBQXNDO0FBQ2xDTCxNQUFBQSxNQUFNLENBQUMscUJBQUQsQ0FBTixDQUE4Qk0sUUFBOUIsQ0FBdUMsTUFBdkM7QUFDSCxLQUZELE1BRU87QUFDSE4sTUFBQUEsTUFBTSxDQUFDLHFCQUFELENBQU4sQ0FBOEJPLFdBQTlCLENBQTBDLE1BQTFDO0FBQ0g7QUFDSixHQU5EO0FBT0FQLEVBQUFBLE1BQU0sQ0FBQyxxQkFBRCxDQUFOLENBQThCRyxFQUE5QixDQUFpQyxPQUFqQyxFQUEwQ0ssV0FBMUM7QUFDQSxNQUFJQyxTQUFTLEdBQUdULE1BQU0sQ0FBQyxZQUFELENBQXRCO0FBQ0EsTUFBSVUsWUFBWSxHQUFHVixNQUFNLENBQUMsbUJBQUQsQ0FBekI7O0FBQ0EsTUFBSVMsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCWCxJQUFBQSxNQUFNLENBQUMsV0FBRCxDQUFOLENBQW9CWSxPQUFwQixDQUE0QjtBQUFDUCxNQUFBQSxTQUFTLEVBQUVJLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQkMsR0FBbkIsR0FBeUI7QUFBckMsS0FBNUIsRUFBdUUsTUFBdkU7QUFDSDs7QUFDRCxNQUFJSixZQUFZLENBQUNDLE1BQWIsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDekJYLElBQUFBLE1BQU0sQ0FBQyxXQUFELENBQU4sQ0FBb0JZLE9BQXBCLENBQTRCO0FBQUNQLE1BQUFBLFNBQVMsRUFBRUssWUFBWSxDQUFDRyxNQUFiLEdBQXNCQyxHQUF0QixHQUE0QjtBQUF4QyxLQUE1QixFQUEwRSxNQUExRTtBQUNIO0FBQ0osQ0FqQkQ7O0FBbUJBLFNBQVNOLFdBQVQsR0FBdUI7QUFDbkJSLEVBQUFBLE1BQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUJZLE9BQXJCLENBQTZCO0FBQUNQLElBQUFBLFNBQVMsRUFBRTtBQUFaLEdBQTdCLEVBQTZDLElBQTdDLEVBQW1ELE9BQW5EO0FBQ0g7Ozs7Ozs7Ozs7O0FDM0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvZnJvbnRlbmQuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9mcm9udGVuZC5zY3NzJztcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAnO1xuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGpRdWVyeShkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbC10b3Atd3JhcHBlcicpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGwtdG9wLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgalF1ZXJ5KCcuc2Nyb2xsLXRvcC13cmFwcGVyJykub24oJ2NsaWNrJywgc2Nyb2xsVG9Ub3ApO1xuICAgIGxldCBlcnJvck5vZGUgPSBqUXVlcnkoXCIuaGFzLWVycm9yXCIpO1xuICAgIGxldCBlbnZlbG9wZU5vZGUgPSBqUXVlcnkoXCIuZmEtcGFwZXItcGxhbmUtb1wiKTtcbiAgICBpZiAoZXJyb3JOb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgalF1ZXJ5KCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IGVycm9yTm9kZS5vZmZzZXQoKS50b3AgLSAyMDB9LCBcInNsb3dcIik7XG4gICAgfVxuICAgIGlmIChlbnZlbG9wZU5vZGUubGVuZ3RoID4gMCkge1xuICAgICAgICBqUXVlcnkoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogZW52ZWxvcGVOb2RlLm9mZnNldCgpLnRvcCAtIDIwMH0sIFwic2xvd1wiKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMTAwMCwgJ3N3aW5nJyk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2Nyb2xsVG9Ub3AiLCJlcnJvck5vZGUiLCJlbnZlbG9wZU5vZGUiLCJsZW5ndGgiLCJhbmltYXRlIiwib2Zmc2V0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==