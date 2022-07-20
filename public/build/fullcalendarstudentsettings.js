"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fullcalendarstudentsettings"],{

/***/ "./assets/js/fullcalendar.student-settings.js":
/*!****************************************************!*\
  !*** ./assets/js/fullcalendar.student-settings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common/main.css */ "./node_modules/@fullcalendar/common/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/list/main.css */ "./node_modules/@fullcalendar/list/main.css");
/* harmony import */ var _fullcalendar_bootstrap_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/bootstrap/main.css */ "./node_modules/@fullcalendar/bootstrap/main.css");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/google-calendar */ "./node_modules/@fullcalendar/google-calendar/main.js");
/* harmony import */ var _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/core/locales/ca */ "./node_modules/@fullcalendar/core/locales/ca.js");
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/bundles/fosjsrouting/js/router.min */ "./public/bundles/fosjsrouting/js/router.min.js");
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_12__);














var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_12___default().setRoutingData(routes);
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-holder');
  var eventsUrl = calendarEl.getAttribute('data-events-url');
  var googleCalendarApiKey = calendarEl.getAttribute('data-gcal-api-key');
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_5__.Calendar(calendarEl, {
    plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_9__["default"], _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_10__["default"]],
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
    locale: _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_11__["default"],
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
    }]
  });
  calendar.render();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-20a9b1","vendors-node_modules_fullcalendar_core_locales_ca_js-node_modules_fullcalendar_core_main_js-n-3561fd","public_bundles_fosjsrouting_js_router_min_js-public_js_fos_js_routes_json"], () => (__webpack_exec__("./assets/js/fullcalendar.student-settings.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyc3R1ZGVudHNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1RLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywwRUFBRCxDQUF0Qjs7QUFDQUYsaUdBQUEsQ0FBdUJDLE1BQXZCO0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07RUFDaEQsSUFBSUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWpCO0VBQ0EsSUFBSUMsU0FBUyxHQUFHRixVQUFVLENBQUNHLFlBQVgsQ0FBd0IsaUJBQXhCLENBQWhCO0VBQ0EsSUFBSUMsb0JBQW9CLEdBQUdKLFVBQVUsQ0FBQ0csWUFBWCxDQUF3QixtQkFBeEIsQ0FBM0I7RUFDQSxJQUFJRSxRQUFRLEdBQUcsSUFBSWxCLHdEQUFKLENBQWFhLFVBQWIsRUFBeUI7SUFDcENNLE9BQU8sRUFBRSxDQUFDbEIsaUVBQUQsRUFBb0JDLDZEQUFwQixFQUFtQ0MsOERBQW5DLEVBQW1EQywwREFBbkQsRUFBK0RDLHNFQUEvRCxDQUQyQjtJQUVwQ2UsV0FBVyxFQUFFLGNBRnVCO0lBR3BDQyxRQUFRLEVBQUUsZUFIMEI7SUFJcENDLGFBQWEsRUFBRTtNQUNYQyxLQUFLLEVBQUUsaUJBREk7TUFFWEMsTUFBTSxFQUFFLE9BRkc7TUFHWEMsR0FBRyxFQUFFO0lBSE0sQ0FKcUI7SUFTcENDLEtBQUssRUFBRTtNQUNIQyxRQUFRLEVBQUU7UUFDTkMsWUFBWSxFQUFFLElBRFI7UUFFTkMsVUFBVSxFQUFFLElBRk47UUFHTkMsZUFBZSxFQUFFO1VBQ2JDLElBQUksRUFBRSxTQURPO1VBRWJDLE1BQU0sRUFBRSxTQUZLO1VBR2JDLGNBQWMsRUFBRSxLQUhIO1VBSWJDLFFBQVEsRUFBRTtRQUpHLENBSFg7UUFTTkMsVUFBVSxFQUFFLFVBVE47UUFVTkMsV0FBVyxFQUFFLFVBVlA7UUFXTkMsV0FBVyxFQUFFLFVBWFA7UUFZTkMsVUFBVSxFQUFFLENBQUUsQ0FBRjtNQVpOO0lBRFAsQ0FUNkI7SUF5QnBDQyxNQUFNLEVBQUUsR0F6QjRCO0lBMEJwQ0MsTUFBTSxFQUFFbEMsc0VBMUI0QjtJQTJCcENtQyxRQUFRLEVBQUUsQ0EzQjBCO0lBNEJwQ0MsWUFBWSxFQUFFLEtBNUJzQjtJQTZCcENDLFFBQVEsRUFBRSxLQTdCMEI7SUE4QnBDQyxRQUFRLEVBQUUsSUE5QjBCO0lBK0JwQ0MsYUFBYSxFQUFFLEtBL0JxQjtJQWdDcENDLGdCQUFnQixFQUFFLElBaENrQjtJQWlDcENDLGNBQWMsRUFBRSxLQWpDb0I7SUFrQ3BDQyxXQUFXLEVBQUUsS0FsQ3VCO0lBbUNwQ0MsV0FBVyxFQUFFLFlBbkN1QjtJQW9DcENoQyxvQkFBb0IsRUFBRUEsb0JBcENjO0lBcUNwQ2lDLFlBQVksRUFBRSxDQUNWO01BQ0lDLGdCQUFnQixFQUFFLDhDQUR0QjtNQUVJQyxlQUFlLEVBQUUsU0FGckI7TUFHSUMsU0FBUyxFQUFFLFNBSGY7TUFJSUMsS0FBSyxFQUFFO0lBSlgsQ0FEVSxFQU9WO01BQ0lDLEdBQUcsRUFBRXhDLFNBRFQ7TUFFSXlDLElBQUksRUFBRSxNQUZWO01BR0lDLElBQUksRUFBRSxFQUhWO01BSUlDLEtBQUssRUFBRSxlQUFTRCxJQUFULEVBQWU7UUFDbEJFLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLFFBQWQsRUFBd0JELElBQUksQ0FBQ0csWUFBN0I7TUFDSDtJQU5MLENBUFU7RUFyQ3NCLENBQXpCLENBQWY7RUFzREExQyxRQUFRLENBQUMyQyxNQUFUO0FBQ0gsQ0EzREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVsbGNhbGVuZGFyLnN0dWRlbnQtc2V0dGluZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZnVsbGNhbGVuZGFyL2NvbW1vbi9tYWluLmNzcyc7XG5pbXBvcnQgJ0BmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzcyc7XG5pbXBvcnQgJ0BmdWxsY2FsZW5kYXIvdGltZWdyaWQvbWFpbi5jc3MnO1xuaW1wb3J0ICdAZnVsbGNhbGVuZGFyL2xpc3QvbWFpbi5jc3MnO1xuaW1wb3J0ICdAZnVsbGNhbGVuZGFyL2Jvb3RzdHJhcC9tYWluLmNzcyc7XG5cbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlJztcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uJztcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZGF5Z3JpZCc7XG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci90aW1lZ3JpZCc7XG5pbXBvcnQgbGlzdFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2xpc3QnO1xuaW1wb3J0IGdvb2dsZUNhbGVuZGFyUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZ29vZ2xlLWNhbGVuZGFyJztcbmltcG9ydCBjYUxvY2FsZSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9jYSc7XG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi9wdWJsaWMvYnVuZGxlcy9mb3Nqc3JvdXRpbmcvanMvcm91dGVyLm1pbic7XG5cbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxlbmRhci1ob2xkZXInKTtcbiAgICBsZXQgZXZlbnRzVXJsID0gY2FsZW5kYXJFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnRzLXVybCcpO1xuICAgIGxldCBnb29nbGVDYWxlbmRhckFwaUtleSA9IGNhbGVuZGFyRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWdjYWwtYXBpLWtleScpO1xuICAgIGxldCBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhckVsLCB7XG4gICAgICAgIHBsdWdpbnM6IFtpbnRlcmFjdGlvblBsdWdpbiwgZGF5R3JpZFBsdWdpbiwgdGltZUdyaWRQbHVnaW4sIGxpc3RQbHVnaW4sIGdvb2dsZUNhbGVuZGFyUGx1Z2luXSxcbiAgICAgICAgaW5pdGlhbFZpZXc6ICd0aW1lR3JpZFdlZWsnLFxuICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9NYWRyaWQnLFxuICAgICAgICBoZWFkZXJUb29sYmFyOiB7XG4gICAgICAgICAgICBzdGFydDogJ3ByZXYsdG9kYXksbmV4dCcsXG4gICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXG4gICAgICAgICAgICBlbmQ6ICd0aW1lR3JpZERheSx0aW1lR3JpZFdlZWssZGF5R3JpZE1vbnRoIGxpc3RXZWVrJ1xuICAgICAgICB9LFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgdGltZUdyaWQ6IHtcbiAgICAgICAgICAgICAgICBub3dJbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxsRGF5U2xvdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbG90TGFiZWxGb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgb21pdFplcm9NaW51dGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZXJpZGllbTogJ3Nob3J0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Nyb2xsVGltZTogJzA5OjAwOjAwJyxcbiAgICAgICAgICAgICAgICBzbG90TWluVGltZTogJzA4OjAwOjAwJyxcbiAgICAgICAgICAgICAgICBzbG90TWF4VGltZTogJzIzOjAwOjAwJyxcbiAgICAgICAgICAgICAgICBoaWRkZW5EYXlzOiBbIDAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IDc4MCxcbiAgICAgICAgbG9jYWxlOiBjYUxvY2FsZSxcbiAgICAgICAgZmlyc3REYXk6IDEsXG4gICAgICAgIGxhenlGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgbmF2TGlua3M6IHRydWUsXG4gICAgICAgIGJ1c2luZXNzSG91cnM6IGZhbHNlLFxuICAgICAgICBkaXNwbGF5RXZlbnRUaW1lOiB0cnVlLFxuICAgICAgICBmaXhlZFdlZWtDb3VudDogZmFsc2UsXG4gICAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgdGhlbWVTeXN0ZW06ICdib290c3RyYXAzJyxcbiAgICAgICAgZ29vZ2xlQ2FsZW5kYXJBcGlLZXk6IGdvb2dsZUNhbGVuZGFyQXBpS2V5LFxuICAgICAgICBldmVudFNvdXJjZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnb29nbGVDYWxlbmRhcklkOiAnZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20nLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRUQzRDcnLFxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyNGRjAwMDAnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0ZFRDNENydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXJsOiBldmVudHNVcmwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIScsIGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KTtcbiAgICBjYWxlbmRhci5yZW5kZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJkYXlHcmlkUGx1Z2luIiwidGltZUdyaWRQbHVnaW4iLCJsaXN0UGx1Z2luIiwiZ29vZ2xlQ2FsZW5kYXJQbHVnaW4iLCJjYUxvY2FsZSIsIlJvdXRpbmciLCJyb3V0ZXMiLCJyZXF1aXJlIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWxlbmRhckVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudHNVcmwiLCJnZXRBdHRyaWJ1dGUiLCJnb29nbGVDYWxlbmRhckFwaUtleSIsImNhbGVuZGFyIiwicGx1Z2lucyIsImluaXRpYWxWaWV3IiwidGltZVpvbmUiLCJoZWFkZXJUb29sYmFyIiwic3RhcnQiLCJjZW50ZXIiLCJlbmQiLCJ2aWV3cyIsInRpbWVHcmlkIiwibm93SW5kaWNhdG9yIiwiYWxsRGF5U2xvdCIsInNsb3RMYWJlbEZvcm1hdCIsImhvdXIiLCJtaW51dGUiLCJvbWl0WmVyb01pbnV0ZSIsIm1lcmlkaWVtIiwic2Nyb2xsVGltZSIsInNsb3RNaW5UaW1lIiwic2xvdE1heFRpbWUiLCJoaWRkZW5EYXlzIiwiaGVpZ2h0IiwibG9jYWxlIiwiZmlyc3REYXkiLCJsYXp5RmV0Y2hpbmciLCJlZGl0YWJsZSIsIm5hdkxpbmtzIiwiYnVzaW5lc3NIb3VycyIsImRpc3BsYXlFdmVudFRpbWUiLCJmaXhlZFdlZWtDb3VudCIsIndlZWtOdW1iZXJzIiwidGhlbWVTeXN0ZW0iLCJldmVudFNvdXJjZXMiLCJnb29nbGVDYWxlbmRhcklkIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiY29sb3IiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInJlc3BvbnNlVGV4dCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=