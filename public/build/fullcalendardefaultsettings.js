(self["webpackChunk"] = self["webpackChunk"] || []).push([["fullcalendardefaultsettings"],{

/***/ "./assets/js/fullcalendar.default-settings.js":
/*!****************************************************!*\
  !*** ./assets/js/fullcalendar.default-settings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/core/locales/ca */ "./node_modules/@fullcalendar/core/locales/ca.js");
/* harmony import */ var _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/bundles/fosjsrouting/js/router.min */ "./public/bundles/fosjsrouting/js/router.min.js");
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/core/main.css */ "./node_modules/@fullcalendar/core/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/list/main.css */ "./node_modules/@fullcalendar/list/main.css");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");














var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_8___default().setRoutingData(routes);
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-holder');
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__.Calendar(calendarEl, {
    plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__["default"]],
    timeZone: 'UTC',
    header: {
      left: 'prev today next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay listWeek'
    },
    views: {
      timeGrid: {
        allDaySlot: true,
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        },
        scrollTime: '09:00:00',
        minTime: '09:00:00',
        maxTime: '23:00:00',
        hiddenDays: [0]
      }
    },
    height: 750,
    locale: (_fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_7___default()),
    timeFormat: 'HH:mm',
    firstDay: 1,
    lazyFetching: false,
    editable: true,
    navLinks: true,
    eventLimit: true,
    businessHours: false,
    displayEventTime: true,
    fixedWeekCount: false,
    weekNumbers: false,
    defaultView: 'timeGridWeek',
    themeSystem: 'bootstrap3',
    googleCalendarApiKey: 'AIzaSyCZZYZV-LqX2qDtggiEo1GmeNhxe3SAhfI',
    eventSources: [{
      googleCalendarId: 'es.spain#holiday@group.v.calendar.google.com',
      backgroundColor: '#FED3D7',
      textColor: '#FF0000',
      color: '#FED3D7'
    }, {
      url: _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_8___default().generate('fc_load_events'),
      type: 'POST',
      data: {},
      error: function error(data) {
        console.error('error!', data.responseText);
      }
    }],
    datesRender: function datesRender(calendar) {
      if (calendar.hasOwnProperty('view') && calendar.view.hasOwnProperty('props') && calendar.view.props.hasOwnProperty('dateProfile') && calendar.view.props.dateProfile.hasOwnProperty('currentRangeUnit') && calendar.view.props.dateProfile.hasOwnProperty('currentRange') && calendar.view.props.dateProfile.currentRange.hasOwnProperty('start') && calendar.view.props.dateProfile.currentRange.hasOwnProperty('end') && calendar.view.props.dateProfile.currentRange.start instanceof Date && calendar.view.props.dateProfile.currentRange.end instanceof Date) {
        var exportCalendarPdfListAnchorNode = jQuery('#export_calendar_pdf_list_anchor');
        var start = calendar.view.props.dateProfile.currentRange.start;
        var end = calendar.view.props.dateProfile.currentRange.end;
        var route = _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_8___default().generate('admin_app_filedummy_exportCalendarPdfList', {
          start: start.getFullYear() + '-' + twoDigitsPadWithZeros(start.getMonth() + 1) + '-' + twoDigitsPadWithZeros(start.getDate()),
          end: end.getFullYear() + '-' + twoDigitsPadWithZeros(end.getMonth() + 1) + '-' + twoDigitsPadWithZeros(end.getDate())
        });
        exportCalendarPdfListAnchorNode.attr('href', route);
      }
    }
  });
  calendar.render();
});

