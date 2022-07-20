(self["webpackChunk"] = self["webpackChunk"] || []).push([["public_bundles_fosjsrouting_js_router_min_js-public_js_fos_js_routes_json"],{

/***/ "./public/bundles/fosjsrouting/js/router.min.js":
/*!******************************************************!*\
  !*** ./public/bundles/fosjsrouting/js/router.min.js ***!
  \******************************************************/
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

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"fc_load_events":{"tokens":[["text","/admin/fc-load-events"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sonata_admin_dashboard":{"tokens":[["text","/admin/dashboard"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_studentabsence_notification":{"tokens":[["text","/notification"],["variable","/","[^/]++","id"],["text","/admin/students/absence"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apiget":{"tokens":[["text","/api/get"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apiattendedclass":{"tokens":[["text","/attended-the-class"],["variable","/","[^/]++","student"],["text","/api"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apinotattendedclass":{"tokens":[["text","/not-attended-the-class"],["variable","/","[^/]++","student"],["text","/api"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_filedummy_exportCalendarPdfList":{"tokens":[["variable","/","[^/]++","end"],["text","/to"],["variable","/","[^/]++","start"],["text","/admin/extras/export-calendar-pdf-list/from"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":[]}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2J1bmRsZXNfZm9zanNyb3V0aW5nX2pzX3JvdXRlcl9taW5fanMtcHVibGljX2pzX2Zvc19qc19yb3V0ZXNfanNvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0VBQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLEVBQVA7RUFBVSxRQUFzQ0UsaUNBQU8sRUFBRCxvQ0FBSUQsQ0FBQyxDQUFDRyxPQUFOO0FBQUE7QUFBQTtBQUFBLGtHQUE1QyxHQUEyRCxDQUEzRDtBQUEwSyxDQUFsTSxDQUFtTSxJQUFuTSxFQUF3TSxZQUFVO0VBQUM7O0VBQWEsU0FBU0wsQ0FBVCxDQUFXQSxDQUFYLEVBQWFDLENBQWIsRUFBZTtJQUFDLElBQUcsRUFBRUQsQ0FBQyxZQUFZQyxDQUFmLENBQUgsRUFBcUIsTUFBTSxJQUFJUyxTQUFKLENBQWMsbUNBQWQsQ0FBTjtFQUF5RDs7RUFBQSxJQUFJVCxDQUFDLEdBQUNVLE1BQU0sQ0FBQ0MsTUFBUCxJQUFlLFVBQVNaLENBQVQsRUFBVztJQUFDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDWSxTQUFTLENBQUNDLE1BQXhCLEVBQStCYixDQUFDLEVBQWhDLEVBQW1DO01BQUMsSUFBSUMsQ0FBQyxHQUFDVyxTQUFTLENBQUNaLENBQUQsQ0FBZjs7TUFBbUIsS0FBSSxJQUFJYyxDQUFSLElBQWFiLENBQWI7UUFBZVMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNoQixDQUFyQyxFQUF1Q2EsQ0FBdkMsTUFBNENmLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELEdBQUtiLENBQUMsQ0FBQ2EsQ0FBRCxDQUFsRDtNQUFmO0lBQXNFOztJQUFBLE9BQU9mLENBQVA7RUFBUyxDQUF2SztFQUFBLElBQXdLRSxDQUFDLEdBQUMsY0FBWSxPQUFP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WSxPQUFNO0lBQUNsQixNQUFNLEVBQUNrQixDQUFSO0lBQVV0QixPQUFPLEVBQUN5QztFQUFsQixDQUFOO0FBQTJCLENBQXowSyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2J1bmRsZXMvZm9zanNyb3V0aW5nL2pzL3JvdXRlci5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj1mdW5jdGlvbigpe2Z1bmN0aW9uIHIodCxuKXtlKHRoaXMsciksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8ocixbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgcj10aGlzLGk9dm9pZCAwLHU9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxpKXt1LnRlc3QoZSk/byhlLHQpOnIuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/aTpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKGkgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIitpK1wiXVwiLHRbaV0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUscj1bdCxuLG8sZV07Zm9yKHZhciBpIGluIHIpaWYocltpXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW3JbaV1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSksdT1ufHx7fSxzPXQoe30sdSksYz1cIlwiLGE9ITAsbD1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gYz1yLmVuY29kZVBhdGhDb21wb25lbnQodFsxXSkrYyx2b2lkKGE9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1hfHwhbnx8dFszXWluIHUmJnVbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gdSlvPXVbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYSlyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgbD0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWx8fCFhKXt2YXIgZj1yLmVuY29kZVBhdGhDb21wb25lbnQobyk7XCJudWxsXCI9PT1mJiZudWxsPT09byYmKGY9XCJcIiksYz10WzFdK2YrY31hPSExfWVsc2UgbiYmdFszXWluIHMmJmRlbGV0ZSBzW3RbM11dfX0pLFwiXCI9PT1jJiYoYz1cIi9cIiksaS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwidGV4dFwiPT09ZVswXT92b2lkKGw9ZVsxXStsKTp2b2lkKFwidmFyaWFibGVcIj09PWVbMF0mJihlWzNdaW4gdT8odD11W2VbM11dLGRlbGV0ZSBzW2VbM11dKTppLmRlZmF1bHRzJiZlWzNdaW4gaS5kZWZhdWx0cyYmKHQ9aS5kZWZhdWx0c1tlWzNdXSksbD1lWzFdK3QrbCkpfSksYz10aGlzLmNvbnRleHRfLmJhc2VfdXJsK2MsaS5yZXF1aXJlbWVudHMmJlwiX3NjaGVtZVwiaW4gaS5yZXF1aXJlbWVudHMmJnRoaXMuZ2V0U2NoZW1lKCkhPWkucmVxdWlyZW1lbnRzLl9zY2hlbWUpe3ZhciBoPWx8fHRoaXMuZ2V0SG9zdCgpO2M9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiK2grKGguaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKStjfWVsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXSl7dmFyIHA9bHx8dGhpcy5nZXRIb3N0KCk7Yz1pLnNjaGVtZXNbMF0rXCI6Ly9cIitwKyhwLmluZGV4T2YoXCI6XCIrZik+LTF8fFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrY31lbHNlIGwmJnRoaXMuZ2V0SG9zdCgpIT09bCsobC5pbmRleE9mKFwiOlwiK2YpPi0xfHxcIlwiPT09Zj9cIlwiOlwiOlwiK2YpP2M9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK2wrKGwuaW5kZXhPZihcIjpcIitmKT4tMXx8XCJcIj09PWY/XCJcIjpcIjpcIitmKStjOm89PT0hMCYmKGM9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpKyh0aGlzLmdldEhvc3QoKS5pbmRleE9mKFwiOlwiK2YpPi0xfHxcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK2MpO2lmKE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgZD12b2lkIDAseT1bXSx2PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LHkucHVzaChyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KGUpK1wiPVwiK3IuZW5jb2RlUXVlcnlDb21wb25lbnQodCkpfTtmb3IoZCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhkLHNbZF0sdik7Yz1jK1wiP1wiK3kuam9pbihcIiZcIil9cmV0dXJuIGN9fV0sW3trZXk6XCJnZXRJbnN0YW5jZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9fSx7a2V5Olwic2V0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXIuZ2V0SW5zdGFuY2UoKTt0LnNldFJvdXRpbmdEYXRhKGUpfX0se2tleTpcImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvJTJGL2csXCIvXCIpLnJlcGxhY2UoLyU0MC9nLFwiQFwiKS5yZXBsYWNlKC8lM0EvZyxcIjpcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyUzQi9nLFwiO1wiKS5yZXBsYWNlKC8lMkMvZyxcIixcIikucmVwbGFjZSgvJTJBL2csXCIqXCIpLnJlcGxhY2UoL1xcKC9nLFwiJTI4XCIpLnJlcGxhY2UoL1xcKS9nLFwiJTI5XCIpLnJlcGxhY2UoLycvZyxcIiUyN1wiKX19LHtrZXk6XCJlbmNvZGVQYXRoQ29tcG9uZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUzRC9nLFwiPVwiKS5yZXBsYWNlKC8lMkIvZyxcIitcIikucmVwbGFjZSgvJTIxL2csXCIhXCIpLnJlcGxhY2UoLyU3Qy9nLFwifFwiKX19LHtrZXk6XCJlbmNvZGVRdWVyeUNvbXBvbmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiByLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lM0YvZyxcIj9cIil9fV0pLHJ9KCk7ci5Sb3V0ZSxyLkNvbnRleHQ7dmFyIGk9bmV3IHI7cmV0dXJue1JvdXRlcjpyLFJvdXRpbmc6aX19KTsiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiZGVmaW5lIiwiYW1kIiwiUm91dGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3MiLCJSb3V0ZXIiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiciIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsInZhbHVlIiwic2V0QmFzZVVybCIsInJvdXRlcyIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsImkiLCJ1IiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwicyIsImMiLCJhIiwibCIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImRlZmF1bHRzIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJoIiwiZ2V0SG9zdCIsImluZGV4T2YiLCJzY2hlbWVzIiwicCIsImtleXMiLCJkIiwieSIsInYiLCJwdXNoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJzZXRSb3V0aW5nRGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJjdXN0b21FbmNvZGVVUklDb21wb25lbnQiLCJSb3V0ZSIsIkNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9