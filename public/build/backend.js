(self["webpackChunk"] = self["webpackChunk"] || []).push([["backend"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./events-student-assistance_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/events-student-assistance_controller.js",
	"./pdf-button_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pdf-button_controller.js",
	"./pdf-preview_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pdf-preview_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-chartjs/dist/controller.js */ "./node_modules/@symfony/ux-chartjs/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/events-student-assistance_controller.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/events-student-assistance_controller.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default().setRoutingData(routes);

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var self = this;
      this.element.innerHTML = '<i class="fa fa-5x fa-spinner fa-spin" aria-hidden="true"></i>';
      axios__WEBPACK_IMPORTED_MODULE_14___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default().generate('admin_app_event_apiget', {
        id: this.eidValue
      })).then(function (response) {
        if (response.hasOwnProperty('data') && response.data.hasOwnProperty('html')) {
          self.element.innerHTML = response.data.html;
        }
      })["catch"](function (error) {
        console.error('[EventsStudentAssistance::connect] axios error response', error);
      });
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.target.checked) {
        // attend class
        axios__WEBPACK_IMPORTED_MODULE_14___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default().generate('admin_app_event_apiattendedclass', {
          id: this.eidValue,
          student: event.target.value
        })).then(function (response) {})["catch"](function (error) {
          console.error('[EventsStudentAssistance::update] attend axios error response', error);
        });
      } else {
        // not atted class
        var self = this;
        axios__WEBPACK_IMPORTED_MODULE_14___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default().generate('admin_app_event_apinotattendedclass', {
          id: this.eidValue,
          student: event.target.value
        })).then(function (response) {
          if (response.hasOwnProperty('data') && response.data.hasOwnProperty('said')) {
            var said = response.data.said;
            var sendEmailNotificationButton = document.createElement('a');
            sendEmailNotificationButton.innerHTML = '<i class="fa fa-envelope-o"></i> Enviar notificació de no assitència per correu';
            sendEmailNotificationButton.setAttribute('href', _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default().generate('admin_app_studentabsence_notification', {
              id: said
            }));
            sendEmailNotificationButton.setAttribute('class', 'btn btn-warning');
            sendEmailNotificationButton.setAttribute('style', 'margin-top:10px');
            self.element.parentNode.insertBefore(sendEmailNotificationButton, self.element.nextSibling);
          }
        })["catch"](function (error) {
          console.error('[EventsStudentAssistance::update] NOT attend axios error response', error);
        });
      }
    }
  }, {
    key: "studentAdded",
    value: function studentAdded(event) {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_14___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_15___default().generate('admin_app_event_apiattendedclass', {
        id: event.detail.event,
        student: event.detail.student
      })).then(function () {
        self.element.innerHTML += '<label class="checkbox-inline"><input type="checkbox" id="inlineCheckboxEvent' + event.detail.event + 'Student' + event.detail.student + '" name="eid' + event.detail.event + '" value="' + event.detail.student + '" data-action="click->events-student-assistance#update" checked> ' + event.detail.text + '</label>';
        var submitFormButtons = document.getElementsByName('btn_update_and_edit');

        if (submitFormButtons && submitFormButtons.length > 0) {
          submitFormButtons[0].click();
        }
      })["catch"](function (error) {
        console.error('[EventsStudentAssistance::studentAdded] axios error response', error);
      });
    }
  }, {
    key: "studentRemoved",
    value: function studentRemoved(event) {
      var element = document.getElementById('inlineCheckboxEvent' + event.detail.event + 'Student' + event.detail.student);

      if (element.parentNode) {
        var checkboxer = element.parentNode.parentNode;

        if (checkboxer) {
          checkboxer.removeChild(element.parentNode);
          var submitFormButtons = document.getElementsByName('btn_update_and_edit');

          if (submitFormButtons && submitFormButtons.length > 0) {
            submitFormButtons[0].click();
          }
        }
      }
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);

_defineProperty(_default, "values", {
  eid: Number
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pdf-button_controller.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pdf-button_controller.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "clicked",
    value: function clicked() {
      var event = new CustomEvent('app-pdf-preview-button-clicked', {
        detail: {
          attachment: this.attachmentValue,
          path: this.pathValue
        }
      });
      window.dispatchEvent(event);
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);

_defineProperty(_default, "values", {
  attachment: String,
  path: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pdf-preview_controller.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pdf-preview_controller.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pdfjs-dist/lib/pdf */ "./node_modules/pdfjs-dist/lib/pdf.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_15__.GlobalWorkerOptions.workerSrc = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.entry.js */ "./node_modules/pdfjs-dist/build/pdf.worker.entry.js");

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this.pdfDoc = null;
      this.pdfPageNum = 1;
      this.pdfPageRendering = false;
      this.pdfPageNumPending = null;
      this.pdfScale = 1.0;
      this.pdfCtx = this.canvasTarget.getContext('2d');
    }
  }, {
    key: "connect",
    value: function connect() {
      this.loaderTarget.classList.remove(this.hiddenClass);
      this.canvasTarget.classList.add(this.hiddenClass);
    }
  }, {
    key: "renderPage",
    value: function (_renderPage) {
      function renderPage(_x) {
        return _renderPage.apply(this, arguments);
      }

      renderPage.toString = function () {
        return _renderPage.toString();
      };

      return renderPage;
    }(function (num) {
      this.pdfPageRendering = true;
      var self = this;
      this.pdfDoc.getPage(num).then(function (page) {
        var viewport = page.getViewport({
          scale: self.pdfScale
        });
        self.canvasTarget.height = viewport.height;
        self.canvasTarget.width = viewport.width;
        var renderContext = {
          canvasContext: self.pdfCtx,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          self.pdfPageRendering = false;

          if (self.pdfPageNumPending !== null) {
            renderPage(self.pdfPageNumPending);
            self.pdfPageNumPending = null;
          }
        });
      });
      this.currentTarget.textContent = num;
      this.totalTarget.textContent = this.pdfDoc.numPages;
    })
  }, {
    key: "queueRenderPage",
    value: function queueRenderPage(num) {
      if (this.pdfPageRendering) {
        this.pdfPageNumPending = num;
      } else {
        this.renderPage(num);
      }
    }
  }, {
    key: "onPrevPage",
    value: function onPrevPage() {
      if (this.pdfPageNum <= 1) {
        return;
      }

      this.pdfPageNum--;
      this.queueRenderPage(this.pdfPageNum);
    }
  }, {
    key: "onNextPage",
    value: function onNextPage() {
      if (this.pdfPageNum >= this.pdfDoc.numPages) {
        return;
      }

      this.pdfPageNum++;
      this.queueRenderPage(this.pdfPageNum);
    }
  }, {
    key: "update",
    value: function update(event) {
      var _this = this;

      this.downloaderTarget.href = event.detail.path;
      this.loaderTarget.classList.add(this.hiddenClass);
      this.canvasTarget.classList.remove(this.hiddenClass);
      var loadingTask = (0,pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_15__.getDocument)(event.detail.path);
      loadingTask.promise.then(function (pdf) {
        _this.pdfDoc = pdf;

        _this.renderPage(_this.pdfPageNum);
      }, function (errorGet) {
        console.error('Error during ' + event.detail.path + ' loading document:', errorGet);
      });
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);

_defineProperty(_default, "classes", ['hidden']);

_defineProperty(_default, "targets", ['current', 'total', 'downloader', 'canvas', 'loader']);



/***/ }),

/***/ "./assets/js/backend.js":
/*!******************************!*\
  !*** ./assets/js/backend.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_backend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/backend.scss */ "./assets/css/backend.scss");
