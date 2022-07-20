(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend"],{

/***/ "./assets/js/frontend.js":
/*!*******************************!*\
  !*** ./assets/js/frontend.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/frontend.scss */ "./assets/css/frontend.scss");
/* harmony import */ var _css_frontend_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_frontend_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('scroll', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scrollTop() > 100) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.scroll-top-wrapper').addClass('show');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.scroll-top-wrapper').removeClass('show');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.scroll-top-wrapper').on('click', scrollToTop);

  function scrollToTop() {
    var element = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
    var offset = element.offset();
    var offsetTop = offset.top;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({
      scrollTop: offsetTop
    }, 1000, 'swing');
  }
});

/***/ }),

/***/ "./assets/css/frontend.scss":
/*!**********************************!*\
  !*** ./assets/css/frontend.scss ***!
  \**********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/resolve-url-loader/index.js):\nError: resolve-url-loader: error processing CSS\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/david/Development/PHP/pas-a-repas-2/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:274:12)\n    at onFailure (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:215:14)\n    at tryRunOrWebpackError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/david/Development/PHP/pas-a-repas-2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/david/Development/PHP/pas-a-repas-2/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:4990:43\n    at symbolIterator (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3482:9)\n-- inner error --\nError: Module build failed (from ./node_modules/resolve-url-loader/index.js):\nError: resolve-url-loader: error processing CSS\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/david/Development/PHP/pas-a-repas-2/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:274:12)\n    at onFailure (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:215:14)\n    at Object.<anonymous> (/Users/david/Development/PHP/pas-a-repas-2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/Users/david/Development/PHP/pas-a-repas-2/assets/css/frontend.scss:1:7)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (/Users/david/Development/PHP/pas-a-repas-2/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/david/Development/PHP/pas-a-repas-2/node_modules/tapable/lib/Hook.js:14:14)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5057:39\n    at tryRunOrWebpackError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3485:9)\n\nGenerated code for /Users/david/Development/PHP/pas-a-repas-2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/Users/david/Development/PHP/pas-a-repas-2/assets/css/frontend.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/resolve-url-loader/index.js):\\nError: resolve-url-loader: error processing CSS\\n  PostCSS received undefined instead of CSS string\\n  at new Input (/Users/david/Development/PHP/pas-a-repas-2/node_modules/postcss/lib/input.js:24:13)\\n    at encodeError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:274:12)\\n    at onFailure (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:215:14)\");");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"], () => (__webpack_exec__("./assets/js/frontend.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBQyxtQkFBTyxDQUFDLG9FQUFELENBQVA7O0FBRUFELDZDQUFNLENBQUNFLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztFQUM5QkgsNkNBQU0sQ0FBQ0UsUUFBRCxDQUFOLENBQWlCRSxFQUFqQixDQUFvQixRQUFwQixFQUE4QixZQUFXO0lBQ3JDLElBQUlKLDZDQUFNLENBQUNLLE1BQUQsQ0FBTixDQUFlQyxTQUFmLEtBQTZCLEdBQWpDLEVBQXNDO01BQ2xDTiw2Q0FBTSxDQUFDLHFCQUFELENBQU4sQ0FBOEJPLFFBQTlCLENBQXVDLE1BQXZDO0lBQ0gsQ0FGRCxNQUVPO01BQ0hQLDZDQUFNLENBQUMscUJBQUQsQ0FBTixDQUE4QlEsV0FBOUIsQ0FBMEMsTUFBMUM7SUFDSDtFQUNKLENBTkQ7RUFPQVIsNkNBQU0sQ0FBQyxxQkFBRCxDQUFOLENBQThCSSxFQUE5QixDQUFpQyxPQUFqQyxFQUEwQ0ssV0FBMUM7O0VBQ0EsU0FBU0EsV0FBVCxHQUF1QjtJQUNuQixJQUFNQyxPQUFPLEdBQUdWLDZDQUFNLENBQUMsTUFBRCxDQUF0QjtJQUNBLElBQU1XLE1BQU0sR0FBR0QsT0FBTyxDQUFDQyxNQUFSLEVBQWY7SUFDQSxJQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsR0FBekI7SUFDQWIsNkNBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUJjLE9BQXJCLENBQTZCO01BQUNSLFNBQVMsRUFBRU07SUFBWixDQUE3QixFQUFxRCxJQUFyRCxFQUEyRCxPQUEzRDtFQUNIO0FBQ0osQ0FmRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mcm9udGVuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9mcm9udGVuZC5zY3NzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcblxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgalF1ZXJ5KGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgalF1ZXJ5KCcuc2Nyb2xsLXRvcC13cmFwcGVyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnNjcm9sbC10b3Atd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBqUXVlcnkoJy5zY3JvbGwtdG9wLXdyYXBwZXInKS5vbignY2xpY2snLCBzY3JvbGxUb1RvcCk7XG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoJ2JvZHknKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gb2Zmc2V0LnRvcDtcbiAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBvZmZzZXRUb3B9LCAxMDAwLCAnc3dpbmcnKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwid2luZG93Iiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNjcm9sbFRvVG9wIiwiZWxlbWVudCIsIm9mZnNldCIsIm9mZnNldFRvcCIsInRvcCIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9