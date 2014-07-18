//@codekit-prepend "jquery.js"
//@codekit-prepend "classie.js"
//@codekit-prepend "jquery.cbFlyout.js"
//@codekit-prepend "jquery.galereya.min.js"
//@codekit-prepend "lightGallery.js"



$(document).ready(function(){
        $(".slidingDiv").hide();
        $(".show_hide").show();
 
    $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle("fast");
    });
});


$(document).ready(function() {
	$("#lightGallery").lightGallery({
		mode:"fade",
		speed:800,
		caption:true,
		desc:true,
		mobileSrc:true
	});
});


function sameHeights(selector) {
	    var selector = selector || '[data-key="sameHeights"]',
	        query = document.querySelectorAll(selector),
	        elements = query.length,
	        max = 0;
	    if (elements) {
	        while (elements--) {
	            var element = query[elements];
	            if (element.clientHeight > max) {
	                max = element.clientHeight;
	            }
	        }
	        elements = query.length;
	        while (elements--) {
	            var element = query[elements];
	            element.style.height = max + 'px';
	        }
	    }
	}


	if ('addEventListener' in window) {
	    window.addEventListener('resize', function(){
	        sameHeights();
	    });
	    window.addEventListener('load', function(){
	        sameHeights();
	    });
	}

	$(document).ready(function() {
  	 	

/* the Responsive menu script */
 	$('body').addClass('js');
		  var $menu = $('#menu'),
		  	  $menulink = $('.menu-link'),
		  	  $menuTrigger = $('.has-subnav > a');
		
	$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
	});

	var add_toggle_links = function() { 		
	 	if ($('.menu-link').is(":visible")){
	 		if ($(".toggle-link").length > 0){
	 		}
	 		else{
	 			$('.has-subnav > a').before('<span class="toggle-link"> Open submenu </span>');
	 			$('.toggle-link').click(function(e) {		
					var $this = $(this);
					$this.toggleClass('active').siblings('ul').toggleClass('active');
				});	
	 		}
	 	}
		else{
			$('.toggle-link').empty();
		}
	 }
	add_toggle_links();
	$(window).bind("resize", add_toggle_links);	
		
		});

$('#mylink').click(function(event) {

    // This will prevent the default action of the anchor
    event.preventDefault();

    // Failing the above, you could use this, however the above is recommended
    return false;

});

$('.mylink2').click(function(event) {

    // This will prevent the default action of the anchor
    event.preventDefault();

    // Failing the above, you could use this, however the above is recommended
    return false;

});