function twoDigitsPadWithZeros(number) {
  number = number + '';
  return number.length >= 2 ? number : new Array(2).join('0') + number;
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-20a9b1","vendors-node_modules_fullcalendar_core_locales_ca_js-node_modules_fullcalendar_interaction_ma-dbe99e","vendors-node_modules_jquery_dist_jquery_js","public_bundles_fosjsrouting_js_router_min_js-public_js_fos_js_routes_json"], () => (__webpack_exec__("./assets/js/fullcalendar.default-settings.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vLy4vYXNzZXRzL2pzL2Z1bGxjYWxlbmRhci5kZWZhdWx0LXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiQGZ1bGxjYWxlbmRhci9jb3JlXCI7XG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2RheWdyaWRcIjtcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiO1xuaW1wb3J0IGxpc3RQbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvbGlzdFwiO1xuaW1wb3J0IGNhTG9jYWxlIGZyb20gXCJAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9jYVwiO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vcHVibGljL2J1bmRsZXMvZm9zanNyb3V0aW5nL2pzL3JvdXRlci5taW4nO1xuXG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL2NvcmUvbWFpbi5jc3NcIjtcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci9saXN0L21haW4uY3NzXCI7XG5cbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxlbmRhci1ob2xkZXInKTtcbiAgICBsZXQgY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICBwbHVnaW5zOiBbaW50ZXJhY3Rpb25QbHVnaW4sIGRheUdyaWRQbHVnaW4sIHRpbWVHcmlkUGx1Z2luLCBsaXN0UGx1Z2luXSxcbiAgICAgICAgdGltZVpvbmU6ICdVVEMnLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGxlZnQ6ICdwcmV2IHRvZGF5IG5leHQnLFxuICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5IGxpc3RXZWVrJ1xuICAgICAgICB9LFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgdGltZUdyaWQ6IHtcbiAgICAgICAgICAgICAgICBhbGxEYXlTbG90OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsb3RMYWJlbEZvcm1hdDoge1xuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICBvbWl0WmVyb01pbnV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lcmlkaWVtOiAnc2hvcnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUaW1lOiAnMDk6MDA6MDAnLFxuICAgICAgICAgICAgICAgIG1pblRpbWU6ICcwOTowMDowMCcsXG4gICAgICAgICAgICAgICAgbWF4VGltZTogJzIzOjAwOjAwJyxcbiAgICAgICAgICAgICAgICBoaWRkZW5EYXlzOiBbIDAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IDc1MCxcbiAgICAgICAgbG9jYWxlOiBjYUxvY2FsZSxcbiAgICAgICAgdGltZUZvcm1hdDogJ0hIOm1tJyxcbiAgICAgICAgZmlyc3REYXk6IDEsXG4gICAgICAgIGxhenlGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICBuYXZMaW5rczogdHJ1ZSxcbiAgICAgICAgZXZlbnRMaW1pdDogdHJ1ZSxcbiAgICAgICAgYnVzaW5lc3NIb3VyczogZmFsc2UsXG4gICAgICAgIGRpc3BsYXlFdmVudFRpbWU6IHRydWUsXG4gICAgICAgIGZpeGVkV2Vla0NvdW50OiBmYWxzZSxcbiAgICAgICAgd2Vla051bWJlcnM6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0VmlldzogJ3RpbWVHcmlkV2VlaycsXG4gICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwMycsXG4gICAgICAgIGdvb2dsZUNhbGVuZGFyQXBpS2V5OiAnQUl6YVN5Q1paWVpWLUxxWDJxRHRnZ2lFbzFHbWVOaHhlM1NBaGZJJyxcbiAgICAgICAgZXZlbnRTb3VyY2VzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlQ2FsZW5kYXJJZDogJ2VzLnNwYWluI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29tJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkVEM0Q3JyxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjRkYwMDAwJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNGRUQzRDcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZmNfbG9hZF9ldmVudHMnKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IhJywgZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZGF0ZXNSZW5kZXI6IGZ1bmN0aW9uIChjYWxlbmRhcikge1xuICAgICAgICAgICAgaWYgKGNhbGVuZGFyLmhhc093blByb3BlcnR5KCd2aWV3JykgJiYgY2FsZW5kYXIudmlldy5oYXNPd25Qcm9wZXJ0eSgncHJvcHMnKSAmJiBjYWxlbmRhci52aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdkYXRlUHJvZmlsZScpICYmIGNhbGVuZGFyLnZpZXcucHJvcHMuZGF0ZVByb2ZpbGUuaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRSYW5nZVVuaXQnKSAmJiBjYWxlbmRhci52aWV3LnByb3BzLmRhdGVQcm9maWxlLmhhc093blByb3BlcnR5KCdjdXJyZW50UmFuZ2UnKSAmJiBjYWxlbmRhci52aWV3LnByb3BzLmRhdGVQcm9maWxlLmN1cnJlbnRSYW5nZS5oYXNPd25Qcm9wZXJ0eSgnc3RhcnQnKSAmJiBjYWxlbmRhci52aWV3LnByb3BzLmRhdGVQcm9maWxlLmN1cnJlbnRSYW5nZS5oYXNPd25Qcm9wZXJ0eSgnZW5kJykgJiYgY2FsZW5kYXIudmlldy5wcm9wcy5kYXRlUHJvZmlsZS5jdXJyZW50UmFuZ2Uuc3RhcnQgaW5zdGFuY2VvZiBEYXRlICYmIGNhbGVuZGFyLnZpZXcucHJvcHMuZGF0ZVByb2ZpbGUuY3VycmVudFJhbmdlLmVuZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXhwb3J0Q2FsZW5kYXJQZGZMaXN0QW5jaG9yTm9kZSA9IGpRdWVyeSgnI2V4cG9ydF9jYWxlbmRhcl9wZGZfbGlzdF9hbmNob3InKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBjYWxlbmRhci52aWV3LnByb3BzLmRhdGVQcm9maWxlLmN1cnJlbnRSYW5nZS5zdGFydDtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gY2FsZW5kYXIudmlldy5wcm9wcy5kYXRlUHJvZmlsZS5jdXJyZW50UmFuZ2UuZW5kO1xuICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluX2FwcF9maWxlZHVtbXlfZXhwb3J0Q2FsZW5kYXJQZGZMaXN0Jywge3N0YXJ0OiBzdGFydC5nZXRGdWxsWWVhcigpICsgJy0nICsgdHdvRGlnaXRzUGFkV2l0aFplcm9zKHN0YXJ0LmdldE1vbnRoKCkgKyAxKSArICctJyArIHR3b0RpZ2l0c1BhZFdpdGhaZXJvcyhzdGFydC5nZXREYXRlKCkpLCBlbmQ6IGVuZC5nZXRGdWxsWWVhcigpICsgJy0nICsgdHdvRGlnaXRzUGFkV2l0aFplcm9zKGVuZC5nZXRNb250aCgpICsgMSkgKyAnLScgKyB0d29EaWdpdHNQYWRXaXRoWmVyb3MoZW5kLmdldERhdGUoKSl9KTtcbiAgICAgICAgICAgICAgICBleHBvcnRDYWxlbmRhclBkZkxpc3RBbmNob3JOb2RlLmF0dHIoJ2hyZWYnLCByb3V0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjYWxlbmRhci5yZW5kZXIoKTtcbn0pO1xuXG5mdW5jdGlvbiB0d29EaWdpdHNQYWRXaXRoWmVyb3MobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gbnVtYmVyICsgJyc7XG5cbiAgICByZXR1cm4gbnVtYmVyLmxlbmd0aCA+PSAyID8gbnVtYmVyIDogbmV3IEFycmF5KDIpLmpvaW4oJzAnKSArIG51bWJlcjtcbn1cbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgbmF0aXZlRGF0ZVRvU3RyaW5nID0gRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG90eXBlLmdldFRpbWU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiQ2FsZW5kYXIiLCJpbnRlcmFjdGlvblBsdWdpbiIsImRheUdyaWRQbHVnaW4iLCJ0aW1lR3JpZFBsdWdpbiIsImxpc3RQbHVnaW4iLCJjYUxvY2FsZSIsIlJvdXRpbmciLCJyb3V0ZXMiLCJyZXF1aXJlIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWxlbmRhckVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYWxlbmRhciIsInBsdWdpbnMiLCJ0aW1lWm9uZSIsImhlYWRlciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsInZpZXdzIiwidGltZUdyaWQiLCJhbGxEYXlTbG90Iiwic2xvdExhYmVsRm9ybWF0IiwiaG91ciIsIm1pbnV0ZSIsIm9taXRaZXJvTWludXRlIiwibWVyaWRpZW0iLCJzY3JvbGxUaW1lIiwibWluVGltZSIsIm1heFRpbWUiLCJoaWRkZW5EYXlzIiwiaGVpZ2h0IiwibG9jYWxlIiwidGltZUZvcm1hdCIsImZpcnN0RGF5IiwibGF6eUZldGNoaW5nIiwiZWRpdGFibGUiLCJuYXZMaW5rcyIsImV2ZW50TGltaXQiLCJidXNpbmVzc0hvdXJzIiwiZGlzcGxheUV2ZW50VGltZSIsImZpeGVkV2Vla0NvdW50Iiwid2Vla051bWJlcnMiLCJkZWZhdWx0VmlldyIsInRoZW1lU3lzdGVtIiwiZ29vZ2xlQ2FsZW5kYXJBcGlLZXkiLCJldmVudFNvdXJjZXMiLCJnb29nbGVDYWxlbmRhcklkIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiY29sb3IiLCJ1cmwiLCJnZW5lcmF0ZSIsInR5cGUiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwicmVzcG9uc2VUZXh0IiwiZGF0ZXNSZW5kZXIiLCJoYXNPd25Qcm9wZXJ0eSIsInZpZXciLCJwcm9wcyIsImRhdGVQcm9maWxlIiwiY3VycmVudFJhbmdlIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwiZXhwb3J0Q2FsZW5kYXJQZGZMaXN0QW5jaG9yTm9kZSIsImpRdWVyeSIsInJvdXRlIiwiZ2V0RnVsbFllYXIiLCJ0d29EaWdpdHNQYWRXaXRoWmVyb3MiLCJnZXRNb250aCIsImdldERhdGUiLCJhdHRyIiwicmVuZGVyIiwibnVtYmVyIiwibGVuZ3RoIiwiQXJyYXkiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==