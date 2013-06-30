//Header settings
window.onload = (function(){
	var imageHeight = $('.header-image').height();
    $('#header').css('height', imageHeight);
    $('.ticket-image').css('height', $('#bar-below-header').height() + 0.5 * $('#bar-below-header').height());
    $('.ticket-image').css('margin-top',  -0.25 * $('#bar-below-header').height()); 
}); 
$(document).ready(function(){
    $(window).resize(function(){
    	var imageHeight = $('.header-image').height();
        $('#header').css('height', imageHeight);
        $('.ticket-image').css('height', $('#bar-below-header').height() + 0.5 * $('#bar-below-header').height());
        $('.ticket-image').css('margin-top',  -0.25 * $('#bar-below-header').height());
    });        
});

//Countdown settings
$(function () {
	var confDay = new Date();
	confDay = new Date(confDay.getFullYear(), 2 - 1, 22, 9);
	$('#year').text(confDay.getFullYear());
	$('#noSeconds').countdown({until: confDay, format: 'dHM' });
});

//Pop up abstracts

/*
* Displays an overlay dialog when a user clicks the 'I'll be there' link
*/
function popUpAbstract(key, event) {
	$(document).ready(
			function() {
				
				/* position relative to the button that was clicked */
				var px = event.pageX + 0 +"px";
				var py = event.pageY - 380 + "px";
				
				ShowAbstract(key, px, py);
				
				event.preventDefault ? event.preventDefault()
						: event.returnValue = false;
			});
}

/*
* Shows a dialog - referenced by key
*/
function ShowAbstract(key, px, py) {
	var ol = "#".concat(key).concat("overlay");
	var dl = "#".concat(key).concat("dialog");
	$(ol).show();
	if((px != 0) && (py !=0 )) {
		$(dl).css({left:px, top:py }).fadeIn(300);
	}else {
		$(dl).fadeIn(300);
	}
	
}
/*
* Hides a dialog - referenced by key
*/
function HideAbstract(key, event) {
	var ol = "#".concat(key).concat("overlay");
	var dl = "#".concat(key).concat("dialog");
	$(ol).hide();
	$(dl).fadeOut(300);
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
}



