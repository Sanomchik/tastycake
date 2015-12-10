$(document).ready(function(){
	$('.centerbox').animated('zoomIn', 'zoomOut');
	$('.aboutleft').animated('slideInLeft', 'fadeOut');
	$('.aboutright').animated('slideInRight', 'fadeOut');
	$('.hhead').animated('fadeInDown', 'fadeOut');
	$('.itemskills').animated('flipInY', 'fadeIn');
	$(".topnav ul a").mPageScroll2id();
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
$(window).scroll(function() {

	var st = $(this).scrollTop() /10;

	$(".parim").css({
		"transform" : "translate3d(0px, " + st/8 + "%, .01px)",
		"-webkit-transform" : "translate3d(0px, -" + st/8  + "%, .01px)"
	});
});
var flag = true;
$('.menuicon').click(function(){
	
	if (flag !== true) {
		$('.topnav').animate({left: "3000px"}, 500);
		flag = true;
		$('.topnav').fadeOut();
	}
	else {
		$('.topnav').fadeIn();
		$('.topnav').animate({left: "0"}, 500);
		flag = false;

	}
	 });
});
$(window).load(function() { // makes sure the whole site is loaded
            $('.loader').fadeOut(); // will first fade out the loading animation
            $('.loader_inner').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(1000).css({'overflow':'visible'});
        })
