import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '@fullcalendar/bootstrap/main.css';

import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import caLocale from '@fullcalendar/core/locales/ca';
import Routing from '../../public/bundles/fosjsrouting/js/router.min';

const routes = require('../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

document.addEventListener('DOMContentLoaded', () => {
    let calendarEl = document.getElementById('calendar-holder');
    let eventsUrl = calendarEl.dataset.eventsUrl;
    let calendar = new Calendar(calendarEl, {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin],
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
                hiddenDays: [ 0 ]
            }
        },
        height: 780,
        locale: caLocale,
        firstDay: 1,
        lazyFetching: false,
        editable: false,
        navLinks: true,
        businessHours: false,
        displayEventTime: true,
        fixedWeekCount: false,
        weekNumbers: false,
        themeSystem: 'bootstrap3',
        googleCalendarApiKey: 'AIzaSyB332MhD5g142kIo79ZagVcXUidQwHbWwk',
        eventSources: [
            {
                googleCalendarId: 'es.spain#holiday@group.v.calendar.google.com',
                backgroundColor: '#FED3D7',
                textColor: '#FF0000',
                color: '#FED3D7'
            },
            {
                url: eventsUrl,
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
