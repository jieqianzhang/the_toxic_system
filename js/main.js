
//$("#landing_page").on('mousewheel', function() {
//    $('html, body').animate({
//        scrollTop: $("#intro_page").offset().top
//    }, 600);
//});
var isChrome = !!window.chrome; 
var isIE = /*@cc_on!@*/false;

if( isChrome ) {
$("#videoId").replaceWith($('<video id="videoId" width="100%" autoplay loop><source src="video.webm" type="video/webm"></video>'));
}

$("#menu_home").click(function() {
    $('html, body').animate({
        scrollTop: $("#landing_page").offset().top
    }, 600);
});

$("#menu_intro").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro_page").offset().top
    }, 600);
});


$("#osvaldo").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1_div").offset().top
    }, 600);
});

$("#menu_section1").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1_div").offset().top
    }, 600);
});

