//JQUERY
$(document).ready(function() {
// NAV MENU SCROLL-TO SECTIONS
    $(".work-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#work-section").offset().top
        }, 1000);
    });
    $(".about-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 1000);
    });
    $(".contact-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-section").offset().top
        }, 1000);
    });
//DROPDOWN NAV MENU
    $("#nav-toggle").click(function() {
        $("#drop-down-nav").slideToggle("fast");
    });















});
