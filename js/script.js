$(function(){
	var carouselList = $(".carousel ul");
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}

	function moveFirstSlide(){ 
		lastItem.after(firstItem);
		$(this).css({marginLeft:0});
	}

	setInterval(changeSlide, 3000);
});