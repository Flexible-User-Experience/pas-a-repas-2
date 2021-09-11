import { Controller } from 'stimulus';

export default class extends Controller {
    connect() {
        this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/events_student_assistance.js';
    }
}
