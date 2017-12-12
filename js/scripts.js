$(function(){
	var carouselList = $("#carousel ul");
	function globalInterval() {
		intervalId = setInterval(changeSlide, 3000);
	}
	globalInterval();
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		changePagination();
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	$('#arrowRight').click(function() {
		clearInterval(intervalId);
		changeSlide();
		globalInterval();
	});


	$('#arrowLeft').click(slideReturn);
	function slideReturn() {
		clearInterval(intervalId);
		moveFirstSlideReturn();
		changePagination();
		carouselList.animate({'marginLeft': 0}, 500, globalInterval);
	};

	function moveFirstSlideReturn() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

});






