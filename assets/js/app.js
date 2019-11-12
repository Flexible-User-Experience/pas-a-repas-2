import '../css/app.scss';
import $ from 'jquery';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';


$(document).ready(function() {
    console.log('assets/js/app.js on Ready trigger');
    $('[data-toggle="popover"]').popover();
    FB.getLoginStatus(function(response) {
        console.log('getLoginStatus');
        statusChangeCallback(response);
    });
});

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

function statusChangeCallback(response) {
    console.log('statusChangeCallback on response trigger', response);
}
