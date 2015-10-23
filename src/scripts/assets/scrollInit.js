var panelWidth = 742;
var scrollContainer = null;
var counterDiv = null;
var currentElement = 1;
var maxElements = 1;
var currentPos = 0;
var animationSpeed = 350;
var newLeft = 0;

$(function(){
  initScroll();
  hideCounter();
  $("#prevbtn").click(previous);
  $("#nextbtn").click(next);
});

function initScroll()
{
  currentElement = 1;
  currentPos = 0;
  scrollContainer = $('.scrollContainer');
  maxElements = scrollContainer.find('.panel').length;
  scrollContainer.width(maxElements*panelWidth);
  //$.fonqi.inspect(scrollContainer);
  currentPos = scrollContainer.position().left;
  //alert(currentPos);
  counterDiv = $(".itemCounter");
  counterDiv.html("1/"+maxElements);

  scrollContainer.animate({left:'0px'}, 0, null);
  greyElement();

}

function hideCounter()
{
  if(maxElements <= 1){
    $('#buttons').css('display','none');
  } else if (maxElements > 1) {
    $('#buttons').css('display','block');
  }
}

function greyElement()
{
  if (currentElement == 1) {
    $('#prevbtn').css({'color':'#646464', 'background':'URL(../images/arrow-left.png) no-repeat 0 7px', 'cursor':'default'});
  } else if (currentElement > 1) {
    $('#prevbtn').css({'color':'#CE103B', 'background':'URL(../images/arrow-left-h.png) no-repeat 0 7px', 'cursor':'pointer'});
  }
}

function previous(ev)
{
  pauseVideo();

  if(currentElement == 1)
  {
    currentElement = maxElements;
    newLeft = - scrollContainer.width() + panelWidth;
    counterDiv.html(maxElements+"/"+maxElements);
  }
  else
  {
    currentElement--;
    newLeft = currentPos + panelWidth;
    counterDiv.html(currentElement+"/"+maxElements);
  }
  currentPos = newLeft;
  scrollContainer.animate({left:newLeft+'px'}, animationSpeed, null);
  greyElement();
} 
function next(ev)
{
  pauseVideo();
  if(currentElement == maxElements)
  {
    currentElement = 1;
    var newLeft = 0;
    counterDiv.html("1/"+maxElements);
  }
  else
  {
    currentElement++;
    newLeft = currentPos - panelWidth;
    counterDiv.html(currentElement+"/"+maxElements);
  }  
  currentPos = newLeft;
  scrollContainer.animate({left:newLeft+'px'}, animationSpeed, null);
  greyElement();
} 

function pauseVideo()
{
  $('object').each(function(){
    try{
      $(this).find("embed").get(0).api_pause();
    }catch(err){}
    try{
      $(this).find("embed").get(0).pauseVideo();
    }catch(err){}
    try{
      $(this).get(0).stopKundeVideo();
    }catch(err){}
  });
}