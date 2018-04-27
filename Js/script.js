$(document).ready(function(){
//     alert(($('div.dropdown-menu.show').css('height') == undefined) + " && " + ($(window).width() < 992 ) + " = " + (($('div.dropdown-menu.show').css('height') == undefined) && ($(window).width() < 992 )));
 $(".navbar a").click(function(){
     var dropdownMenuHeight = $('div.dropdown-menu.show').css('height');
     var windowWidth = $(window).width();
     var isUndefined = dropdownMenuHeight == undefined;
     var isLgWidth = windowWidth > 991 ;
//     alert("dropdownMenuHeight = " + dropdownMenuHeight + " Int(dropdownMenuHeight) = " + parseInt(dropdownMenuHeight) + " wndowWidth = " + windowWidth + " isUndefined = " + isUndefined + " isLgWidth = " + isLgWidth);
    var additionalOffset = (!isUndefined && !isLgWidth) ? (parseInt(dropdownMenuHeight)) : ( 0 )  ;
//     alert("additionalOffset = " + additionalOffset);
     var navHeight = $('nav').css('height');
//     alert(navHeight);
 	$("body,html").stop(true,false).animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top - (parseInt(navHeight) - additionalOffset)
 	},1000)
 })
})
