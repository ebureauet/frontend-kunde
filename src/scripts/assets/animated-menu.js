$(document).ready(function(){
  
  //Remove outline from links
  $("a").click(function(){
    $(this).blur();
  });

  var dropLenght = $('.subtext').height();  

  //When mouse rolls over

  $("li.lang_drop").mouseover(function(){
    $(this).stop().animate({height:dropLenght + 47},{queue:false, duration:400, easing:"easeInOutSine"})
	/*easeInOutSine*/
    /*$(this).width(161);
	
    $('.lang-holder').css('right','124px'); */   
  });
  
  //When mouse is removed

  $("li.lang_drop").mouseout(function(){
    $(this).stop().animate({height:"20px"},{queue:false, duration:400, easing: "easeInOutSine", complete: mouseoutComplete});

  });

  function mouseoutComplete() {
    /*$(this).width(110);  */
    /*$('.lang-holder').css('right','175px');*/
  }
  
  
});