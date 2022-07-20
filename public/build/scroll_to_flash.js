"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["scroll_to_flash"],{

/***/ "./assets/js/scroll_to_flash.js":
/*!**************************************!*\
  !*** ./assets/js/scroll_to_flash.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var errorNode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.glyphicon-exclamation-sign');
  var envelopeNode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fa-thumbs-up');
  var exclamationTriangleNode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fa-exclamation-triangle');
  moveToNode(errorNode);
  moveToNode(envelopeNode);
  moveToNode(exclamationTriangleNode);
});

function moveToNode(node) {
  if (node.length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html,body').animate({
      scrollTop: node.offset().top - 100
    }, 'slow');
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/scroll_to_flash.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsX3RvX2ZsYXNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLDZDQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztFQUM5QixJQUFNQyxTQUFTLEdBQUdILDZDQUFNLENBQUMsNkJBQUQsQ0FBeEI7RUFDQSxJQUFNSSxZQUFZLEdBQUdKLDZDQUFNLENBQUMsZUFBRCxDQUEzQjtFQUNBLElBQU1LLHVCQUF1QixHQUFHTCw2Q0FBTSxDQUFDLDBCQUFELENBQXRDO0VBQ0FNLFVBQVUsQ0FBQ0gsU0FBRCxDQUFWO0VBQ0FHLFVBQVUsQ0FBQ0YsWUFBRCxDQUFWO0VBQ0FFLFVBQVUsQ0FBQ0QsdUJBQUQsQ0FBVjtBQUNILENBUEQ7O0FBU0EsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7RUFDdEIsSUFBSUEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7SUFDakJSLDZDQUFNLENBQUMsV0FBRCxDQUFOLENBQW9CUyxPQUFwQixDQUE0QjtNQUFDQyxTQUFTLEVBQUVILElBQUksQ0FBQ0ksTUFBTCxHQUFjQyxHQUFkLEdBQW9CO0lBQWhDLENBQTVCLEVBQWtFLE1BQWxFO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zY3JvbGxfdG9fZmxhc2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVycm9yTm9kZSA9IGpRdWVyeSgnLmdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduJyk7XG4gICAgY29uc3QgZW52ZWxvcGVOb2RlID0galF1ZXJ5KCcuZmEtdGh1bWJzLXVwJyk7XG4gICAgY29uc3QgZXhjbGFtYXRpb25UcmlhbmdsZU5vZGUgPSBqUXVlcnkoJy5mYS1leGNsYW1hdGlvbi10cmlhbmdsZScpO1xuICAgIG1vdmVUb05vZGUoZXJyb3JOb2RlKTtcbiAgICBtb3ZlVG9Ob2RlKGVudmVsb3BlTm9kZSk7XG4gICAgbW92ZVRvTm9kZShleGNsYW1hdGlvblRyaWFuZ2xlTm9kZSk7XG59KTtcblxuZnVuY3Rpb24gbW92ZVRvTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUubGVuZ3RoID4gMCkge1xuICAgICAgICBqUXVlcnkoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogbm9kZS5vZmZzZXQoKS50b3AgLSAxMDB9LCAnc2xvdycpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiZXJyb3JOb2RlIiwiZW52ZWxvcGVOb2RlIiwiZXhjbGFtYXRpb25UcmlhbmdsZU5vZGUiLCJtb3ZlVG9Ob2RlIiwibm9kZSIsImxlbmd0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9