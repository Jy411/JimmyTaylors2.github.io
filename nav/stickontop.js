$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	
   if (scroll >= 130){ // <--- agak agak lor
		$("header > inside").addClass("header_kill");
		$("logo").addClass("logo_reveal");
		$("logo").removeClass("logo_hidden");
    } else {
		$("header > inside").removeClass("header_kill");
		$("logo").removeClass("logo_reveal");
		$("logo").addClass("logo_hidden");
    }

});