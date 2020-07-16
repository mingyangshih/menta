$(function(){
	
	if($(window).width() <= 751){
		
		//NAV
		$(".nav_bar").hide();
		
		$(".btn_nav").click(function(){
			$(".nav_bar").slideToggle("slow");
		});
		
		//手機手勢
		$(".spec_mb").slick({
			dots: false,
			infinite: true,
 			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000
		});
		
	}
	
	//searchTop
	$(".searchTop input, .searchTop button").hide()
	var $win = $(window);
	var $searchTop = $('.searchTop input, .searchTop button');
	$win.scroll(function () {
		if ($win.scrollTop() > 600) {
			$searchTop.show();
			} else {
			$searchTop.hide();
			}
		}
	);
	
	//modelBtn
	var $win = $(window);
	var $modelBtn = $('button.btn_model');
	$win.scroll(function () {
		if ($win.scrollTop() < 2000) {
			$modelBtn.show();
			} else {
			$modelBtn.hide();
			}
		}
	);
	
	//backtotop
	var $win = $(window);
	var $backToTop = $('.btn_backToTop');
	$win.scroll(function () {
		if ($win.scrollTop() > 200) {
			$backToTop.show();
			} else {
			$backToTop.hide();
		}
	});
	$backToTop.click(function(){
		$('html, body').animate({scrollTop: 0}, 200);
	});
		
	//手機手勢
	$('.carousel_inner').slick({
			dots: true,
			infinite: true,
 			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
  		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
	});
	
});

//dropdown-menu
function sampleMenu0(item) {
  var elem = document.getElementById('msg0');
  elem.innerHTML = item.innerText;
  event.preventDefault();
}