/* harmony import */ var _stimulus_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stimulus_bootstrap */ "./assets/stimulus_bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfjs-dist/lib/pdf */ "./node_modules/pdfjs-dist/lib/pdf.js");
 // start the Stimulus applications

 // start PDF JS library



pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_3__.GlobalWorkerOptions.workerSrc = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.entry.js */ "./node_modules/pdfjs-dist/build/pdf.worker.entry.js");
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  var pdfHolderNodes = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-holder]');

  var _loop = function _loop(index) {
    var pdfHolderNode = pdfHolderNodes[index];
    var id = pdfHolderNode.id;
    var node = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#' + id);
    var downloadPath = node.attr('data-download');
    var loadingTask = (0,pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_3__.getDocument)(downloadPath);
    loadingTask.promise.then(function (pdf) {
      pdf.getPage(1).then(function (page) {
        var scale = 1;
        var viewport = page.getViewport({
          scale: scale
        });
        var canvas = document.getElementById('pdf-' + id);
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      }, function (errorGet) {
        console.error('Error during ' + downloadPath + ' loading first page:', errorGet);
      });
    }, function (errorGet) {
      console.error('Error during ' + downloadPath + ' loading document:', errorGet);
    });
  };

  for (var index = 0; index < pdfHolderNodes.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ "./assets/stimulus_bootstrap.js":
/*!**************************************!*\
  !*** ./assets/stimulus_bootstrap.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  var n = t();
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      r = function () {
    function r(t, n) {
      e(this, r), this.context_ = t || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(n || {});
    }

    return o(r, [{
      key: "setRoutingData",
      value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), "port" in e && this.setPort(e.port), "locale" in e && this.setLocale(e.locale), this.setHost(e.host), this.setScheme(e.scheme);
      }
    }, {
      key: "setRoutes",
      value: function value(e) {
        this.routes_ = Object.freeze(e);
      }
    }, {
      key: "getRoutes",
      value: function value() {
        return this.routes_;
      }
    }, {
      key: "setBaseUrl",
      value: function value(e) {
        this.context_.base_url = e;
      }
    }, {
      key: "getBaseUrl",
      value: function value() {
        return this.context_.base_url;
      }
    }, {
      key: "setPrefix",
      value: function value(e) {
        this.context_.prefix = e;
      }
    }, {
      key: "setScheme",
      value: function value(e) {
        this.context_.scheme = e;
      }
    }, {
      key: "getScheme",
      value: function value() {
        return this.context_.scheme;
      }
    }, {
      key: "setHost",
      value: function value(e) {
        this.context_.host = e;
      }
    }, {
      key: "getHost",
      value: function value() {
        return this.context_.host;
      }
    }, {
      key: "setPort",
      value: function value(e) {
        this.context_.port = e;
      }
    }, {
      key: "getPort",
      value: function value() {
        return this.context_.port;
      }
    }, {
      key: "setLocale",
      value: function value(e) {
        this.context_.locale = e;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.context_.locale;
      }
    }, {
      key: "buildQueryParams",
      value: function value(e, t, o) {
        var r = this,
            i = void 0,
            u = new RegExp(/\[\]$/);
        if (t instanceof Array) t.forEach(function (t, i) {
          u.test(e) ? o(e, t) : r.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? i : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (i in t) {
          this.buildQueryParams(e + "[" + i + "]", t[i], o);
        } else o(e, t);
      }
    }, {
      key: "getRoute",
      value: function value(e) {
        var t = this.context_.prefix + e,
            n = e + "." + this.context_.locale,
            o = this.context_.prefix + e + "." + this.context_.locale,
            r = [t, n, o, e];

        for (var i in r) {
          if (r[i] in this.routes_) return this.routes_[r[i]];
        }

        throw new Error('The route "' + e + '" does not exist.');
      }
    }, {
      key: "generate",
      value: function value(e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getRoute(e),
            u = n || {},
            s = t({}, u),
            c = "",
            a = !0,
            l = "",
            f = "undefined" == typeof this.getPort() || null === this.getPort() ? "" : this.getPort();

        if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return c = r.encodePathComponent(t[1]) + c, void (a = !1);
          {
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');
            var n = i.defaults && t[3] in i.defaults;

            if (!1 === a || !n || t[3] in u && u[t[3]] != i.defaults[t[3]]) {
              var o = void 0;
              if (t[3] in u) o = u[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (a) return;
                  throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }

                o = i.defaults[t[3]];
              }
              var l = !0 === o || !1 === o || "" === o;

              if (!l || !a) {
                var f = r.encodePathComponent(o);
                "null" === f && null === o && (f = ""), c = t[1] + f + c;
              }

              a = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === c && (c = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;
          return "text" === e[0] ? void (l = e[1] + l) : void ("variable" === e[0] && (e[3] in u ? (t = u[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), l = e[1] + t + l));
        }), c = this.context_.base_url + c, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme) {
          var h = l || this.getHost();
          c = i.requirements._scheme + "://" + h + (h.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + c;
        } else if ("undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0]) {
          var p = l || this.getHost();
          c = i.schemes[0] + "://" + p + (p.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + c;
        } else l && this.getHost() !== l + (l.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) ? c = this.getScheme() + "://" + l + (l.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + c : o === !0 && (c = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + c);

        if (Object.keys(s).length > 0) {
          var d = void 0,
              y = [],
              v = function v(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, y.push(r.encodeQueryComponent(e) + "=" + r.encodeQueryComponent(t));
          };

          for (d in s) {
            this.buildQueryParams(d, s[d], v);
          }

          c = c + "?" + y.join("&");
        }

        return c;
      }
    }], [{
      key: "getInstance",
      value: function value() {
        return i;
      }
    }, {
      key: "setData",
      value: function value(e) {
        var t = r.getInstance();
        t.setRoutingData(e);
      }
    }, {
      key: "customEncodeURIComponent",
      value: function value(e) {
        return encodeURIComponent(e).replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%21/g, "!").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%2A/g, "*").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27");
      }
    }, {
      key: "encodePathComponent",
      value: function value(e) {
        return r.customEncodeURIComponent(e).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|");
      }
    }, {
      key: "encodeQueryComponent",
      value: function value(e) {
        return r.customEncodeURIComponent(e).replace(/%3F/g, "?");
      }
    }]), r;
  }();

  r.Route, r.Context;
  var i = new r();
  return {
    Router: r,
    Routing: i
  };
});

/***/ }),

