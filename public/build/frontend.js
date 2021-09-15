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
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_bootstrap-sass_assets_javascripts_bootstrap_js"], () => (__webpack_exec__("./assets/js/frontend.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFFQUMscUJBQU0sQ0FBQ0YsQ0FBUCxHQUFXRSxxQkFBTSxDQUFDQyxNQUFQLEdBQWdCSCxDQUEzQjtBQUVBRyxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUM5QkYsRUFBQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJFLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFlBQVc7QUFDckMsUUFBSUgsTUFBTSxDQUFDSSxNQUFELENBQU4sQ0FBZUMsU0FBZixLQUE2QixHQUFqQyxFQUFzQztBQUNsQ0wsTUFBQUEsTUFBTSxDQUFDLHFCQUFELENBQU4sQ0FBOEJNLFFBQTlCLENBQXVDLE1BQXZDO0FBQ0gsS0FGRCxNQUVPO0FBQ0hOLE1BQUFBLE1BQU0sQ0FBQyxxQkFBRCxDQUFOLENBQThCTyxXQUE5QixDQUEwQyxNQUExQztBQUNIO0FBQ0osR0FORDtBQU9BUCxFQUFBQSxNQUFNLENBQUMscUJBQUQsQ0FBTixDQUE4QkcsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMENLLFdBQTFDO0FBQ0EsTUFBSUMsU0FBUyxHQUFHVCxNQUFNLENBQUMsWUFBRCxDQUF0QjtBQUNBLE1BQUlVLFlBQVksR0FBR1YsTUFBTSxDQUFDLG1CQUFELENBQXpCOztBQUNBLE1BQUlTLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QlgsSUFBQUEsTUFBTSxDQUFDLFdBQUQsQ0FBTixDQUFvQlksT0FBcEIsQ0FBNEI7QUFBQ1AsTUFBQUEsU0FBUyxFQUFFSSxTQUFTLENBQUNJLE1BQVYsR0FBbUJDLEdBQW5CLEdBQXlCO0FBQXJDLEtBQTVCLEVBQXVFLE1BQXZFO0FBQ0g7O0FBQ0QsTUFBSUosWUFBWSxDQUFDQyxNQUFiLEdBQXNCLENBQTFCLEVBQTZCO0FBQ3pCWCxJQUFBQSxNQUFNLENBQUMsV0FBRCxDQUFOLENBQW9CWSxPQUFwQixDQUE0QjtBQUFDUCxNQUFBQSxTQUFTLEVBQUVLLFlBQVksQ0FBQ0csTUFBYixHQUFzQkMsR0FBdEIsR0FBNEI7QUFBeEMsS0FBNUIsRUFBMEUsTUFBMUU7QUFDSDtBQUNKLENBakJEOztBQW1CQSxTQUFTTixXQUFULEdBQXVCO0FBQ25CUixFQUFBQSxNQUFNLENBQUMsWUFBRCxDQUFOLENBQXFCWSxPQUFyQixDQUE2QjtBQUFDUCxJQUFBQSxTQUFTLEVBQUU7QUFBWixHQUE3QixFQUE2QyxJQUE3QyxFQUFtRCxPQUFuRDtBQUNIOzs7Ozs7Ozs7OztBQzNCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Zyb250ZW5kLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3MvZnJvbnRlbmQuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwJztcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5zY3JvbGwtdG9wLXdyYXBwZXInKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsLXRvcC13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGpRdWVyeSgnLnNjcm9sbC10b3Atd3JhcHBlcicpLm9uKCdjbGljaycsIHNjcm9sbFRvVG9wKTtcbiAgICBsZXQgZXJyb3JOb2RlID0galF1ZXJ5KFwiLmhhcy1lcnJvclwiKTtcbiAgICBsZXQgZW52ZWxvcGVOb2RlID0galF1ZXJ5KFwiLmZhLXBhcGVyLXBsYW5lLW9cIik7XG4gICAgaWYgKGVycm9yTm9kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGpRdWVyeSgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBlcnJvck5vZGUub2Zmc2V0KCkudG9wIC0gMjAwfSwgXCJzbG93XCIpO1xuICAgIH1cbiAgICBpZiAoZW52ZWxvcGVOb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgalF1ZXJ5KCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IGVudmVsb3BlTm9kZS5vZmZzZXQoKS50b3AgLSAyMDB9LCBcInNsb3dcIik7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDEwMDAsICdzd2luZycpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZ2xvYmFsIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwid2luZG93Iiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNjcm9sbFRvVG9wIiwiZXJyb3JOb2RlIiwiZW52ZWxvcGVOb2RlIiwibGVuZ3RoIiwiYW5pbWF0ZSIsIm9mZnNldCIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=