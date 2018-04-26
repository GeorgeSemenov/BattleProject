$(document).ready(function(){
 $(".navbar a").click(function(){
 	$("body,html").stop(true,false).animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top-parseInt($('nav').css('height'))
 	},1000)
 })
})
