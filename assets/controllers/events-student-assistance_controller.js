import { Controller } from 'stimulus';
import axios from 'axios';
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
const routes = require('../../public/js/fos_js_routes.json');

Routing.setRoutingData(routes);

export default class extends Controller {
    static values = { eid: Number }

    connect() {
        let self = this;
        this.element.innerHTML = '<i class="fa fa-5x fa-spinner fa-spin" aria-hidden="true"></i>';
        axios.get(Routing.generate('admin_app_event_apiget', { id: this.eidValue }))
            .then(function (response) {
                if (response.hasOwnProperty('data') && response.data.hasOwnProperty('html')) {
                    self.element.innerHTML = response.data.html;
                }
            })
            .catch(function (error) {
                console.error('[EventsStudentAssistance::connect] axios error response', error);
            });
    }

    update(event) {
        let apiPath = Routing.generate('admin_app_event_apiattendedclass', { id: this.eidValue, student: event.target.value});
        if (!event.target.checked) {
            apiPath = Routing.generate('admin_app_event_apinotattendedclass', { id: this.eidValue, student: event.target.value});
        }
        axios.get(apiPath)
            .then(function (response) {
                console.log('[EventsStudentAssistance::update] axios response', response);
            })
            .catch(function (error) {
                console.error('[EventsStudentAssistance::update] axios error response', error);
            });
    }

    studentAdded(event) {
        let self = this;
        console.log('[EventsStudentAssistance::studentAdded] event', event.detail);
        axios.get(Routing.generate('admin_app_event_apiattendedclass', { id: event.detail.event, student: event.detail.student}))
            .then(function (response) {
                console.log('[EventsStudentAssistance::studentAdded] axios response', response);
                self.element.innerHTML += '<label class="checkbox-inline"><input type="checkbox" id="inlineCheckboxEvent' + event.detail.event + 'Student' + event.detail.student + '" name="eid' + event.detail.event + '" value="' + event.detail.student + '" data-action="click->events-student-assistance#update" checked> ' + event.detail.text + '</label>';
            })
            .catch(function (error) {
                console.error('[EventsStudentAssistance::studentAdded] axios error response', error);
            });
    }

    studentRemoved(event) {
        let element = document.getElementById('inlineCheckboxEvent' + event.detail.event + 'Student' + event.detail.student);
        if (element.parentNode) {
            let checkboxer = element.parentNode.parentNode;
            if (checkboxer) {
                axios.get(Routing.generate('admin_app_event_apinotattendedclass', { id: event.detail.event, student: event.detail.student}))
                    .then(function (response) {
                        console.log('[EventsStudentAssistance::studentRemoved] axios response', response);
                        checkboxer.removeChild(element.parentNode);
                    })
                    .catch(function (error) {
                        console.error('[EventsStudentAssistance::studentRemoved] axios error response', error);
                    });
            }
        }
        console.log('[EventsStudentAssistance::studentRemoved] event', event.detail, element.parentNode);
    }
}
