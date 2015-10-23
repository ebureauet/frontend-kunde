// JavaScript Document



$.fn.extend({
        paginate: function(options) {     
      

            var itemsPerPage = 10;
            var container = $(this);
            var prev = $("<a>prev</a>");
            var next = $("<a>next</a>");
            var itemHolder = $("<div></div>");
            var counter = 0;
            var sectionCounts = 0;
            var section = null;
            var currentSection = 1;

            if (options.itemsPerPage != null)
                itemsPerPage = options.itemsPerPage;
            if (options.prev != null)
                prev = options.prev;
            if (options.next != null)
                next = options.next;
            if (options.itemHolder != null)
                itemHolder = options.itemHolder;

            container.children().each(function() {
                if (counter == 0) {
                    section = $("<div class='section" + (++sectionCounts) + "' style='display:none; width:110%'></div>");
                    container.append(section);
                    section.append($(this));
                    counter++;
                    itemHolder.append("<a href='#'>" + sectionCounts + "</a>")
                }
                else if (counter > 0 && counter < (itemsPerPage - 1)) {
                    section.append($(this));
                    counter++;
                }
                else {
                    section.append($(this));
                    counter = 0;
                }
        
        if ( counter == 3 ) {
          section.append('<ul class="seperator-list"><li></li><li></li><li></li></ul>');
        }
            });
            prev.unbind().bind("click", function() {
                if (currentSection > 1) {
                    currentSection--;
                    moveToIndex(currentSection);
                }
            });

            next.unbind().bind("click", function() {
                if (currentSection < container.children().length) {
                    currentSection++;
                    moveToIndex(currentSection);
                }
            });

            itemHolder.find("a").each(function(index, element) {
                $(this).unbind().bind("click", function() {
                    moveToIndex(index + 1)
                });
            });
            function moveToIndex(index) {
                currentSection = index;
                container.children().css("display", "none");
                container.children().eq(currentSection - 1).css("display", "");
    itemHolder.html(index+"/"+container.children().length);

  if (index== 1) {
    $('.prev').css({'color':'#646464', 'backgroundPosition':'0 6px', 'cursor':'default'});
  } else if (index > 1) {
    $('.prev').css({'color':'#963241', 'backgroundPosition':'0 -12px', 'cursor':'pointer'});
  }
  if (index == container.children().length) {
    $('.next').css({'color':'#646464', 'backgroundPosition':'100% -30px', 'cursor':'default'});
  } else  {
    $('.next').css({'color':'#963241', 'backgroundPosition':'100% -50px;', 'cursor':'pointer'});
  }

                //itemHolder.find("a").removeClass("active");
                //itemHolder.find("a").eq(currentSection - 1).addClass("active");
                if (currentSection == container.children().length) {
                    next.addClass("disabled");
                    next.css("cursor", "default");
                }
                else {
                    next.removeClass("disabled");
                    next.css("cursor", "pointer");
                }
                if (currentSection == 1) {
                    prev.addClass("disabled");
                    prev.css("cursor", "default");
                }
                else {
                    prev.removeClass("disabled");
                    prev.css("cursor", "pointer");
                }
            }
            moveToIndex(1);
        }
    })

 $(document).ready(function() {

  var counterWidth = $(".page").width();

  $(".page").width(counterWidth+9);

 });