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
    if (response.status === 'connected') {
        console.log('connected!', response);
    } else if (response.status === 'not_authorized') {
        console.log('not_authorized!', response);
    } else if (response.status === 'unknown') {
        console.log('unknown!', response);
    } else {
        console.log('WARNING! NOT recognized API response status', response);
    }
}

function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
        statusChangeCallback(response);
    });
}
