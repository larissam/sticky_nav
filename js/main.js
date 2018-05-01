// PART 1 - Google $(window).scrollTop();
// - What does it return?
// - How can we use it to achieve the sticky nav effect?


$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
	console.log('The distance scrolled is: ' + distanceScrolled);

	// PART 2 - Find the value of distanceScrolled where we need to 
	// make the nav sticky

	// PART 3 - Use a conditional statement to add the 'scrolled' class to the
	// nav if the user has scrolled further than distanceScrolled and to 
	// remove the 'scrolled' class if the user has not scrolled further than
	// distanceScrolled


	if(distanceScrolled >= 540) {
		$('.sticky-nav-wrapper').addClass('scrolled');
	} else {
		$('.sticky-nav-wrapper').removeClass('scrolled');
	}

	// PART 4 - Repeat PART 2 and PART 3 for the 3 labels. You will be 
	// adding/removing the 'fade-in' class.

	// PART 5 - Repeat PART 2 and PART 3 for the butterfly.

	if(distanceScrolled >= 580) {
		$('.label-1').addClass('fade-in')
	} else {
		$('.label-1').removeClass('fade-in')
	}

	if(distanceScrolled >= 740) {
		$('.label-2').addClass('fade-in')
	} else {
		$('.label-2').removeClass('fade-in')
	}

	if(distanceScrolled >= 880) {
		$('.label-3').addClass('fade-in')
	} else {
		$('.label-3').removeClass('fade-in')
	}

	if(distanceScrolled >= 1350) {
		$('.butterfly').addClass('animated')
	} else {
		$('.butterfly').removeClass('animated')
	}

});