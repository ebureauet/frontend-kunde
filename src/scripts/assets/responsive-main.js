$(document).ready(function(){

  if ($('.cases').length) {
    $('.cases').owlCarousel({
      items : 1,
      center: true
    });
  }

  if ($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
      items : 1,
      center: true,
      autoHeight: true

    });
  }

  if ($('#article-media').length){
    $('#article-media').find('[data-toggle="tab"]').on('click',function(){
      $(this).closest('#article-media').toggleClass('active');
    });
  }

});
