//$("#landing_page").on('mousewheel', function() {
//    $('html, body').animate({
//        scrollTop: $("#intro_page").offset().top
//    }, 600);
//});
var isChrome = !!window.chrome;
var isIE = /*@cc_on!@*/ false;

if (isChrome) {
    $("#videoId").replaceWith($('<video id="videoId" width="100%" autoplay loop><source src="video.webm" type="video/webm"></video>'));
}



$("#menu_home").click(function () {
    $('html, body').animate({
        scrollTop: $("#landing_page").offset().top
    }, 600);
});

$("#menu_intro").click(function () {
    $('html, body').animate({
        scrollTop: $("#intro_page").offset().top
    }, 600);
});

$("#menu_section1").click(function () {
    $('html, body').animate({
        scrollTop: $("#section1_div").offset().top
    }, 600);
});


$("#menu_section2").click(function () {
    $('html, body').animate({
        scrollTop: $("#section2_div").offset().top
    }, 600);
});

$("#menu_section3").click(function () {
    $('html, body').animate({
        scrollTop: $("#section3_div").offset().top
    }, 600);
});

$("#menu_section4").click(function () {
    $('html, body').animate({
        scrollTop: $("#section4_div").offset().top
    }, 600);
});


$("#menu_section5").click(function () {
    $('html, body').animate({
        scrollTop: $("#section5_div").offset().top
    }, 600);
});


$("#donald").click(function () {
    $('html, body').animate({
        scrollTop: $("#section1_div").offset().top
    }, 600);
});

$("#osvaldo").click(function () {
    $('html, body').animate({
        scrollTop: $("#section2_div").offset().top
    }, 600);
});

$("#jesus").click(function () {
    $('html, body').animate({
        scrollTop: $("#section3_div").offset().top
    }, 600);
});


$("#hugo").click(function () {
    $('html, body').animate({
        scrollTop: $("#section4_div").offset().top
    }, 600);
});

$("#irvin").click(function () {
    $('html, body').animate({
        scrollTop: $("#section5_div").offset().top
    }, 600);
});


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > document.documentElement.clientHeight) {
        $('#b_down').hide();
    } else {
        $('#b_down').show();
    }
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > document.documentElement.clientHeight) {
        $('#scroll').hide();
    } else {
        $('#scroll').show();
    }
});