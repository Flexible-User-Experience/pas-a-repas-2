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
                    console.log('self.element', self.element);
                }
            })
            .catch(function (error) {
                console.error('[EventsStudentAssistance::connect] axios error response', error);
            });
    }

    update(event) {
        if (event.target.checked) {
            // attend class
            axios.get(Routing.generate('admin_app_event_apiattendedclass', { id: this.eidValue, student: event.target.value}))
                .then(function (response) {
                    console.log('[EventsStudentAssistance::update] attend class axios response', response);
                })
                .catch(function (error) {
                    console.error('[EventsStudentAssistance::update] attend axios error response', error);
                });
        } else {
            // not atted class
            let self = this;
            axios.get(Routing.generate('admin_app_event_apinotattendedclass', { id: this.eidValue, student: event.target.value}))
                .then(function (response) {
                    console.log('[EventsStudentAssistance::update] NOT attend class axios response', response);
                    console.log('[EventsStudentAssistance::update] self.element', self.element);
                    if (response.hasOwnProperty('data') && response.data.hasOwnProperty('said')) {
                        let said = response.data.said;
                        console.log('said', said, Routing.generate('admin_app_studentabsence_notification', {id: said}));
                        let sendEmailNotificationButton = document.createElement('a');
                        sendEmailNotificationButton.innerHTML = '<i class="fa fa-envelope-o"></i> Enviar notificació de no assitència per correu';
                        sendEmailNotificationButton.setAttribute('href', Routing.generate('admin_app_studentabsence_notification', {id: said}));
                        sendEmailNotificationButton.setAttribute('class', 'btn btn-warning');
                        sendEmailNotificationButton.setAttribute('style', 'margin-top:5px');
                        self.element.parentNode.insertBefore(sendEmailNotificationButton, self.element.nextSibling);
                    }
                })
                .catch(function (error) {
                    console.error('[EventsStudentAssistance::update] NOT attend axios error response', error);
                });
        }
    }

    studentAdded(event) {
        let self = this;
        console.log('[EventsStudentAssistance::studentAdded] event', event.detail);
        axios.get(Routing.generate('admin_app_event_apiattendedclass', { id: event.detail.event, student: event.detail.student}))
            .then(function (response) {
                console.log('[EventsStudentAssistance::studentAdded] axios response', response);
                self.element.innerHTML += '<label class="checkbox-inline"><input type="checkbox" id="inlineCheckboxEvent' + event.detail.event + 'Student' + event.detail.student + '" name="eid' + event.detail.event + '" value="' + event.detail.student + '" data-action="click->events-student-assistance#update" checked> ' + event.detail.text + '</label>';
                let submitFormButtons = document.getElementsByName('btn_update_and_edit');
                if (submitFormButtons && submitFormButtons.length > 0) {
                    console.log(submitFormButtons);
                    submitFormButtons[0].click();
                }
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
                        let submitFormButtons = document.getElementsByName('btn_update_and_edit');
                        if (submitFormButtons && submitFormButtons.length > 0) {
                            console.log(submitFormButtons);
                            submitFormButtons[0].click();
                        }
                    })
                    .catch(function (error) {
                        console.error('[EventsStudentAssistance::studentRemoved] axios error response', error);
                    });
            }
        }
        console.log('[EventsStudentAssistance::studentRemoved] event', event.detail, element.parentNode);
    }
}
