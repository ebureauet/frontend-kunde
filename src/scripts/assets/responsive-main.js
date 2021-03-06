function mediaAreaHyt(){
  if ($('#article-media').length){
    /*
    var mxht = 0, ht;
    $('#article-media > div').each(function(){
      ht = $(this).height();
      mxht = Math.max(ht,mxht);
      $(this).height(mxht);
    });
    */
    var ht;
    ht = $('#article-media > .canvas').height();
    $('#article-media > .sidepane').height(ht);
  }
};

$(window).load(function(){
  mediaAreaHyt();
});

$(document).ready(function(){
  mediaAreaHyt();
  if ($('.cases').length) {
    var obj = $('.cases'),
      txtPrev = obj.data("text-prev"),
      txtNext = obj.data("text-next"),
      changeNumRange = function(e){
        var n,c;
        n = e.item.index+1;
        c = e.item.count;
        $(e.target).siblings('.owl-panel').find('.ind').text(n);
        $(e.target).siblings('.owl-panel').find('.tot').text(c);
        if (n == c){
          $('.cases-page-next').addClass('inactive');
        }else{
          $('.cases-page-next').removeClass('inactive');
        }
        if (n == 1){
          $('.cases-page-prev').addClass('inactive');
        }else{
          $('.cases-page-prev').removeClass('inactive');
        }

      };

    $('.cases').each(function(){
      var o = $(this), txtName = o.data("text-title");
      o.parent().prepend('<div class="owl-panel"><div class="range"><span class="cases-page-arrow cases-page-prev inactive"></span><span class="ind"></span>/<span class="tot"></span><span class="cases-page-arrow cases-page-next"></span></div></div>');
      o.parent().append('<div class="owl-panel"><div class="range"><span class="cases-page-arrow cases-page-prev inactive"></span><span class="ind"></span>/<span class="tot"></span><span class="cases-page-arrow cases-page-next"></span></div></div>');
    });

    obj.owlCarousel({
      items : 1,
      center: true,
      video: true,
      onInitialized: function(e){
        changeNumRange(e);
      },
      onDragged: function(e){
        changeNumRange(e);
      },
      onChanged: function(e){
        changeNumRange(e);
      }
    });

    $('.cases-page-prev').on("click", function(){
      obj.trigger('prev.owl.carousel');
    });

    $('.cases-page-next').on("click", function(){
      obj.trigger('next.owl.carousel');
    });


  }

  if ($('.media-slides').length) {

    var obj = $('.media-slides'),
      txtPrev = obj.data("text-prev"),
      txtNext = obj.data("text-next"),
      changeNumRange = function(e){
        $(e.target.nextElementSibling).find('.ind').text(e.item.index+1);
        $(e.target.nextElementSibling).find('.tot').text(e.item.count);
      };

    $('.media-slides').each(function(){
      var o = $(this), txtName = o.data("text-title");
      o.parent().append('<div class="owl-panel"><div class="range"><span class="ind"></span>/<span class="tot"></span></div><span class="tab-name">'+txtName+'</span>');
    });


    obj.owlCarousel({
      items : 1,
      center: true,
      autoHeight: true,
      nav: true,
      lazyLoad:true,
      navText: [txtPrev+'<span></span>',txtNext+'<span></span>'],
      onInitialized: function(e){
        changeNumRange(e);
      },
      onDragged: function(e){
        changeNumRange(e);
      },
      onChange: function(e){
        $(e.target).find(".active").each(function(){
          $(this).find(".video").each(function(){
            if ($(this).hasClass("vid-html5")){
              $(this).find('video').get(0).pause();
            }
            else{
              var v = $(this).find('.embed').each(function(){
                if ( $(this).hasClass('embed-yt') ){
                  $(this)[0].src = $(this)[0].src.replace("&autoplay=0","&autoplay=0");
                }else{
                  $(this)[0].src = $(this)[0].src.replace("&autoplay=0","&autoplay=0");

                }

              });
            }
          })

        });
      }
    });


    if ($('#article-media').length){
      $('#article-media').find('[data-toggle="tab"]').on('click',function(){
        $(this).closest('#article-media').toggleClass('active');
        $('#article-media .category-items li a').removeClass('active');
        $(this).addClass('active');
        mediaAreaHyt();
      });
    }

  }

  $('.video-popup-trigger-alt').magnificPopup({
    type:'inline',
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    callbacks: {
      open: function() {
        // Will fire when this exact popup is opened
        // this - is Magnific Popup object
      },
      close: function() {
        $('iframe.vid-yt').each(function(){
          $(this)[0].src = $(this)[0].src.replace("&autoplay=1","&autoplay=0");
        });
      }
    }
  });

  $('.video-popup-trigger-alt').on('click', function(ev) {
    var vId = $(this).data("video-id");
    $("."+vId)[0].src = $("."+vId)[0].src.replace("&autoplay=0","&autoplay=1");
    ev.preventDefault();
  });

  var ttt = $('.video-popup-trigger-alt2').magnificPopup({
    items: {
        src: '<div id="thevideo" class="white-popup"><div class="video-wrapper">'+
            '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+$(this).data("video-id")+'?autoplay=0&rel=0&showinfo=0&controls=0;" frameborder="0" allowfullscreen=""></iframe>'+
          '</div></div>',
        type: 'inline'
    },
    closeBtnInside: true,
    callbacks: {
      open: function() {
        // Will fire when this exact popup is opened
        // this - is Magnific Popup object
        var magnificPopup = $.magnificPopup.instance;
      },
      close: function() {
        // Will fire when popup is closed
      }
    }
  });


  $('.video-popup-trigger').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
		iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; }

		      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
		    },
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '/',
		      src: 'https://player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      index: 'https://maps.google.',
		      src: '%id%&output=embed'
		    }

		    // you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
	});


});
