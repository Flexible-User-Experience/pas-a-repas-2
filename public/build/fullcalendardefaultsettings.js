"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fullcalendardefaultsettings"],{

/***/ "./assets/js/fullcalendar.default-settings.js":
/*!****************************************************!*\
  !*** ./assets/js/fullcalendar.default-settings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common/main.css */ "./node_modules/@fullcalendar/common/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/list/main.css */ "./node_modules/@fullcalendar/list/main.css");
/* harmony import */ var _fullcalendar_bootstrap_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/bootstrap/main.css */ "./node_modules/@fullcalendar/bootstrap/main.css");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/google-calendar */ "./node_modules/@fullcalendar/google-calendar/main.js");
/* harmony import */ var _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/core/locales/ca */ "./node_modules/@fullcalendar/core/locales/ca.js");
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/bundles/fosjsrouting/js/router.min */ "./public/bundles/fosjsrouting/js/router.min.js");
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_13__);















var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_13___default().setRoutingData(routes);
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-holder');
  var eventsUrl = calendarEl.getAttribute('data-events-url');
  var googleCalendarApiKey = calendarEl.getAttribute('data-gmap-api-key');
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_6__.Calendar(calendarEl, {
    plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_9__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_10__["default"], _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_11__["default"]],
    initialView: 'timeGridWeek',
    timeZone: 'Europe/Madrid',
    headerToolbar: {
      start: 'prev,today,next',
      center: 'title',
      end: 'timeGridDay,timeGridWeek,dayGridMonth listWeek'
    },
    views: {
      timeGrid: {
        nowIndicator: true,
        allDaySlot: true,
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        },
        scrollTime: '09:00:00',
        slotMinTime: '08:00:00',
        slotMaxTime: '23:00:00',
        hiddenDays: [0]
      }
    },
    height: 780,
    locale: _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_12__["default"],
    firstDay: 1,
    lazyFetching: false,
    editable: false,
    navLinks: true,
    businessHours: false,
    displayEventTime: true,
    fixedWeekCount: false,
    weekNumbers: false,
    themeSystem: 'bootstrap3',
    googleCalendarApiKey: googleCalendarApiKey,
    eventSources: [{
      googleCalendarId: 'es.spain#holiday@group.v.calendar.google.com',
      backgroundColor: '#FED3D7',
      textColor: '#FF0000',
      color: '#FED3D7'
    }, {
      url: eventsUrl,
      type: 'POST',
      data: {},
      error: function error(data) {
        console.error('error!', data.responseText);
      }
    }],
    datesSet: function datesSet(_datesSet) {
      if (_datesSet.hasOwnProperty('start') && _datesSet.hasOwnProperty('end')) {
        var exportCalendarPdfListAnchorNode = jQuery('#export_calendar_pdf_list_anchor');
        var start = _datesSet.start;
        var end = _datesSet.end;
        var route = _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_13___default().generate('admin_app_filedummy_exportCalendarPdfList', {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-20a9b1","vendors-node_modules_fullcalendar_core_locales_ca_js-node_modules_fullcalendar_core_main_js-n-3561fd","public_bundles_fosjsrouting_js_router_min_js-public_js_fos_js_routes_json"], () => (__webpack_exec__("./assets/js/fullcalendar.default-settings.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkNBLEVBQUFBLE1BQU0sR0FBR0EsTUFBTSxHQUFHLEVBQWxCO0FBRUEsU0FBT0EsTUFBTSxDQUFDQyxNQUFQLElBQWlCLENBQWpCLEdBQXFCRCxNQUFyQixHQUE4QixJQUFJRSxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLENBQWtCLEdBQWxCLElBQXlCSCxNQUE5RDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Z1bGxjYWxlbmRhci5kZWZhdWx0LXNldHRpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZ1bGxjYWxlbmRhci9jb21tb24vbWFpbi5jc3MnO1xuaW1wb3J0ICdAZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MnO1xuaW1wb3J0ICdAZnVsbGNhbGVuZGFyL3RpbWVncmlkL21haW4uY3NzJztcbmltcG9ydCAnQGZ1bGxjYWxlbmRhci9saXN0L21haW4uY3NzJztcbmltcG9ydCAnQGZ1bGxjYWxlbmRhci9ib290c3RyYXAvbWFpbi5jc3MnO1xuXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvbic7XG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2RheWdyaWQnO1xuaW1wb3J0IHRpbWVHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvdGltZWdyaWQnO1xuaW1wb3J0IGxpc3RQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9saXN0JztcbmltcG9ydCBnb29nbGVDYWxlbmRhclBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2dvb2dsZS1jYWxlbmRhcic7XG5pbXBvcnQgY2FMb2NhbGUgZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2xvY2FsZXMvY2EnO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vcHVibGljL2J1bmRsZXMvZm9zanNyb3V0aW5nL2pzL3JvdXRlci5taW4nO1xuXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FsZW5kYXItaG9sZGVyJyk7XG4gICAgbGV0IGV2ZW50c1VybCA9IGNhbGVuZGFyRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50cy11cmwnKTtcbiAgICBsZXQgZ29vZ2xlQ2FsZW5kYXJBcGlLZXkgPSBjYWxlbmRhckVsLmdldEF0dHJpYnV0ZSgnZGF0YS1nbWFwLWFwaS1rZXknKTtcbiAgICBsZXQgY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICBwbHVnaW5zOiBbaW50ZXJhY3Rpb25QbHVnaW4sIGRheUdyaWRQbHVnaW4sIHRpbWVHcmlkUGx1Z2luLCBsaXN0UGx1Z2luLCBnb29nbGVDYWxlbmRhclBsdWdpbl0sXG4gICAgICAgIGluaXRpYWxWaWV3OiAndGltZUdyaWRXZWVrJyxcbiAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvTWFkcmlkJyxcbiAgICAgICAgaGVhZGVyVG9vbGJhcjoge1xuICAgICAgICAgICAgc3RhcnQ6ICdwcmV2LHRvZGF5LG5leHQnLFxuICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgZW5kOiAndGltZUdyaWREYXksdGltZUdyaWRXZWVrLGRheUdyaWRNb250aCBsaXN0V2VlaydcbiAgICAgICAgfSxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgIHRpbWVHcmlkOiB7XG4gICAgICAgICAgICAgICAgbm93SW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFsbERheVNsb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xvdExhYmVsRm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgIG9taXRaZXJvTWludXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVyaWRpZW06ICdzaG9ydCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbFRpbWU6ICcwOTowMDowMCcsXG4gICAgICAgICAgICAgICAgc2xvdE1pblRpbWU6ICcwODowMDowMCcsXG4gICAgICAgICAgICAgICAgc2xvdE1heFRpbWU6ICcyMzowMDowMCcsXG4gICAgICAgICAgICAgICAgaGlkZGVuRGF5czogWyAwIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiA3ODAsXG4gICAgICAgIGxvY2FsZTogY2FMb2NhbGUsXG4gICAgICAgIGZpcnN0RGF5OiAxLFxuICAgICAgICBsYXp5RmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgIG5hdkxpbmtzOiB0cnVlLFxuICAgICAgICBidXNpbmVzc0hvdXJzOiBmYWxzZSxcbiAgICAgICAgZGlzcGxheUV2ZW50VGltZTogdHJ1ZSxcbiAgICAgICAgZml4ZWRXZWVrQ291bnQ6IGZhbHNlLFxuICAgICAgICB3ZWVrTnVtYmVyczogZmFsc2UsXG4gICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwMycsXG4gICAgICAgIGdvb2dsZUNhbGVuZGFyQXBpS2V5OiBnb29nbGVDYWxlbmRhckFwaUtleSxcbiAgICAgICAgZXZlbnRTb3VyY2VzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlQ2FsZW5kYXJJZDogJ2VzLnNwYWluI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29tJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkVEM0Q3JyxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjRkYwMDAwJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNGRUQzRDcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybDogZXZlbnRzVXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciEnLCBkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBkYXRlc1NldDogZnVuY3Rpb24gKGRhdGVzU2V0KSB7XG4gICAgICAgICAgICBpZiAoZGF0ZXNTZXQuaGFzT3duUHJvcGVydHkoJ3N0YXJ0JykgJiYgZGF0ZXNTZXQuaGFzT3duUHJvcGVydHkoJ2VuZCcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4cG9ydENhbGVuZGFyUGRmTGlzdEFuY2hvck5vZGUgPSBqUXVlcnkoJyNleHBvcnRfY2FsZW5kYXJfcGRmX2xpc3RfYW5jaG9yJyk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gZGF0ZXNTZXQuc3RhcnQ7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IGRhdGVzU2V0LmVuZDtcbiAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9hcHBfZmlsZWR1bW15X2V4cG9ydENhbGVuZGFyUGRmTGlzdCcsIHtzdGFydDogc3RhcnQuZ2V0RnVsbFllYXIoKSArICctJyArIHR3b0RpZ2l0c1BhZFdpdGhaZXJvcyhzdGFydC5nZXRNb250aCgpICsgMSkgKyAnLScgKyB0d29EaWdpdHNQYWRXaXRoWmVyb3Moc3RhcnQuZ2V0RGF0ZSgpKSwgZW5kOiBlbmQuZ2V0RnVsbFllYXIoKSArICctJyArIHR3b0RpZ2l0c1BhZFdpdGhaZXJvcyhlbmQuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgdHdvRGlnaXRzUGFkV2l0aFplcm9zKGVuZC5nZXREYXRlKCkpfSk7XG4gICAgICAgICAgICAgICAgZXhwb3J0Q2FsZW5kYXJQZGZMaXN0QW5jaG9yTm9kZS5hdHRyKCdocmVmJywgcm91dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY2FsZW5kYXIucmVuZGVyKCk7XG59KTtcblxuZnVuY3Rpb24gdHdvRGlnaXRzUGFkV2l0aFplcm9zKG51bWJlcikge1xuICAgIG51bWJlciA9IG51bWJlciArICcnO1xuXG4gICAgcmV0dXJuIG51bWJlci5sZW5ndGggPj0gMiA/IG51bWJlciA6IG5ldyBBcnJheSgyKS5qb2luKCcwJykgKyBudW1iZXI7XG59XG4iXSwibmFtZXMiOlsiQ2FsZW5kYXIiLCJpbnRlcmFjdGlvblBsdWdpbiIsImRheUdyaWRQbHVnaW4iLCJ0aW1lR3JpZFBsdWdpbiIsImxpc3RQbHVnaW4iLCJnb29nbGVDYWxlbmRhclBsdWdpbiIsImNhTG9jYWxlIiwiUm91dGluZyIsInJvdXRlcyIsInJlcXVpcmUiLCJzZXRSb3V0aW5nRGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGVuZGFyRWwiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50c1VybCIsImdldEF0dHJpYnV0ZSIsImdvb2dsZUNhbGVuZGFyQXBpS2V5IiwiY2FsZW5kYXIiLCJwbHVnaW5zIiwiaW5pdGlhbFZpZXciLCJ0aW1lWm9uZSIsImhlYWRlclRvb2xiYXIiLCJzdGFydCIsImNlbnRlciIsImVuZCIsInZpZXdzIiwidGltZUdyaWQiLCJub3dJbmRpY2F0b3IiLCJhbGxEYXlTbG90Iiwic2xvdExhYmVsRm9ybWF0IiwiaG91ciIsIm1pbnV0ZSIsIm9taXRaZXJvTWludXRlIiwibWVyaWRpZW0iLCJzY3JvbGxUaW1lIiwic2xvdE1pblRpbWUiLCJzbG90TWF4VGltZSIsImhpZGRlbkRheXMiLCJoZWlnaHQiLCJsb2NhbGUiLCJmaXJzdERheSIsImxhenlGZXRjaGluZyIsImVkaXRhYmxlIiwibmF2TGlua3MiLCJidXNpbmVzc0hvdXJzIiwiZGlzcGxheUV2ZW50VGltZSIsImZpeGVkV2Vla0NvdW50Iiwid2Vla051bWJlcnMiLCJ0aGVtZVN5c3RlbSIsImV2ZW50U291cmNlcyIsImdvb2dsZUNhbGVuZGFySWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJjb2xvciIsInVybCIsInR5cGUiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwicmVzcG9uc2VUZXh0IiwiZGF0ZXNTZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImV4cG9ydENhbGVuZGFyUGRmTGlzdEFuY2hvck5vZGUiLCJqUXVlcnkiLCJyb3V0ZSIsImdlbmVyYXRlIiwiZ2V0RnVsbFllYXIiLCJ0d29EaWdpdHNQYWRXaXRoWmVyb3MiLCJnZXRNb250aCIsImdldERhdGUiLCJhdHRyIiwicmVuZGVyIiwibnVtYmVyIiwibGVuZ3RoIiwiQXJyYXkiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==