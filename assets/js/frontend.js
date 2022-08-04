import '../css/frontend.scss';
import jQuery from 'jquery';

require('bootstrap');

jQuery(document).ready(function() {
    jQuery(document).on('scroll', function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.scroll-top-wrapper').addClass('show');
        } else {
            jQuery('.scroll-top-wrapper').removeClass('show');
        }
    });
    jQuery('.scroll-top-wrapper').on('click', scrollToTop);
    function scrollToTop() {
        const element = jQuery('body');
        const offset = element.offset();
        const offsetTop = offset.top;
        jQuery('html, body').animate({scrollTop: offsetTop}, 1000, 'slow');
    }
    jQuery('div#navbar li a').click(function(event) {
        if (event.target.innerHTML !== 'BLOG') {
            event.preventDefault();
            jQuery('html,body').animate({scrollTop: jQuery(event.target.hash).offset().top - 90}, 'slow');
        }
    });
});
