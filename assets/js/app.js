import '../css/app.scss';
import $ from 'jquery';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

window.fbAsyncInit = function() {
    FB.init({
        appId      : '{{ facebook_api_key }}',
        cookie     : true,
        xfbml      : true,
        version    : 'v5.0'
    });
    FB.AppEvents.logPageView();
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
