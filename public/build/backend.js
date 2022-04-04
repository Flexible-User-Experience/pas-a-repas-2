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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NHRJLEdBQXAySSxFQUEzbUI7O0FBQWs5SkEsRUFBQUEsQ0FBQyxDQUFDdUQsS0FBRixFQUFRdkQsQ0FBQyxDQUFDd0QsT0FBVjtBQUFrQixNQUFJdkMsQ0FBQyxHQUFDLElBQUlqQixDQUFKLEVBQU47QUFBWSxTQUFNO0FBQUNoQixJQUFBQSxNQUFNLEVBQUNnQixDQUFSO0FBQVU5SCxJQUFBQSxPQUFPLEVBQUMrSTtBQUFsQixHQUFOO0FBQTJCLENBQXowSyxDQUFEOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZXZlbnRzLXN0dWRlbnQtYXNzaXN0YW5jZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wZGYtYnV0dG9uX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3BkZi1wcmV2aWV3X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0aW11bHVzX2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2JhY2tlbmQuc2NzcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvZGF2aWQvRGV2ZWxvcG1lbnQvUEhQL3Bhcy1hLXJlcGFzLTIvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGliL2Rpc3BsYXl8Y2FudmFzIiwid2VicGFjazovLy9pZ25vcmVkfC9Vc2Vycy9kYXZpZC9EZXZlbG9wbWVudC9QSFAvcGFzLWEtcmVwYXMtMi9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9saWIvZGlzcGxheXxmcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvZGF2aWQvRGV2ZWxvcG1lbnQvUEhQL3Bhcy1hLXJlcGFzLTIvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGliL2Rpc3BsYXl8aHR0cCIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvZGF2aWQvRGV2ZWxvcG1lbnQvUEhQL3Bhcy1hLXJlcGFzLTIvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGliL2Rpc3BsYXl8aHR0cHMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fHVybCIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvZGF2aWQvRGV2ZWxvcG1lbnQvUEhQL3Bhcy1hLXJlcGFzLTIvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGliL2Rpc3BsYXl8emxpYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZXZlbnRzLXN0dWRlbnQtYXNzaXN0YW5jZV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZXZlbnRzLXN0dWRlbnQtYXNzaXN0YW5jZV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9wZGYtYnV0dG9uX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9wZGYtYnV0dG9uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3BkZi1wcmV2aWV3X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9wZGYtcHJldmlld19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtY2hhcnRqcy0tY2hhcnQnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xuXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHsgZWlkOiBOdW1iZXIgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtNXggZmEtc3Bpbm5lciBmYS1zcGluXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfZXZlbnRfYXBpZ2V0JywgeyBpZDogdGhpcy5laWRWYWx1ZSB9KSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpICYmIHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ2h0bWwnKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5odG1sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0V2ZW50c1N0dWRlbnRBc3Npc3RhbmNlOjpjb25uZWN0XSBheGlvcyBlcnJvciByZXNwb25zZScsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vIGF0dGVuZCBjbGFzc1xuICAgICAgICAgICAgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluX2FwcF9ldmVudF9hcGlhdHRlbmRlZGNsYXNzJywgeyBpZDogdGhpcy5laWRWYWx1ZSwgc3R1ZGVudDogZXZlbnQudGFyZ2V0LnZhbHVlfSkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tFdmVudHNTdHVkZW50QXNzaXN0YW5jZTo6dXBkYXRlXSBhdHRlbmQgYXhpb3MgZXJyb3IgcmVzcG9uc2UnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgYXR0ZWQgY2xhc3NcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfZXZlbnRfYXBpbm90YXR0ZW5kZWRjbGFzcycsIHsgaWQ6IHRoaXMuZWlkVmFsdWUsIHN0dWRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiByZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdzYWlkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYWlkID0gcmVzcG9uc2UuZGF0YS5zYWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmRFbWFpbE5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFbWFpbE5vdGlmaWNhdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1lbnZlbG9wZS1vXCI+PC9pPiBFbnZpYXIgbm90aWZpY2FjacOzIGRlIG5vIGFzc2l0w6huY2lhIHBlciBjb3JyZXUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVtYWlsTm90aWZpY2F0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluX2FwcF9zdHVkZW50YWJzZW5jZV9ub3RpZmljYXRpb24nLCB7aWQ6IHNhaWR9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidG4gYnRuLXdhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFbWFpbE5vdGlmaWNhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbi10b3A6MTBweCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbmRFbWFpbE5vdGlmaWNhdGlvbkJ1dHRvbiwgc2VsZi5lbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbRXZlbnRzU3R1ZGVudEFzc2lzdGFuY2U6OnVwZGF0ZV0gTk9UIGF0dGVuZCBheGlvcyBlcnJvciByZXNwb25zZScsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0dWRlbnRBZGRlZChldmVudCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfZXZlbnRfYXBpYXR0ZW5kZWRjbGFzcycsIHsgaWQ6IGV2ZW50LmRldGFpbC5ldmVudCwgc3R1ZGVudDogZXZlbnQuZGV0YWlsLnN0dWRlbnR9KSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuaW5uZXJIVE1MICs9ICc8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveEV2ZW50JyArIGV2ZW50LmRldGFpbC5ldmVudCArICdTdHVkZW50JyArIGV2ZW50LmRldGFpbC5zdHVkZW50ICsgJ1wiIG5hbWU9XCJlaWQnICsgZXZlbnQuZGV0YWlsLmV2ZW50ICsgJ1wiIHZhbHVlPVwiJyArIGV2ZW50LmRldGFpbC5zdHVkZW50ICsgJ1wiIGRhdGEtYWN0aW9uPVwiY2xpY2stPmV2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2UjdXBkYXRlXCIgY2hlY2tlZD4gJyArIGV2ZW50LmRldGFpbC50ZXh0ICsgJzwvbGFiZWw+JztcbiAgICAgICAgICAgICAgICBsZXQgc3VibWl0Rm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnYnRuX3VwZGF0ZV9hbmRfZWRpdCcpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJtaXRGb3JtQnV0dG9ucyAmJiBzdWJtaXRGb3JtQnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm1CdXR0b25zWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbRXZlbnRzU3R1ZGVudEFzc2lzdGFuY2U6OnN0dWRlbnRBZGRlZF0gYXhpb3MgZXJyb3IgcmVzcG9uc2UnLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdHVkZW50UmVtb3ZlZChldmVudCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmxpbmVDaGVja2JveEV2ZW50JyArIGV2ZW50LmRldGFpbC5ldmVudCArICdTdHVkZW50JyArIGV2ZW50LmRldGFpbC5zdHVkZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgbGV0IGNoZWNrYm94ZXIgPSBlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChjaGVja2JveGVyKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hlci5yZW1vdmVDaGlsZChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdidG5fdXBkYXRlX2FuZF9lZGl0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHN1Ym1pdEZvcm1CdXR0b25zICYmIHN1Ym1pdEZvcm1CdXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0Rm9ybUJ1dHRvbnNbMF0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICBhdHRhY2htZW50OiBTdHJpbmcsXG4gICAgICAgIHBhdGg6IFN0cmluZyxcbiAgICB9O1xuXG4gICAgY2xpY2tlZCgpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FwcC1wZGYtcHJldmlldy1idXR0b24tY2xpY2tlZCcsIHtkZXRhaWw6IHthdHRhY2htZW50OiB0aGlzLmF0dGFjaG1lbnRWYWx1ZSwgcGF0aDogdGhpcy5wYXRoVmFsdWV9fSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCB7IGdldERvY3VtZW50LCBHbG9iYWxXb3JrZXJPcHRpb25zIH0gZnJvbSAncGRmanMtZGlzdC9saWIvcGRmJztcbkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gcmVxdWlyZSgncGRmanMtZGlzdC9idWlsZC9wZGYud29ya2VyLmVudHJ5LmpzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGNsYXNzZXMgPSBbICdoaWRkZW4nIF07XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXG4gICAgICAgICdjdXJyZW50JyxcbiAgICAgICAgJ3RvdGFsJyxcbiAgICAgICAgJ2Rvd25sb2FkZXInLFxuICAgICAgICAnY2FudmFzJyxcbiAgICAgICAgJ2xvYWRlcidcbiAgICBdO1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wZGZEb2MgPSBudWxsO1xuICAgICAgICB0aGlzLnBkZlBhZ2VOdW0gPSAxO1xuICAgICAgICB0aGlzLnBkZlBhZ2VSZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZGZQYWdlTnVtUGVuZGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMucGRmU2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMucGRmQ3R4ID0gdGhpcy5jYW52YXNUYXJnZXQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmxvYWRlclRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICB0aGlzLmNhbnZhc1RhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgIH1cblxuICAgIHJlbmRlclBhZ2UobnVtKSB7XG4gICAgICAgIHRoaXMucGRmUGFnZVJlbmRlcmluZyA9IHRydWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5wZGZEb2MuZ2V0UGFnZShudW0pLnRoZW4oZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0gcGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiBzZWxmLnBkZlNjYWxlIH0pO1xuICAgICAgICAgICAgc2VsZi5jYW52YXNUYXJnZXQuaGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi5jYW52YXNUYXJnZXQud2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgICAgICAgIGxldCByZW5kZXJDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQ6IHNlbGYucGRmQ3R4LFxuICAgICAgICAgICAgICAgIHZpZXdwb3J0OiB2aWV3cG9ydCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgcmVuZGVyVGFzayA9IHBhZ2UucmVuZGVyKHJlbmRlckNvbnRleHQpO1xuICAgICAgICAgICAgcmVuZGVyVGFzay5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucGRmUGFnZVJlbmRlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnBkZlBhZ2VOdW1QZW5kaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBhZ2Uoc2VsZi5wZGZQYWdlTnVtUGVuZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGRmUGFnZU51bVBlbmRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50ID0gbnVtO1xuICAgICAgICB0aGlzLnRvdGFsVGFyZ2V0LnRleHRDb250ZW50ID0gdGhpcy5wZGZEb2MubnVtUGFnZXM7XG4gICAgfVxuXG4gICAgcXVldWVSZW5kZXJQYWdlKG51bSkge1xuICAgICAgICBpZiAodGhpcy5wZGZQYWdlUmVuZGVyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBkZlBhZ2VOdW1QZW5kaW5nID0gbnVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKG51bSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wZGZQYWdlTnVtIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBkZlBhZ2VOdW0tLTtcbiAgICAgICAgdGhpcy5xdWV1ZVJlbmRlclBhZ2UodGhpcy5wZGZQYWdlTnVtKTtcbiAgICB9XG5cbiAgICBvbk5leHRQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wZGZQYWdlTnVtID49IHRoaXMucGRmRG9jLm51bVBhZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZGZQYWdlTnVtKys7XG4gICAgICAgIHRoaXMucXVldWVSZW5kZXJQYWdlKHRoaXMucGRmUGFnZU51bSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZG93bmxvYWRlclRhcmdldC5ocmVmID0gZXZlbnQuZGV0YWlsLnBhdGg7XG4gICAgICAgIHRoaXMubG9hZGVyVGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5oaWRkZW5DbGFzcyk7XG4gICAgICAgIHRoaXMuY2FudmFzVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5oaWRkZW5DbGFzcyk7XG4gICAgICAgIGxldCBsb2FkaW5nVGFzayA9IGdldERvY3VtZW50KGV2ZW50LmRldGFpbC5wYXRoKTtcbiAgICAgICAgbG9hZGluZ1Rhc2sucHJvbWlzZS50aGVuKChwZGYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGRmRG9jID0gcGRmO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKHRoaXMucGRmUGFnZU51bSk7XG4gICAgICAgIH0sIChlcnJvckdldCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nICcgKyBldmVudC5kZXRhaWwucGF0aCArICcgbG9hZGluZyBkb2N1bWVudDonLCBlcnJvckdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vY3NzL2JhY2tlbmQuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvbnNcbmltcG9ydCAnLi4vc3RpbXVsdXNfYm9vdHN0cmFwJztcblxuLy8gc3RhcnQgUERGIEpTIGxpYnJhcnlcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IGdldERvY3VtZW50LCBHbG9iYWxXb3JrZXJPcHRpb25zIH0gZnJvbSAncGRmanMtZGlzdC9saWIvcGRmJztcbkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gcmVxdWlyZSgncGRmanMtZGlzdC9idWlsZC9wZGYud29ya2VyLmVudHJ5LmpzJyk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHBkZkhvbGRlck5vZGVzID0galF1ZXJ5KCdbZGF0YS1ob2xkZXJdJyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBkZkhvbGRlck5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgcGRmSG9sZGVyTm9kZSA9IHBkZkhvbGRlck5vZGVzW2luZGV4XTtcbiAgICAgICAgbGV0IGlkID0gcGRmSG9sZGVyTm9kZS5pZDtcbiAgICAgICAgbGV0IG5vZGUgPSBqUXVlcnkoJyMnICsgaWQpO1xuICAgICAgICBsZXQgZG93bmxvYWRQYXRoID0gbm9kZS5hdHRyKCdkYXRhLWRvd25sb2FkJyk7XG4gICAgICAgIGxldCBsb2FkaW5nVGFzayA9IGdldERvY3VtZW50KGRvd25sb2FkUGF0aCk7XG4gICAgICAgIGxvYWRpbmdUYXNrLnByb21pc2UudGhlbigocGRmKSA9PiB7XG4gICAgICAgICAgICBwZGYuZ2V0UGFnZSgxKS50aGVuKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgdmlld3BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IHNjYWxlLCB9KTtcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi0nICsgaWQpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzQ29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQ6IHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwYWdlLnJlbmRlcihyZW5kZXJDb250ZXh0KTtcbiAgICAgICAgICAgIH0sIChlcnJvckdldCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyAnICsgZG93bmxvYWRQYXRoICsgJyBsb2FkaW5nIGZpcnN0IHBhZ2U6JywgZXJyb3JHZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIChlcnJvckdldCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nICcgKyBkb3dubG9hZFBhdGggKyAnIGxvYWRpbmcgZG9jdW1lbnQ6JywgZXJyb3JHZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj1mdW5jdGlvbigpe2Z1bmN0aW9uIHIodCxuKXtlKHRoaXMsciksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8ocixbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgcj10aGlzLGk9dm9pZCAwLHU9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxpKXt1LnRlc3QoZSk/byhlLHQpOnIuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/aTpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKGkgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIitpK1wiXVwiLHRbaV0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUscj1bdCxuLG8sZV07Zm9yKHZhciBpIGluIHIpaWYocltpXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW3JbaV1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSksdT1ufHx7fSxzPXQoe30sdSksYz1cIlwiLGE9ITAsbD1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gYz1yLmVuY29kZVBhdGhDb21wb25lbnQodFsxXSkrYyx2b2lkKGE9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1hfHwhbnx8dFszXWluIHUmJnVbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gdSlvPXVbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYSlyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgbD0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWx8fCFhKXt2YXIgZj1yLmVuY29kZVBhdGhDb21wb25lbnQobyk7XCJudWxsXCI9PT1mJiZudWxsPT09byYmKGY9XCJcIiksYz10WzFdK2YrY31hPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT1jJiYoYz1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGw9ZVsxXStsKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gdT8odD11W2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksbD1lWzFdK3QrbCkpfSksYz10aGlzLmNvbnRleHRfLmJhc2VfdXJsK2MsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWUpe3ZhciBoPWx8fHRoaXMuZ2V0SG9zdCgpO2M9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiK2grKGguaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKStjfWVsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXSl7dmFyIHA9bHx8dGhpcy5nZXRIb3N0KCk7Yz1pLnNjaGVtZXNbMF0rXCI6Ly9cIitwKyhwLmluZGV4T2YoXCI6XCIrZik+LTF8fFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrY31lbHNlIGwmJnRoaXMuZ2V0SG9zdCgpIT09bCsobC5pbmRleE9mKFwiOlwiK2YpPi0xfHxcIlwiPT09Zj9cIlwiOlwiOlwiK2YpP2M9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2wrKGwuaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKStjOm89PT0hMCYmKGM9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpKyh0aGlzLmdldEhvc3QoKS5pbmRleE9mKFwiOlwiK2YpPi0xfHxcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK2MpO2lmKE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgZD12b2lkIDAseT1bXSx2PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LHkucHVzaChyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KGUpK1wiPVwiK3IuZW5jb2RlUXVlcnlDb21wb25lbnQodCkpfTtmb3IoZCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhkLHNbZF0sdik7Yz1jK1wiP1wiK3kuam9pbihcIiZcIil9cmV0dXJuIGN9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXIuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX0se2tleTpcImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTJGL2csXCIvXCIpLnJlcGxhY2UoLyU0MC9nLFwiQFwiKS5yZXBsYWNlKC8lM0EvZyxcIjpcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyUzQi9nLFwiO1wiKS5yZXBsYWNlKC8lMkMvZyxcIixcIikucmVwbGFjZSgvJTJBL2csXCIqXCIpLnJlcGxhY2UoL1xcKC9nLFwiJTI4XCIpLnJlcGxhY2UoL1xcKS9nLFwiJTI5XCIpLnJlcGxhY2UoLycvZyxcIiUyN1wiKX19LHtrZXk6XCJlbmNvZGVQYXRoQ29tcG9uZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUzRC9nLFwiPVwiKS5yZXBsYWNlKC8lMkIvZyxcIitcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyU3Qy9nLFwifFwiKX19LHtrZXk6XCJlbmNvZGVRdWVyeUNvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiByLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0YvZyxcIj9cIil9fV0pLHJ9KCk7ci5Sb3V0ZSxyLkNvbnRleHQ7dmFyIGk9bmV3IHI7cmV0dXJue1JvdXRlcjpyLFJvdXRpbmc6aX19KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImF4aW9zIiwiUm91dGluZyIsInJvdXRlcyIsInJlcXVpcmUiLCJzZXRSb3V0aW5nRGF0YSIsInNlbGYiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiZ2V0IiwiZ2VuZXJhdGUiLCJpZCIsImVpZFZhbHVlIiwidGhlbiIsInJlc3BvbnNlIiwiaGFzT3duUHJvcGVydHkiLCJkYXRhIiwiaHRtbCIsImVycm9yIiwiY29uc29sZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsInN0dWRlbnQiLCJ2YWx1ZSIsInNhaWQiLCJzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJkZXRhaWwiLCJ0ZXh0Iiwic3VibWl0Rm9ybUJ1dHRvbnMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImxlbmd0aCIsImNsaWNrIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2JveGVyIiwicmVtb3ZlQ2hpbGQiLCJlaWQiLCJOdW1iZXIiLCJDdXN0b21FdmVudCIsImF0dGFjaG1lbnQiLCJhdHRhY2htZW50VmFsdWUiLCJwYXRoIiwicGF0aFZhbHVlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIlN0cmluZyIsImdldERvY3VtZW50IiwiR2xvYmFsV29ya2VyT3B0aW9ucyIsIndvcmtlclNyYyIsInBkZkRvYyIsInBkZlBhZ2VOdW0iLCJwZGZQYWdlUmVuZGVyaW5nIiwicGRmUGFnZU51bVBlbmRpbmciLCJwZGZTY2FsZSIsInBkZkN0eCIsImNhbnZhc1RhcmdldCIsImdldENvbnRleHQiLCJsb2FkZXJUYXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoaWRkZW5DbGFzcyIsImFkZCIsIm51bSIsImdldFBhZ2UiLCJwYWdlIiwidmlld3BvcnQiLCJnZXRWaWV3cG9ydCIsInNjYWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJyZW5kZXJDb250ZXh0IiwiY2FudmFzQ29udGV4dCIsInJlbmRlclRhc2siLCJyZW5kZXIiLCJwcm9taXNlIiwicmVuZGVyUGFnZSIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInRvdGFsVGFyZ2V0IiwibnVtUGFnZXMiLCJxdWV1ZVJlbmRlclBhZ2UiLCJkb3dubG9hZGVyVGFyZ2V0IiwiaHJlZiIsImxvYWRpbmdUYXNrIiwicGRmIiwiZXJyb3JHZXQiLCJqUXVlcnkiLCJyZWFkeSIsInBkZkhvbGRlck5vZGVzIiwiaW5kZXgiLCJwZGZIb2xkZXJOb2RlIiwibm9kZSIsImRvd25sb2FkUGF0aCIsImF0dHIiLCJjYW52YXMiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImUiLCJ0IiwibiIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3MiLCJSb3V0ZXIiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJvIiwicHJvdG90eXBlIiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInIiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiaSIsInUiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJzIiwiYyIsImEiLCJsIiwiZiIsImdldFBvcnQiLCJ0b2tlbnMiLCJlbmNvZGVQYXRoQ29tcG9uZW50IiwiZGVmYXVsdHMiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiZ2V0U2NoZW1lIiwiX3NjaGVtZSIsImgiLCJnZXRIb3N0IiwiaW5kZXhPZiIsInNjaGVtZXMiLCJwIiwia2V5cyIsImQiLCJ5IiwidiIsInB1c2giLCJlbmNvZGVRdWVyeUNvbXBvbmVudCIsImpvaW4iLCJnZXRJbnN0YW5jZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJjdXN0b21FbmNvZGVVUklDb21wb25lbnQiLCJSb3V0ZSIsIkNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9