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
                console.log('[EventsStudentAssistance::connect] axios response', response);
            })
            .catch(function (error) {
                console.log('[EventsStudentAssistance::connect] axios error response', error);
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
                console.log('[EventsStudentAssistance::update] axios error response', error);
            });
    }
}
