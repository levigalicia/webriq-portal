$(document).ready(function () {

$('.services p').expander({
	slicePoint: 100,
	expandText: 'more',
	userCollapseText: 'less'
})
// Highlight the top nav as scrolling
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 80
})

// Page scrolling feature
$('a.page-scroll').bind('click', function(event) {
    var link = $(this);
    $('html, body').stop().animate({
        scrollTop: $(link.attr('href')).offset().top - 70
    }, 500);
    event.preventDefault();
});

});

// Activate WOW.js plugin for animation on scrol
new WOW().init();
