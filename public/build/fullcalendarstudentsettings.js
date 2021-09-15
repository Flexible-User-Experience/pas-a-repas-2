"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fullcalendarstudentsettings"],{

/***/ "./assets/js/fullcalendar.student-settings.js":
/*!****************************************************!*\
  !*** ./assets/js/fullcalendar.student-settings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/core/locales/ca */ "./node_modules/@fullcalendar/core/locales/ca.js");
/* harmony import */ var _fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/bundles/fosjsrouting/js/router.min */ "./public/bundles/fosjsrouting/js/router.min.js");
/* harmony import */ var _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/core/main.css */ "./node_modules/@fullcalendar/core/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/list/main.css */ "./node_modules/@fullcalendar/list/main.css");












var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_6___default().setRoutingData(routes);
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-holder');
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__.Calendar(calendarEl, {
    plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"]],
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
    locale: (_fullcalendar_core_locales_ca__WEBPACK_IMPORTED_MODULE_5___default()),
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
      url: _public_bundles_fosjsrouting_js_router_min__WEBPACK_IMPORTED_MODULE_6___default().generate('fc_load_events'),
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-20a9b1","vendors-node_modules_fullcalendar_core_locales_ca_js-node_modules_fullcalendar_interaction_ma-dbe99e","public_bundles_fosjsrouting_js_router_min_js-public_js_fos_js_routes_json"], () => (__webpack_exec__("./assets/js/fullcalendar.student-settings.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyc3R1ZGVudHNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMEVBQUQsQ0FBdEI7O0FBQ0FGLGdHQUFBLENBQXVCQyxNQUF2QjtBQUVBRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGlCQUF4QixDQUFqQjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxJQUFJZCx3REFBSixDQUFhWSxVQUFiLEVBQXlCO0FBQ3BDRyxJQUFBQSxPQUFPLEVBQUUsQ0FBQ2QsaUVBQUQsRUFBb0JDLDZEQUFwQixFQUFtQ0MsOERBQW5DLEVBQW1EQywwREFBbkQsQ0FEMkI7QUFFcENZLElBQUFBLFFBQVEsRUFBRSxLQUYwQjtBQUdwQ0MsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRSxpQkFERjtBQUVKQyxNQUFBQSxNQUFNLEVBQUUsT0FGSjtBQUdKQyxNQUFBQSxLQUFLLEVBQUU7QUFISCxLQUg0QjtBQVFwQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxVQUFVLEVBQUUsSUFETjtBQUVOQyxRQUFBQSxlQUFlLEVBQUU7QUFDYkMsVUFBQUEsSUFBSSxFQUFFLFNBRE87QUFFYkMsVUFBQUEsTUFBTSxFQUFFLFNBRks7QUFHYkMsVUFBQUEsY0FBYyxFQUFFLEtBSEg7QUFJYkMsVUFBQUEsUUFBUSxFQUFFO0FBSkcsU0FGWDtBQVFOQyxRQUFBQSxVQUFVLEVBQUUsVUFSTjtBQVNOQyxRQUFBQSxPQUFPLEVBQUUsVUFUSDtBQVVOQyxRQUFBQSxPQUFPLEVBQUUsVUFWSDtBQVdOQyxRQUFBQSxVQUFVLEVBQUUsQ0FBRSxDQUFGO0FBWE47QUFEUCxLQVI2QjtBQXVCcENDLElBQUFBLE1BQU0sRUFBRSxHQXZCNEI7QUF3QnBDQyxJQUFBQSxNQUFNLEVBQUU3QixzRUF4QjRCO0FBeUJwQzhCLElBQUFBLFVBQVUsRUFBRSxPQXpCd0I7QUEwQnBDQyxJQUFBQSxRQUFRLEVBQUUsQ0ExQjBCO0FBMkJwQ0MsSUFBQUEsWUFBWSxFQUFFLEtBM0JzQjtBQTRCcENDLElBQUFBLFFBQVEsRUFBRSxJQTVCMEI7QUE2QnBDQyxJQUFBQSxRQUFRLEVBQUUsSUE3QjBCO0FBOEJwQ0MsSUFBQUEsVUFBVSxFQUFFLElBOUJ3QjtBQStCcENDLElBQUFBLGFBQWEsRUFBRSxLQS9CcUI7QUFnQ3BDQyxJQUFBQSxnQkFBZ0IsRUFBRSxJQWhDa0I7QUFpQ3BDQyxJQUFBQSxjQUFjLEVBQUUsS0FqQ29CO0FBa0NwQ0MsSUFBQUEsV0FBVyxFQUFFLEtBbEN1QjtBQW1DcENDLElBQUFBLFdBQVcsRUFBRSxjQW5DdUI7QUFvQ3BDQyxJQUFBQSxXQUFXLEVBQUUsWUFwQ3VCO0FBcUNwQ0MsSUFBQUEsb0JBQW9CLEVBQUUseUNBckNjO0FBc0NwQ0MsSUFBQUEsWUFBWSxFQUFFLENBQ1Y7QUFDSUMsTUFBQUEsR0FBRyxFQUFFM0MsMEZBQUEsQ0FBaUIsZ0JBQWpCLENBRFQ7QUFFSTZDLE1BQUFBLElBQUksRUFBRSxNQUZWO0FBR0lDLE1BQUFBLElBQUksRUFBRSxFQUhWO0FBSUlDLE1BQUFBLEtBQUssRUFBRSxlQUFTRCxJQUFULEVBQWU7QUFDbEJFLFFBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLFFBQWQsRUFBd0JELElBQUksQ0FBQ0csWUFBN0I7QUFDSDtBQU5MLEtBRFU7QUF0Q3NCLEdBQXpCLENBQWY7QUFpREF6QyxFQUFBQSxRQUFRLENBQUMwQyxNQUFUO0FBQ0gsQ0FwREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVsbGNhbGVuZGFyLnN0dWRlbnQtc2V0dGluZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiQGZ1bGxjYWxlbmRhci9jb3JlXCI7XG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2RheWdyaWRcIjtcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiO1xuaW1wb3J0IGxpc3RQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9saXN0JztcbmltcG9ydCBjYUxvY2FsZSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9jYSc7XG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi9wdWJsaWMvYnVuZGxlcy9mb3Nqc3JvdXRpbmcvanMvcm91dGVyLm1pbic7XG5cbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvY29yZS9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkL21haW4uY3NzXCI7XG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkL21haW4uY3NzXCI7XG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL2xpc3QvbWFpbi5jc3NcIjtcblxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnLi4vLi4vcHVibGljL2pzL2Zvc19qc19yb3V0ZXMuanNvbicpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyLWhvbGRlcicpO1xuICAgIGxldCBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhckVsLCB7XG4gICAgICAgIHBsdWdpbnM6IFtpbnRlcmFjdGlvblBsdWdpbiwgZGF5R3JpZFBsdWdpbiwgdGltZUdyaWRQbHVnaW4sIGxpc3RQbHVnaW5dLFxuICAgICAgICB0aW1lWm9uZTogJ1VUQycsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgbGVmdDogJ3ByZXYgdG9kYXkgbmV4dCcsXG4gICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXG4gICAgICAgICAgICByaWdodDogJ2RheUdyaWRNb250aCx0aW1lR3JpZFdlZWssdGltZUdyaWREYXkgbGlzdFdlZWsnXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICB0aW1lR3JpZDoge1xuICAgICAgICAgICAgICAgIGFsbERheVNsb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xvdExhYmVsRm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgIG9taXRaZXJvTWludXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVyaWRpZW06ICdzaG9ydCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbFRpbWU6ICcwOTowMDowMCcsXG4gICAgICAgICAgICAgICAgbWluVGltZTogJzA5OjAwOjAwJyxcbiAgICAgICAgICAgICAgICBtYXhUaW1lOiAnMjM6MDA6MDAnLFxuICAgICAgICAgICAgICAgIGhpZGRlbkRheXM6IFsgMCBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogNzUwLFxuICAgICAgICBsb2NhbGU6IGNhTG9jYWxlLFxuICAgICAgICB0aW1lRm9ybWF0OiAnSEg6bW0nLFxuICAgICAgICBmaXJzdERheTogMSxcbiAgICAgICAgbGF6eUZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIG5hdkxpbmtzOiB0cnVlLFxuICAgICAgICBldmVudExpbWl0OiB0cnVlLFxuICAgICAgICBidXNpbmVzc0hvdXJzOiBmYWxzZSxcbiAgICAgICAgZGlzcGxheUV2ZW50VGltZTogdHJ1ZSxcbiAgICAgICAgZml4ZWRXZWVrQ291bnQ6IGZhbHNlLFxuICAgICAgICB3ZWVrTnVtYmVyczogZmFsc2UsXG4gICAgICAgIGRlZmF1bHRWaWV3OiAndGltZUdyaWRXZWVrJyxcbiAgICAgICAgdGhlbWVTeXN0ZW06ICdib290c3RyYXAzJyxcbiAgICAgICAgZ29vZ2xlQ2FsZW5kYXJBcGlLZXk6ICdBSXphU3lDWlpZWlYtTHFYMnFEdGdnaUVvMUdtZU5oeGUzU0FoZkknLFxuICAgICAgICBldmVudFNvdXJjZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2ZjX2xvYWRfZXZlbnRzJyksXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIScsIGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KTtcbiAgICBjYWxlbmRhci5yZW5kZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJkYXlHcmlkUGx1Z2luIiwidGltZUdyaWRQbHVnaW4iLCJsaXN0UGx1Z2luIiwiY2FMb2NhbGUiLCJSb3V0aW5nIiwicm91dGVzIiwicmVxdWlyZSIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsZW5kYXJFbCIsImdldEVsZW1lbnRCeUlkIiwiY2FsZW5kYXIiLCJwbHVnaW5zIiwidGltZVpvbmUiLCJoZWFkZXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJ2aWV3cyIsInRpbWVHcmlkIiwiYWxsRGF5U2xvdCIsInNsb3RMYWJlbEZvcm1hdCIsImhvdXIiLCJtaW51dGUiLCJvbWl0WmVyb01pbnV0ZSIsIm1lcmlkaWVtIiwic2Nyb2xsVGltZSIsIm1pblRpbWUiLCJtYXhUaW1lIiwiaGlkZGVuRGF5cyIsImhlaWdodCIsImxvY2FsZSIsInRpbWVGb3JtYXQiLCJmaXJzdERheSIsImxhenlGZXRjaGluZyIsImVkaXRhYmxlIiwibmF2TGlua3MiLCJldmVudExpbWl0IiwiYnVzaW5lc3NIb3VycyIsImRpc3BsYXlFdmVudFRpbWUiLCJmaXhlZFdlZWtDb3VudCIsIndlZWtOdW1iZXJzIiwiZGVmYXVsdFZpZXciLCJ0aGVtZVN5c3RlbSIsImdvb2dsZUNhbGVuZGFyQXBpS2V5IiwiZXZlbnRTb3VyY2VzIiwidXJsIiwiZ2VuZXJhdGUiLCJ0eXBlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInJlc3BvbnNlVGV4dCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=