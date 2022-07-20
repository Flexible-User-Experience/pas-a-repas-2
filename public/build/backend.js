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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default().setRoutingData(routes);

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
      axios__WEBPACK_IMPORTED_MODULE_15___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default().generate('admin_app_event_apiget', {
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
        axios__WEBPACK_IMPORTED_MODULE_15___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default().generate('admin_app_event_apiattendedclass', {
          id: this.eidValue,
          student: event.target.value
        })).then(function (response) {})["catch"](function (error) {
          console.error('[EventsStudentAssistance::update] attend axios error response', error);
        });
      } else {
        // not atted class
        var self = this;
        axios__WEBPACK_IMPORTED_MODULE_15___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default().generate('admin_app_event_apinotattendedclass', {
          id: this.eidValue,
          student: event.target.value
        })).then(function (response) {
          if (response.hasOwnProperty('data') && response.data.hasOwnProperty('said')) {
            var said = response.data.said;
            var sendEmailNotificationButton = document.createElement('a');
            sendEmailNotificationButton.innerHTML = '<i class="fa fa-envelope-o"></i> Enviar notificació de no assitència per correu';
            sendEmailNotificationButton.setAttribute('href', _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default().generate('admin_app_studentabsence_notification', {
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
      axios__WEBPACK_IMPORTED_MODULE_15___default().get(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_16___default().generate('admin_app_event_apiattendedclass', {
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
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pdfjs-dist/lib/pdf */ "./node_modules/pdfjs-dist/lib/pdf.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_16__.GlobalWorkerOptions.workerSrc = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.entry.js */ "./node_modules/pdfjs-dist/build/pdf.worker.entry.js");

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
      var loadingTask = (0,pdfjs_dist_lib_pdf__WEBPACK_IMPORTED_MODULE_16__.getDocument)(event.detail.path);
      loadingTask.promise.then(function (pdf) {
        _this.pdfDoc = pdf;

        _this.renderPage(_this.pdfPageNum);
      }, function (errorGet) {
        console.error('Error during ' + event.detail.path + ' loading document:', errorGet);
      });
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__.Controller);

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
/* harmony import */ var _css_backend_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_backend_scss__WEBPACK_IMPORTED_MODULE_0__);
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/resolve-url-loader/index.js):\nError: resolve-url-loader: error processing CSS\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/david/Development/PHP/pas-a-repas-2/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:274:12)\n    at onFailure (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:215:14)\n    at tryRunOrWebpackError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/david/Development/PHP/pas-a-repas-2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:4990:43\n    at symbolIterator (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:2297:7)\n-- inner error --\nError: Module build failed (from ./node_modules/resolve-url-loader/index.js):\nError: resolve-url-loader: error processing CSS\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/david/Development/PHP/pas-a-repas-2/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:274:12)\n    at onFailure (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:215:14)\n    at Object.<anonymous> (/Users/david/Development/PHP/pas-a-repas-2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/Users/david/Development/PHP/pas-a-repas-2/assets/css/backend.scss:1:7)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (/Users/david/Development/PHP/pas-a-repas-2/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5057:39\n    at tryRunOrWebpackError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /Users/david/Development/PHP/pas-a-repas-2/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/david/Development/PHP/pas-a-repas-2/node_modules/neo-async/async.js:3527:9)\n\nGenerated code for /Users/david/Development/PHP/pas-a-repas-2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/Users/david/Development/PHP/pas-a-repas-2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/Users/david/Development/PHP/pas-a-repas-2/assets/css/backend.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/resolve-url-loader/index.js):\\nError: resolve-url-loader: error processing CSS\\n  PostCSS received undefined instead of CSS string\\n  at new Input (/Users/david/Development/PHP/pas-a-repas-2/node_modules/postcss/lib/input.js:24:13)\\n    at encodeError (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:274:12)\\n    at onFailure (/Users/david/Development/PHP/pas-a-repas-2/node_modules/resolve-url-loader/index.js:215:14)\");");

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-20a9b1","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-chartjs_di-2fe1fb"], () => (__webpack_exec__("./assets/js/backend.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQXhaLEVBQTRqQjtNQUFDdEQsR0FBRyxFQUFDLHNCQUFMO01BQTRCdkcsS0FBSyxFQUFDLGVBQVNnRixDQUFULEVBQVc7UUFBQyxPQUFPd0IsQ0FBQyxDQUFDc0Qsd0JBQUYsQ0FBMkI5RSxDQUEzQixFQUE4QjZFLE9BQTlCLENBQXNDLE1BQXRDLEVBQTZDLEdBQTdDLENBQVA7TUFBeUQ7SUFBdkcsQ0FBNWpCLENBQTNpSCxDQUFELEVBQW10SXJELENBQTF0STtFQUE0dEksQ0FBcDJJLEVBQTNtQjs7RUFBazlKQSxDQUFDLENBQUN1RCxLQUFGLEVBQVF2RCxDQUFDLENBQUN3RCxPQUFWO0VBQWtCLElBQUl2QyxDQUFDLEdBQUMsSUFBSWpCLENBQUosRUFBTjtFQUFZLE9BQU07SUFBQ2hCLE1BQU0sRUFBQ2dCLENBQVI7SUFBVTlILE9BQU8sRUFBQytJO0VBQWxCLENBQU47QUFBMkIsQ0FBejBLLENBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2V2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2VfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcGRmLWJ1dHRvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wZGYtcHJldmlld19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9iYWNrZW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdGltdWx1c19ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fGNhbnZhcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvZGF2aWQvRGV2ZWxvcG1lbnQvUEhQL3Bhcy1hLXJlcGFzLTIvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGliL2Rpc3BsYXl8ZnMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fGh0dHAiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fGh0dHBzIiwid2VicGFjazovLy9pZ25vcmVkfC9Vc2Vycy9kYXZpZC9EZXZlbG9wbWVudC9QSFAvcGFzLWEtcmVwYXMtMi9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9saWIvZGlzcGxheXx1cmwiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L1VzZXJzL2RhdmlkL0RldmVsb3BtZW50L1BIUC9wYXMtYS1yZXBhcy0yL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xpYi9kaXNwbGF5fHpsaWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2V2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2VfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2V2ZW50cy1zdHVkZW50LWFzc2lzdGFuY2VfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcGRmLWJ1dHRvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcGRmLWJ1dHRvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9wZGYtcHJldmlld19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcGRmLXByZXZpZXdfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWNoYXJ0anMvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB2YWx1ZXMgPSB7IGVpZDogTnVtYmVyIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLTV4IGZhLXNwaW5uZXIgZmEtc3BpblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fYXBwX2V2ZW50X2FwaWdldCcsIHsgaWQ6IHRoaXMuZWlkVmFsdWUgfSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiByZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdodG1sJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuaHRtbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tFdmVudHNTdHVkZW50QXNzaXN0YW5jZTo6Y29ubmVjdF0gYXhpb3MgZXJyb3IgcmVzcG9uc2UnLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAvLyBhdHRlbmQgY2xhc3NcbiAgICAgICAgICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfZXZlbnRfYXBpYXR0ZW5kZWRjbGFzcycsIHsgaWQ6IHRoaXMuZWlkVmFsdWUsIHN0dWRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbRXZlbnRzU3R1ZGVudEFzc2lzdGFuY2U6OnVwZGF0ZV0gYXR0ZW5kIGF4aW9zIGVycm9yIHJlc3BvbnNlJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IGF0dGVkIGNsYXNzXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fYXBwX2V2ZW50X2FwaW5vdGF0dGVuZGVkY2xhc3MnLCB7IGlkOiB0aGlzLmVpZFZhbHVlLCBzdHVkZW50OiBldmVudC50YXJnZXQudmFsdWV9KSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdkYXRhJykgJiYgcmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnc2FpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FpZCA9IHJlc3BvbnNlLmRhdGEuc2FpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGUtb1wiPjwvaT4gRW52aWFyIG5vdGlmaWNhY2nDsyBkZSBubyBhc3NpdMOobmNpYSBwZXIgY29ycmV1JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRFbWFpbE5vdGlmaWNhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfc3R1ZGVudGFic2VuY2Vfbm90aWZpY2F0aW9uJywge2lkOiBzYWlkfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEVtYWlsTm90aWZpY2F0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi13YXJuaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tdG9wOjEwcHgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZW5kRW1haWxOb3RpZmljYXRpb25CdXR0b24sIHNlbGYuZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0V2ZW50c1N0dWRlbnRBc3Npc3RhbmNlOjp1cGRhdGVdIE5PVCBhdHRlbmQgYXhpb3MgZXJyb3IgcmVzcG9uc2UnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdHVkZW50QWRkZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fYXBwX2V2ZW50X2FwaWF0dGVuZGVkY2xhc3MnLCB7IGlkOiBldmVudC5kZXRhaWwuZXZlbnQsIHN0dWRlbnQ6IGV2ZW50LmRldGFpbC5zdHVkZW50fSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmlubmVySFRNTCArPSAnPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaW5saW5lQ2hlY2tib3hFdmVudCcgKyBldmVudC5kZXRhaWwuZXZlbnQgKyAnU3R1ZGVudCcgKyBldmVudC5kZXRhaWwuc3R1ZGVudCArICdcIiBuYW1lPVwiZWlkJyArIGV2ZW50LmRldGFpbC5ldmVudCArICdcIiB2YWx1ZT1cIicgKyBldmVudC5kZXRhaWwuc3R1ZGVudCArICdcIiBkYXRhLWFjdGlvbj1cImNsaWNrLT5ldmVudHMtc3R1ZGVudC1hc3Npc3RhbmNlI3VwZGF0ZVwiIGNoZWNrZWQ+ICcgKyBldmVudC5kZXRhaWwudGV4dCArICc8L2xhYmVsPic7XG4gICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm1CdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2J0bl91cGRhdGVfYW5kX2VkaXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VibWl0Rm9ybUJ1dHRvbnMgJiYgc3VibWl0Rm9ybUJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRGb3JtQnV0dG9uc1swXS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW0V2ZW50c1N0dWRlbnRBc3Npc3RhbmNlOjpzdHVkZW50QWRkZWRdIGF4aW9zIGVycm9yIHJlc3BvbnNlJywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3R1ZGVudFJlbW92ZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5saW5lQ2hlY2tib3hFdmVudCcgKyBldmVudC5kZXRhaWwuZXZlbnQgKyAnU3R1ZGVudCcgKyBldmVudC5kZXRhaWwuc3R1ZGVudCk7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveGVyID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3hlcikge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94ZXIucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBsZXQgc3VibWl0Rm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnYnRuX3VwZGF0ZV9hbmRfZWRpdCcpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJtaXRGb3JtQnV0dG9ucyAmJiBzdWJtaXRGb3JtQnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm1CdXR0b25zWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgYXR0YWNobWVudDogU3RyaW5nLFxuICAgICAgICBwYXRoOiBTdHJpbmcsXG4gICAgfTtcblxuICAgIGNsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhcHAtcGRmLXByZXZpZXctYnV0dG9uLWNsaWNrZWQnLCB7ZGV0YWlsOiB7YXR0YWNobWVudDogdGhpcy5hdHRhY2htZW50VmFsdWUsIHBhdGg6IHRoaXMucGF0aFZhbHVlfX0pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgeyBnZXREb2N1bWVudCwgR2xvYmFsV29ya2VyT3B0aW9ucyB9IGZyb20gJ3BkZmpzLWRpc3QvbGliL3BkZic7XG5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHJlcXVpcmUoJ3BkZmpzLWRpc3QvYnVpbGQvcGRmLndvcmtlci5lbnRyeS5qcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBjbGFzc2VzID0gWyAnaGlkZGVuJyBdO1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xuICAgICAgICAnY3VycmVudCcsXG4gICAgICAgICd0b3RhbCcsXG4gICAgICAgICdkb3dubG9hZGVyJyxcbiAgICAgICAgJ2NhbnZhcycsXG4gICAgICAgICdsb2FkZXInXG4gICAgXTtcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucGRmRG9jID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZGZQYWdlTnVtID0gMTtcbiAgICAgICAgdGhpcy5wZGZQYWdlUmVuZGVyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGRmUGFnZU51bVBlbmRpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLnBkZlNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLnBkZkN0eCA9IHRoaXMuY2FudmFzVGFyZ2V0LmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkZXJUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgdGhpcy5jYW52YXNUYXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICB9XG5cbiAgICByZW5kZXJQYWdlKG51bSkge1xuICAgICAgICB0aGlzLnBkZlBhZ2VSZW5kZXJpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucGRmRG9jLmdldFBhZ2UobnVtKS50aGVuKGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IHBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogc2VsZi5wZGZTY2FsZSB9KTtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzVGFyZ2V0LmhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzVGFyZ2V0LndpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICAgICAgICBsZXQgcmVuZGVyQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBjYW52YXNDb250ZXh0OiBzZWxmLnBkZkN0eCxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydDogdmlld3BvcnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHJlbmRlclRhc2sgPSBwYWdlLnJlbmRlcihyZW5kZXJDb250ZXh0KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2sucHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBkZlBhZ2VSZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wZGZQYWdlTnVtUGVuZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKHNlbGYucGRmUGFnZU51bVBlbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBkZlBhZ2VOdW1QZW5kaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCA9IG51bTtcbiAgICAgICAgdGhpcy50b3RhbFRhcmdldC50ZXh0Q29udGVudCA9IHRoaXMucGRmRG9jLm51bVBhZ2VzO1xuICAgIH1cblxuICAgIHF1ZXVlUmVuZGVyUGFnZShudW0pIHtcbiAgICAgICAgaWYgKHRoaXMucGRmUGFnZVJlbmRlcmluZykge1xuICAgICAgICAgICAgdGhpcy5wZGZQYWdlTnVtUGVuZGluZyA9IG51bTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZShudW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGRmUGFnZU51bSA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZGZQYWdlTnVtLS07XG4gICAgICAgIHRoaXMucXVldWVSZW5kZXJQYWdlKHRoaXMucGRmUGFnZU51bSk7XG4gICAgfVxuXG4gICAgb25OZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGRmUGFnZU51bSA+PSB0aGlzLnBkZkRvYy5udW1QYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGRmUGFnZU51bSsrO1xuICAgICAgICB0aGlzLnF1ZXVlUmVuZGVyUGFnZSh0aGlzLnBkZlBhZ2VOdW0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICB0aGlzLmRvd25sb2FkZXJUYXJnZXQuaHJlZiA9IGV2ZW50LmRldGFpbC5wYXRoO1xuICAgICAgICB0aGlzLmxvYWRlclRhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICB0aGlzLmNhbnZhc1RhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICBsZXQgbG9hZGluZ1Rhc2sgPSBnZXREb2N1bWVudChldmVudC5kZXRhaWwucGF0aCk7XG4gICAgICAgIGxvYWRpbmdUYXNrLnByb21pc2UudGhlbigocGRmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBkZkRvYyA9IHBkZjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSh0aGlzLnBkZlBhZ2VOdW0pO1xuICAgICAgICB9LCAoZXJyb3JHZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyAnICsgZXZlbnQuZGV0YWlsLnBhdGggKyAnIGxvYWRpbmcgZG9jdW1lbnQ6JywgZXJyb3JHZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uL2Nzcy9iYWNrZW5kLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25zXG5pbXBvcnQgJy4uL3N0aW11bHVzX2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IFBERiBKUyBsaWJyYXJ5XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBnZXREb2N1bWVudCwgR2xvYmFsV29ya2VyT3B0aW9ucyB9IGZyb20gJ3BkZmpzLWRpc3QvbGliL3BkZic7XG5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHJlcXVpcmUoJ3BkZmpzLWRpc3QvYnVpbGQvcGRmLndvcmtlci5lbnRyeS5qcycpO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGxldCBwZGZIb2xkZXJOb2RlcyA9IGpRdWVyeSgnW2RhdGEtaG9sZGVyXScpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwZGZIb2xkZXJOb2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHBkZkhvbGRlck5vZGUgPSBwZGZIb2xkZXJOb2Rlc1tpbmRleF07XG4gICAgICAgIGxldCBpZCA9IHBkZkhvbGRlck5vZGUuaWQ7XG4gICAgICAgIGxldCBub2RlID0galF1ZXJ5KCcjJyArIGlkKTtcbiAgICAgICAgbGV0IGRvd25sb2FkUGF0aCA9IG5vZGUuYXR0cignZGF0YS1kb3dubG9hZCcpO1xuICAgICAgICBsZXQgbG9hZGluZ1Rhc2sgPSBnZXREb2N1bWVudChkb3dubG9hZFBhdGgpO1xuICAgICAgICBsb2FkaW5nVGFzay5wcm9taXNlLnRoZW4oKHBkZikgPT4ge1xuICAgICAgICAgICAgcGRmLmdldFBhZ2UoMSkudGhlbigocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0gcGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiBzY2FsZSwgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtJyArIGlkKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0OiB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcGFnZS5yZW5kZXIocmVuZGVyQ29udGV4dCk7XG4gICAgICAgICAgICB9LCAoZXJyb3JHZXQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgJyArIGRvd25sb2FkUGF0aCArICcgbG9hZGluZyBmaXJzdCBwYWdlOicsIGVycm9yR2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoZXJyb3JHZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyAnICsgZG93bmxvYWRQYXRoICsgJyBsb2FkaW5nIGRvY3VtZW50OicsIGVycm9yR2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcbiIsIiFmdW5jdGlvbihlLHQpe3ZhciBuPXQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4uUm91dGluZyk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bi5Sb3V0aW5nOihlLlJvdXRpbmc9bi5Sb3V0aW5nLGUuZm9zPXtSb3V0ZXI6bi5Sb3V0ZXJ9KX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsbil7ZSh0aGlzLHIpLHRoaXMuY29udGV4dF89dHx8e2Jhc2VfdXJsOlwiXCIscHJlZml4OlwiXCIsaG9zdDpcIlwiLHBvcnQ6XCJcIixzY2hlbWU6XCJcIixsb2NhbGU6XCJcIn0sdGhpcy5zZXRSb3V0ZXMobnx8e30pfXJldHVybiBvKHIsW3trZXk6XCJzZXRSb3V0aW5nRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuc2V0QmFzZVVybChlLmJhc2VfdXJsKSx0aGlzLnNldFJvdXRlcyhlLnJvdXRlcyksXCJwcmVmaXhcImluIGUmJnRoaXMuc2V0UHJlZml4KGUucHJlZml4KSxcInBvcnRcImluIGUmJnRoaXMuc2V0UG9ydChlLnBvcnQpLFwibG9jYWxlXCJpbiBlJiZ0aGlzLnNldExvY2FsZShlLmxvY2FsZSksdGhpcy5zZXRIb3N0KGUuaG9zdCksdGhpcy5zZXRTY2hlbWUoZS5zY2hlbWUpfX0se2tleTpcInNldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucm91dGVzXz1PYmplY3QuZnJlZXplKGUpfX0se2tleTpcImdldFJvdXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm91dGVzX319LHtrZXk6XCJzZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5iYXNlX3VybD1lfX0se2tleTpcImdldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsfX0se2tleTpcInNldFByZWZpeFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucHJlZml4PWV9fSx7a2V5Olwic2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5zY2hlbWU9ZX19LHtrZXk6XCJnZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZX19LHtrZXk6XCJzZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5ob3N0PWV9fSx7a2V5OlwiZ2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdH19LHtrZXk6XCJzZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wb3J0PWV9fSx7a2V5OlwiZ2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydH19LHtrZXk6XCJzZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmxvY2FsZT1lfX0se2tleTpcImdldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlfX0se2tleTpcImJ1aWxkUXVlcnlQYXJhbXNcIix2YWx1ZTpmdW5jdGlvbihlLHQsbyl7dmFyIHI9dGhpcyxpPXZvaWQgMCx1PW5ldyBSZWdFeHAoL1xcW1xcXSQvKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpdC5mb3JFYWNoKGZ1bmN0aW9uKHQsaSl7dS50ZXN0KGUpP28oZSx0KTpyLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIisoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpP2k6XCJcIikrXCJdXCIsdCxvKX0pO2Vsc2UgaWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOm4odCkpKWZvcihpIGluIHQpdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIraStcIl1cIix0W2ldLG8pO2Vsc2UgbyhlLHQpfX0se2tleTpcImdldFJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb250ZXh0Xy5wcmVmaXgrZSxuPWUrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsbz10aGlzLmNvbnRleHRfLnByZWZpeCtlK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLHI9W3QsbixvLGVdO2Zvcih2YXIgaSBpbiByKWlmKHJbaV1pbiB0aGlzLnJvdXRlc18pcmV0dXJuIHRoaXMucm91dGVzX1tyW2ldXTt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrZSsnXCIgZG9lcyBub3QgZXhpc3QuJyl9fSx7a2V5OlwiZ2VuZXJhdGVcIix2YWx1ZTpmdW5jdGlvbihlLG4pe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdJiZhcmd1bWVudHNbMl0saT10aGlzLmdldFJvdXRlKGUpLHU9bnx8e30scz10KHt9LHUpLGM9XCJcIixhPSEwLGw9XCJcIixmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzLmdldFBvcnQoKXx8bnVsbD09PXRoaXMuZ2V0UG9ydCgpP1wiXCI6dGhpcy5nZXRQb3J0KCk7aWYoaS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcInRleHRcIj09PXRbMF0pcmV0dXJuIGM9ci5lbmNvZGVQYXRoQ29tcG9uZW50KHRbMV0pK2Msdm9pZChhPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09YXx8IW58fHRbM11pbiB1JiZ1W3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHUpbz11W3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGEpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGw9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFsfHwhYSl7dmFyIGY9ci5lbmNvZGVQYXRoQ29tcG9uZW50KG8pO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLGM9dFsxXStmK2N9YT0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09YyYmKGM9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChsPWVbMV0rbCk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHU/KHQ9dVtlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGw9ZVsxXSt0K2wpKX0pLGM9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCtjLGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lKXt2YXIgaD1sfHx0aGlzLmdldEhvc3QoKTtjPWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIitoKyhoLmluZGV4T2YoXCI6XCIrZik+LTF8fFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrY31lbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnNjaGVtZXNbMF0mJnRoaXMuZ2V0U2NoZW1lKCkhPT1pLnNjaGVtZXNbMF0pe3ZhciBwPWx8fHRoaXMuZ2V0SG9zdCgpO2M9aS5zY2hlbWVzWzBdK1wiOi8vXCIrcCsocC5pbmRleE9mKFwiOlwiK2YpPi0xfHxcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK2N9ZWxzZSBsJiZ0aGlzLmdldEhvc3QoKSE9PWwrKGwuaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKT9jPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIitsKyhsLmluZGV4T2YoXCI6XCIrZik+LTF8fFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrYzpvPT09ITAmJihjPXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIit0aGlzLmdldEhvc3QoKSsodGhpcy5nZXRIb3N0KCkuaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKStjKTtpZihPYmplY3Qua2V5cyhzKS5sZW5ndGg+MCl7dmFyIGQ9dm9pZCAwLHk9W10sdj1mdW5jdGlvbihlLHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCx0PW51bGw9PT10P1wiXCI6dCx5LnB1c2goci5lbmNvZGVRdWVyeUNvbXBvbmVudChlKStcIj1cIityLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHQpKX07Zm9yKGQgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZCxzW2RdLHYpO2M9YytcIj9cIit5LmpvaW4oXCImXCIpfXJldHVybiBjfX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBpfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1yLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19LHtrZXk6XCJjdXN0b21FbmNvZGVVUklDb21wb25lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUyRi9nLFwiL1wiKS5yZXBsYWNlKC8lNDAvZyxcIkBcIikucmVwbGFjZSgvJTNBL2csXCI6XCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lM0IvZyxcIjtcIikucmVwbGFjZSgvJTJDL2csXCIsXCIpLnJlcGxhY2UoLyUyQS9nLFwiKlwiKS5yZXBsYWNlKC9cXCgvZyxcIiUyOFwiKS5yZXBsYWNlKC9cXCkvZyxcIiUyOVwiKS5yZXBsYWNlKC8nL2csXCIlMjdcIil9fSx7a2V5OlwiZW5jb2RlUGF0aENvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiByLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0QvZyxcIj1cIikucmVwbGFjZSgvJTJCL2csXCIrXCIpLnJlcGxhY2UoLyUyMS9nLFwiIVwiKS5yZXBsYWNlKC8lN0MvZyxcInxcIil9fSx7a2V5OlwiZW5jb2RlUXVlcnlDb21wb25lbnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTNGL2csXCI/XCIpfX1dKSxyfSgpO3IuUm91dGUsci5Db250ZXh0O3ZhciBpPW5ldyByO3JldHVybntSb3V0ZXI6cixSb3V0aW5nOml9fSk7IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJheGlvcyIsIlJvdXRpbmciLCJyb3V0ZXMiLCJyZXF1aXJlIiwic2V0Um91dGluZ0RhdGEiLCJzZWxmIiwiZWxlbWVudCIsImlubmVySFRNTCIsImdldCIsImdlbmVyYXRlIiwiaWQiLCJlaWRWYWx1ZSIsInRoZW4iLCJyZXNwb25zZSIsImhhc093blByb3BlcnR5IiwiZGF0YSIsImh0bWwiLCJlcnJvciIsImNvbnNvbGUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJzdHVkZW50IiwidmFsdWUiLCJzYWlkIiwic2VuZEVtYWlsTm90aWZpY2F0aW9uQnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZGV0YWlsIiwidGV4dCIsInN1Ym1pdEZvcm1CdXR0b25zIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsZW5ndGgiLCJjbGljayIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tib3hlciIsInJlbW92ZUNoaWxkIiwiZWlkIiwiTnVtYmVyIiwiQ3VzdG9tRXZlbnQiLCJhdHRhY2htZW50IiwiYXR0YWNobWVudFZhbHVlIiwicGF0aCIsInBhdGhWYWx1ZSIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJTdHJpbmciLCJnZXREb2N1bWVudCIsIkdsb2JhbFdvcmtlck9wdGlvbnMiLCJ3b3JrZXJTcmMiLCJwZGZEb2MiLCJwZGZQYWdlTnVtIiwicGRmUGFnZVJlbmRlcmluZyIsInBkZlBhZ2VOdW1QZW5kaW5nIiwicGRmU2NhbGUiLCJwZGZDdHgiLCJjYW52YXNUYXJnZXQiLCJnZXRDb250ZXh0IiwibG9hZGVyVGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaGlkZGVuQ2xhc3MiLCJhZGQiLCJudW0iLCJnZXRQYWdlIiwicGFnZSIsInZpZXdwb3J0IiwiZ2V0Vmlld3BvcnQiLCJzY2FsZSIsImhlaWdodCIsIndpZHRoIiwicmVuZGVyQ29udGV4dCIsImNhbnZhc0NvbnRleHQiLCJyZW5kZXJUYXNrIiwicmVuZGVyIiwicHJvbWlzZSIsInJlbmRlclBhZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0b3RhbFRhcmdldCIsIm51bVBhZ2VzIiwicXVldWVSZW5kZXJQYWdlIiwiZG93bmxvYWRlclRhcmdldCIsImhyZWYiLCJsb2FkaW5nVGFzayIsInBkZiIsImVycm9yR2V0IiwialF1ZXJ5IiwicmVhZHkiLCJwZGZIb2xkZXJOb2RlcyIsImluZGV4IiwicGRmSG9sZGVyTm9kZSIsIm5vZGUiLCJkb3dubG9hZFBhdGgiLCJhdHRyIiwiY2FudmFzIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJlIiwidCIsIm4iLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9zIiwiUm91dGVyIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibyIsInByb3RvdHlwZSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJyIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsImkiLCJ1IiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwicyIsImMiLCJhIiwibCIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImRlZmF1bHRzIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJoIiwiZ2V0SG9zdCIsImluZGV4T2YiLCJzY2hlbWVzIiwicCIsImtleXMiLCJkIiwieSIsInYiLCJwdXNoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==