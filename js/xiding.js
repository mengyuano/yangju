$(function(){
	var tt=$("#ding").offset().top;
	$(document).scroll(function(){
	    var tops = $(this).scrollTop();
		if(tops>=tt){
			$("#ding").addClass("fix").css('z-index','1')
		}else{
			$("#ding").removeClass("fix")
		}
	})
})