/***/ "./assets/css/backend.scss":
/*!*********************************!*\
  !*** ./assets/css/backend.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?59bc":
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1f81":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?352a":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ca9c":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4682":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e40e":
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"fc_load_events":{"tokens":[["text","/admin/fc-load-events"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sonata_admin_dashboard":{"tokens":[["text","/admin/dashboard"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_studentabsence_notification":{"tokens":[["text","/notification"],["variable","/","[^/]++","id"],["text","/admin/students/absence"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apiget":{"tokens":[["text","/api/get"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apiattendedclass":{"tokens":[["text","/attended-the-class"],["variable","/","[^/]++","student"],["text","/api"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apinotattendedclass":{"tokens":[["text","/not-attended-the-class"],["variable","/","[^/]++","student"],["text","/api"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_filedummy_exportCalendarPdfList":{"tokens":[["variable","/","[^/]++","end"],["text","/to"],["variable","/","[^/]++","start"],["text","/admin/extras/export-calendar-pdf-list/from"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":[]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-20a9b1","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-chartjs_di-245040"], () => (__webpack_exec__("./assets/js/backend.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NHRJLEdBQXAySSxFQUEzbUI7O0FBQWs5SkEsRUFBQUEsQ0FBQyxDQUFDdUQsS0FBRixFQUFRdkQsQ0FBQyxDQUFDd0QsT0FBVjtBQUFrQixNQUFJdkMsQ0FBQyxHQUFDLElBQUlqQixDQUFKLEVBQU47QUFBWSxTQUFNO0FBQUNoQixJQUFBQSxNQUFNLEVBQUNnQixDQUFSO0FBQVU5SCxJQUFBQSxPQUFPLEVBQUMrSTtBQUFsQixHQUFOO0FBQTJCLENBQXowSyxDQUFEOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2V2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2VfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcGRmLWJ1dHRvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wZGYtcHJldmlld19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYWNrZW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdGltdWx1c19ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9iYWNrZW5kLnNjc3MiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fGNhbnZhcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvZGF2aWQvRGV2ZWxvcG1lbnQvUEhQL3Bhcy1hLXJlcGFzLTIvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGliL2Rpc3BsYXl8ZnMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fGh0dHAiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fGh0dHBzIiwid2VicGFjazovLy9pZ25vcmVkfC9Vc2Vycy9kYXZpZC9EZXZlbG9wbWVudC9QSFAvcGFzLWEtcmVwYXMtMi9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9saWIvZGlzcGxheXx1cmwiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fHpsaWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2V2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2VfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2V2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2VfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcGRmLWJ1dHRvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcGRmLWJ1dHRvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9wZGYtcHJldmlld19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcGRmLXByZXZpZXdfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWNoYXJ0anMvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB2YWx1ZXMgPSB7IGVpZDogTnVtYmVyIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLTV4IGZhLXNwaW5uZXIgZmEtc3BpblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fYXBwX2V2ZW50X2FwaWdldCcsIHsgaWQ6IHRoaXMuZWlkVmFsdWUgfSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiByZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdodG1sJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuaHRtbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tFdmVudHNTdHVkZW50QXNzaXN0YW5jZTo6Y29ubmVjdF0gYXhpb3MgZXJyb3IgcmVzcG9uc2UnLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAvLyBhdHRlbmQgY2xhc3NcbiAgICAgICAgICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfZXZlbnRfYXBpYXR0ZW5kZWRjbGFzcycsIHsgaWQ6IHRoaXMuZWlkVmFsdWUsIHN0dWRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbRXZlbnRzU3R1ZGVudEFzc2lzdGFuY2U6OnVwZGF0ZV0gYXR0ZW5kIGF4aW9zIGVycm9yIHJlc3BvbnNlJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IGF0dGVkIGNsYXNzXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fYXBwX2V2ZW50X2FwaW5vdGF0dGVuZGVkY2xhc3MnLCB7IGlkOiB0aGlzLmVpZFZhbHVlLCBzdHVkZW50OiBldmVudC50YXJnZXQudmFsdWV9KSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdkYXRhJykgJiYgcmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnc2FpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FpZCA9IHJlc3BvbnNlLmRhdGEuc2FpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGUtb1wiPjwvaT4gRW52aWFyIG5vdGlmaWNhY2nDsyBkZSBubyBhc3NpdMOobmNpYSBwZXIgY29ycmV1JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFbWFpbE5vdGlmaWNhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfc3R1ZGVudGFic2VuY2Vfbm90aWZpY2F0aW9uJywge2lkOiBzYWlkfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVtYWlsTm90aWZpY2F0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi13YXJuaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tdG9wOjEwcHgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24sIHNlbGYuZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0V2ZW50c1N0dWRlbnRBc3Npc3RhbmNlOjp1cGRhdGVdIE5PVCBhdHRlbmQgYXhpb3MgZXJyb3IgcmVzcG9uc2UnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdHVkZW50QWRkZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fYXBwX2V2ZW50X2FwaWF0dGVuZGVkY2xhc3MnLCB7IGlkOiBldmVudC5kZXRhaWwuZXZlbnQsIHN0dWRlbnQ6IGV2ZW50LmRldGFpbC5zdHVkZW50fSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmlubmVySFRNTCArPSAnPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaW5saW5lQ2hlY2tib3hFdmVudCcgKyBldmVudC5kZXRhaWwuZXZlbnQgKyAnU3R1ZGVudCcgKyBldmVudC5kZXRhaWwuc3R1ZGVudCArICdcIiBuYW1lPVwiZWlkJyArIGV2ZW50LmRldGFpbC5ldmVudCArICdcIiB2YWx1ZT1cIicgKyBldmVudC5kZXRhaWwuc3R1ZGVudCArICdcIiBkYXRhLWFjdGlvbj1cImNsaWNrLT5ldmVudHMtc3R1ZGVudC1hc3Npc3RhbmNlI3VwZGF0ZVwiIGNoZWNrZWQ+ICcgKyBldmVudC5kZXRhaWwudGV4dCArICc8L2xhYmVsPic7XG4gICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm1CdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2J0bl91cGRhdGVfYW5kX2VkaXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VibWl0Rm9ybUJ1dHRvbnMgJiYgc3VibWl0Rm9ybUJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRGb3JtQnV0dG9uc1swXS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0V2ZW50c1N0dWRlbnRBc3Npc3RhbmNlOjpzdHVkZW50QWRkZWRdIGF4aW9zIGVycm9yIHJlc3BvbnNlJywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3R1ZGVudFJlbW92ZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5saW5lQ2hlY2tib3hFdmVudCcgKyBldmVudC5kZXRhaWwuZXZlbnQgKyAnU3R1ZGVudCcgKyBldmVudC5kZXRhaWwuc3R1ZGVudCk7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveGVyID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3hlcikge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94ZXIucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBsZXQgc3VibWl0Rm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnYnRuX3VwZGF0ZV9hbmRfZWRpdCcpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJtaXRGb3JtQnV0dG9ucyAmJiBzdWJtaXRGb3JtQnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm1CdXR0b25zWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgYXR0YWNobWVudDogU3RyaW5nLFxuICAgICAgICBwYXRoOiBTdHJpbmcsXG4gICAgfTtcblxuICAgIGNsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhcHAtcGRmLXByZXZpZXctYnV0dG9uLWNsaWNrZWQnLCB7ZGV0YWlsOiB7YXR0YWNobWVudDogdGhpcy5hdHRhY2htZW50VmFsdWUsIHBhdGg6IHRoaXMucGF0aFZhbHVlfX0pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgeyBnZXREb2N1bWVudCwgR2xvYmFsV29ya2VyT3B0aW9ucyB9IGZyb20gJ3BkZmpzLWRpc3QvbGliL3BkZic7XG5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHJlcXVpcmUoJ3BkZmpzLWRpc3QvYnVpbGQvcGRmLndvcmtlci5lbnRyeS5qcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBjbGFzc2VzID0gWyAnaGlkZGVuJyBdO1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xuICAgICAgICAnY3VycmVudCcsXG4gICAgICAgICd0b3RhbCcsXG4gICAgICAgICdkb3dubG9hZGVyJyxcbiAgICAgICAgJ2NhbnZhcycsXG4gICAgICAgICdsb2FkZXInXG4gICAgXTtcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucGRmRG9jID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZGZQYWdlTnVtID0gMTtcbiAgICAgICAgdGhpcy5wZGZQYWdlUmVuZGVyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGRmUGFnZU51bVBlbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLnBkZlNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLnBkZkN0eCA9IHRoaXMuY2FudmFzVGFyZ2V0LmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkZXJUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5jYW52YXNUYXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICB9XG5cbiAgICByZW5kZXJQYWdlKG51bSkge1xuICAgICAgICB0aGlzLnBkZlBhZ2VSZW5kZXJpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucGRmRG9jLmdldFBhZ2UobnVtKS50aGVuKGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogc2VsZi5wZGZTY2FsZSB9KTtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzVGFyZ2V0LmhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzVGFyZ2V0LndpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICAgICAgICBsZXQgcmVuZGVyQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBjYW52YXNDb250ZXh0OiBzZWxmLnBkZkN0eCxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydDogdmlld3BvcnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHJlbmRlclRhc2sgPSBwYWdlLnJlbmRlcihyZW5kZXJDb250ZXh0KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2sucHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBkZlBhZ2VSZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wZGZQYWdlTnVtUGVuZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKHNlbGYucGRmUGFnZU51bVBlbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBkZlBhZ2VOdW1QZW5kaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCA9IG51bTtcbiAgICAgICAgdGhpcy50b3RhbFRhcmdldC50ZXh0Q29udGVudCA9IHRoaXMucGRmRG9jLm51bVBhZ2VzO1xuICAgIH1cblxuICAgIHF1ZXVlUmVuZGVyUGFnZShudW0pIHtcbiAgICAgICAgaWYgKHRoaXMucGRmUGFnZVJlbmRlcmluZykge1xuICAgICAgICAgICAgdGhpcy5wZGZQYWdlTnVtUGVuZGluZyA9IG51bTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZShudW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGRmUGFnZU51bSA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZGZQYWdlTnVtLS07XG4gICAgICAgIHRoaXMucXVldWVSZW5kZXJQYWdlKHRoaXMucGRmUGFnZU51bSk7XG4gICAgfVxuXG4gICAgb25OZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGRmUGFnZU51bSA+PSB0aGlzLnBkZkRvYy5udW1QYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGRmUGFnZU51bSsrO1xuICAgICAgICB0aGlzLnF1ZXVlUmVuZGVyUGFnZSh0aGlzLnBkZlBhZ2VOdW0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICB0aGlzLmRvd25sb2FkZXJUYXJnZXQuaHJlZiA9IGV2ZW50LmRldGFpbC5wYXRoO1xuICAgICAgICB0aGlzLmxvYWRlclRhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICB0aGlzLmNhbnZhc1RhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICBsZXQgbG9hZGluZ1Rhc2sgPSBnZXREb2N1bWVudChldmVudC5kZXRhaWwucGF0aCk7XG4gICAgICAgIGxvYWRpbmdUYXNrLnByb21pc2UudGhlbigocGRmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBkZkRvYyA9IHBkZjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSh0aGlzLnBkZlBhZ2VOdW0pO1xuICAgICAgICB9LCAoZXJyb3JHZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyAnICsgZXZlbnQuZGV0YWlsLnBhdGggKyAnIGxvYWRpbmcgZG9jdW1lbnQ6JywgZXJyb3JHZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uL2Nzcy9iYWNrZW5kLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25zXG5pbXBvcnQgJy4uL3N0aW11bHVzX2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IFBERiBKUyBsaWJyYXJ5XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBnZXREb2N1bWVudCwgR2xvYmFsV29ya2VyT3B0aW9ucyB9IGZyb20gJ3BkZmpzLWRpc3QvbGliL3BkZic7XG5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHJlcXVpcmUoJ3BkZmpzLWRpc3QvYnVpbGQvcGRmLndvcmtlci5lbnRyeS5qcycpO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGxldCBwZGZIb2xkZXJOb2RlcyA9IGpRdWVyeSgnW2RhdGEtaG9sZGVyXScpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwZGZIb2xkZXJOb2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHBkZkhvbGRlck5vZGUgPSBwZGZIb2xkZXJOb2Rlc1tpbmRleF07XG4gICAgICAgIGxldCBpZCA9IHBkZkhvbGRlck5vZGUuaWQ7XG4gICAgICAgIGxldCBub2RlID0galF1ZXJ5KCcjJyArIGlkKTtcbiAgICAgICAgbGV0IGRvd25sb2FkUGF0aCA9IG5vZGUuYXR0cignZGF0YS1kb3dubG9hZCcpO1xuICAgICAgICBsZXQgbG9hZGluZ1Rhc2sgPSBnZXREb2N1bWVudChkb3dubG9hZFBhdGgpO1xuICAgICAgICBsb2FkaW5nVGFzay5wcm9taXNlLnRoZW4oKHBkZikgPT4ge1xuICAgICAgICAgICAgcGRmLmdldFBhZ2UoMSkudGhlbigocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0gcGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiBzY2FsZSwgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtJyArIGlkKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0OiB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcGFnZS5yZW5kZXIocmVuZGVyQ29udGV4dCk7XG4gICAgICAgICAgICB9LCAoZXJyb3JHZXQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgJyArIGRvd25sb2FkUGF0aCArICcgbG9hZGluZyBmaXJzdCBwYWdlOicsIGVycm9yR2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoZXJyb3JHZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyAnICsgZG93bmxvYWRQYXRoICsgJyBsb2FkaW5nIGRvY3VtZW50OicsIGVycm9yR2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcbiIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsbil7ZSh0aGlzLHIpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKHIsW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSxcInBvcnRcImluIGUmJnRoaXMuc2V0UG9ydChlLnBvcnQpLFwibG9jYWxlXCJpbiBlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJzZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9fSx7a2V5OlwiZ2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH19LHtrZXk6XCJzZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfX0se2tleTpcImdldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIHI9dGhpcyxpPXZvaWQgMCx1PW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQsaSl7dS50ZXN0KGUpP28oZSx0KTpyLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP2k6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihpIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIraStcIl1cIix0W2ldLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxuPWUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsbz10aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLHI9W3QsbixvLGVdO2Zvcih2YXIgaSBpbiByKWlmKHJbaV1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tyW2ldXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0saT10aGlzLmdldFJvdXRlKGUpLHU9bnx8e30scz10KHt9LHUpLGM9XCJcIixhPSEwLGw9XCJcIixmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIGM9ci5lbmNvZGVQYXRoQ29tcG9uZW50KHRbMV0pK2Msdm9pZChhPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09YXx8IW58fHRbM11pbiB1JiZ1W3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHUpbz11W3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGEpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGw9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFsfHwhYSl7dmFyIGY9ci5lbmNvZGVQYXRoQ29tcG9uZW50KG8pO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLGM9dFsxXStmK2N9YT0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09YyYmKGM9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChsPWVbMV0rbCk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHU/KHQ9dVtlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGw9ZVsxXSt0K2wpKX0pLGM9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCtjLGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lKXt2YXIgaD1sfHx0aGlzLmdldEhvc3QoKTtjPWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIitoKyhoLmluZGV4T2YoXCI6XCIrZik+LTF8fFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrY31lbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0pe3ZhciBwPWx8fHRoaXMuZ2V0SG9zdCgpO2M9aS5zY2hlbWVzWzBdK1wiOi8vXCIrcCsocC5pbmRleE9mKFwiOlwiK2YpPi0xfHxcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK2N9ZWxzZSBsJiZ0aGlzLmdldEhvc3QoKSE9PWwrKGwuaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKT9jPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIitsKyhsLmluZGV4T2YoXCI6XCIrZik+LTF8fFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrYzpvPT09ITAmJihjPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSsodGhpcy5nZXRIb3N0KCkuaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKStjKTtpZihPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGQ9dm9pZCAwLHk9W10sdj1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCx5LnB1c2goci5lbmNvZGVRdWVyeUNvbXBvbmVudChlKStcIj1cIityLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHQpKX07Zm9yKGQgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZCxzW2RdLHYpO2M9YytcIj9cIit5LmpvaW4oXCImXCIpfXJldHVybiBjfX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBpfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1yLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19LHtrZXk6XCJjdXN0b21FbmNvZGVVUklDb21wb25lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUyRi9nLFwiL1wiKS5yZXBsYWNlKC8lNDAvZyxcIkBcIikucmVwbGFjZSgvJTNBL2csXCI6XCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lM0IvZyxcIjtcIikucmVwbGFjZSgvJTJDL2csXCIsXCIpLnJlcGxhY2UoLyUyQS9nLFwiKlwiKS5yZXBsYWNlKC9cXCgvZyxcIiUyOFwiKS5yZXBsYWNlKC9cXCkvZyxcIiUyOVwiKS5yZXBsYWNlKC8nL2csXCIlMjdcIil9fSx7a2V5OlwiZW5jb2RlUGF0aENvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiByLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0QvZyxcIj1cIikucmVwbGFjZSgvJTJCL2csXCIrXCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lN0MvZyxcInxcIil9fSx7a2V5OlwiZW5jb2RlUXVlcnlDb21wb25lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTNGL2csXCI/XCIpfX1dKSxyfSgpO3IuUm91dGUsci5Db250ZXh0O3ZhciBpPW5ldyByO3JldHVybntSb3V0ZXI6cixSb3V0aW5nOml9fSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJheGlvcyIsIlJvdXRpbmciLCJyb3V0ZXMiLCJyZXF1aXJlIiwic2V0Um91dGluZ0RhdGEiLCJzZWxmIiwiZWxlbWVudCIsImlubmVySFRNTCIsImdldCIsImdlbmVyYXRlIiwiaWQiLCJlaWRWYWx1ZSIsInRoZW4iLCJyZXNwb25zZSIsImhhc093blByb3BlcnR5IiwiZGF0YSIsImh0bWwiLCJlcnJvciIsImNvbnNvbGUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJzdHVkZW50IiwidmFsdWUiLCJzYWlkIiwic2VuZEVtYWlsTm90aWZpY2F0aW9uQnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZGV0YWlsIiwidGV4dCIsInN1Ym1pdEZvcm1CdXR0b25zIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsZW5ndGgiLCJjbGljayIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tib3hlciIsInJlbW92ZUNoaWxkIiwiZWlkIiwiTnVtYmVyIiwiQ3VzdG9tRXZlbnQiLCJhdHRhY2htZW50IiwiYXR0YWNobWVudFZhbHVlIiwicGF0aCIsInBhdGhWYWx1ZSIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJTdHJpbmciLCJnZXREb2N1bWVudCIsIkdsb2JhbFdvcmtlck9wdGlvbnMiLCJ3b3JrZXJTcmMiLCJwZGZEb2MiLCJwZGZQYWdlTnVtIiwicGRmUGFnZVJlbmRlcmluZyIsInBkZlBhZ2VOdW1QZW5kaW5nIiwicGRmU2NhbGUiLCJwZGZDdHgiLCJjYW52YXNUYXJnZXQiLCJnZXRDb250ZXh0IiwibG9hZGVyVGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaGlkZGVuQ2xhc3MiLCJhZGQiLCJudW0iLCJnZXRQYWdlIiwicGFnZSIsInZpZXdwb3J0IiwiZ2V0Vmlld3BvcnQiLCJzY2FsZSIsImhlaWdodCIsIndpZHRoIiwicmVuZGVyQ29udGV4dCIsImNhbnZhc0NvbnRleHQiLCJyZW5kZXJUYXNrIiwicmVuZGVyIiwicHJvbWlzZSIsInJlbmRlclBhZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0b3RhbFRhcmdldCIsIm51bVBhZ2VzIiwicXVldWVSZW5kZXJQYWdlIiwiZG93bmxvYWRlclRhcmdldCIsImhyZWYiLCJsb2FkaW5nVGFzayIsInBkZiIsImVycm9yR2V0IiwialF1ZXJ5IiwicmVhZHkiLCJwZGZIb2xkZXJOb2RlcyIsImluZGV4IiwicGRmSG9sZGVyTm9kZSIsIm5vZGUiLCJkb3dubG9hZFBhdGgiLCJhdHRyIiwiY2FudmFzIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJlIiwidCIsIm4iLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9zIiwiUm91dGVyIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibyIsInByb3RvdHlwZSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJyIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsImkiLCJ1IiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwicyIsImMiLCJhIiwibCIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImRlZmF1bHRzIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJoIiwiZ2V0SG9zdCIsImluZGV4T2YiLCJzY2hlbWVzIiwicCIsImtleXMiLCJkIiwieSIsInYiLCJwdXNoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==