import '../css/frontend.scss';
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap';
const $ = require('jquery');

global.$ = global.jQuery = $;

jQuery(document).ready(function() {
    jQuery(document).on('scroll', function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.scroll-top-wrapper').addClass('show');
        } else {
            jQuery('.scroll-top-wrapper').removeClass('show');
        }
    });
    jQuery('.scroll-top-wrapper').on('click', scrollToTop);
    let errorNode = jQuery(".has-error");
    let envelopeNode = jQuery(".fa-paper-plane-o");
    if (errorNode.length > 0) {
        jQuery('html,body').animate({scrollTop: errorNode.offset().top - 200}, "slow");
    }
    if (envelopeNode.length > 0) {
        jQuery('html,body').animate({scrollTop: envelopeNode.offset().top - 200}, "slow");
    }
});

function scrollToTop() {
    jQuery('html, body').animate({scrollTop: 0}, 1000, 'swing');
}
