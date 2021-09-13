import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import caLocale from '@fullcalendar/core/locales/ca';
import Routing from '../../public/bundles/fosjsrouting/js/router.min';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

const routes = require('../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

document.addEventListener('DOMContentLoaded', () => {
    let calendarEl = document.getElementById('calendar-holder');
    let calendar = new Calendar(calendarEl, {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
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
                hiddenDays: [ 0 ]
            }
        },
        height: 750,
        locale: caLocale,
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
        eventSources: [
            {
                url: Routing.generate('fc_load_events'),
                type: 'POST',
                data: {},
                error: function(data) {
                    console.error('error!', data.responseText);
                }
            }
        ]
    });
    calendar.render();
});
