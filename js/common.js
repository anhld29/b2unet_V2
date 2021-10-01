
/* readyEvent
------------------------------------------------------------------------*/

$(function(){
	// smoothScroll ---------------------------//
	var	speed = 1000,
		easing = 'swing',
		pcPosition = -0,
		tabPosition = -0,
		spPosition = -0;

	// outerPageAnchorLink ---------------------------//
	if(window.location.href.split('#')[1] == undefined || window.location.href.split('#')[1].indexOf('=') == -1) {
		var $target = $('#'+window.location.href.split('#')[1]),
			adjust = (abi.pc) ? pcPosition : (abi.tab) ? tabPosition : spPosition;

		if($target.length) {
			$w.load(function(){
				var targetPosition = $target.offset().top;
				$html.add($body).animate({scrollTop: String(targetPosition + adjust)}, 10);
			});
		}
	}
	$('.center').slick({
		dots: true,
		arrows:false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});

	var menu = new MmenuLight(
    document.querySelector( '#menu' ),
    'all'
  );

  var navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: false,
  });

  var drawer = menu.offcanvas({
  });

  //	Open the menu.
  document.querySelector( 'a[href="#menu"]' )
	.addEventListener( 'click', evnt => {
		evnt.preventDefault();
		drawer.open();
	});

		//scroll .btn-back-top
		$(function() {
			var showFlug = false;
			var topBtn = $('.btn-back-top');
			topBtn.css('right', '-130px');
			var showFlug = false;
			$(window).scroll(function () {
				if ($(this).scrollTop() > 300) {
					if (showFlug == false) {
						showFlug = true;
						topBtn.stop().animate({'right' : '10px'}, 400); 
					}
				} else {
					if (showFlug) {
						showFlug = false;
						topBtn.stop().animate({'right' : '-130px'}, 400); 
					}
				}
			});
		});

});
