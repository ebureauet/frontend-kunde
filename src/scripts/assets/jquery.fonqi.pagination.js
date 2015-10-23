// JavaScript Document

$.fn.extend({

    paginate: function (options) {
        var itemsPerPage = 12;
        var container = $(this);
        var prev = $("<a>prev</a>");
        var next = $("<a>next</a>");
        var itemHolder = $("<div></div>");
        var counter = 0;
        var currentSection = 0;
        var childCount = container.children(".sortDiv").length;

        if (options.itemsPerPage != null)
            itemsPerPage = options.itemsPerPage;
        if (options.prev != null)
            prev = options.prev;
        if (options.next != null)
            next = options.next;
        if (options.itemHolder != null)
            itemHolder = options.itemHolder;

        var sectionCount = Math.ceil(childCount / itemsPerPage);
        if (childCount < itemsPerPage)
            sectionCount = 1;

        if (childCount < 9)
            $('.paging').hide();

        moveToIndex(0);

        prev.unbind().bind("click", function (e) {
            e.preventDefault();
            if (currentSection > 0) {
                currentSection--;
                moveToIndex(currentSection);
            }
        });

        next.unbind().bind("click", function (e) {
            e.preventDefault();
            if (currentSection < (sectionCount - 1)) {
                currentSection++;
                moveToIndex(currentSection);
            }
        });

        itemHolder.find("a").each(function (index, element) {
            $(this).unbind().bind("click", function () {
                moveToIndex(index + 1)
            });
        });

        function moveToIndex(index) {
            currentSection = index;
            container.children(".sortDiv").css("display", "none");
            var currentStartElement = currentSection * itemsPerPage;
            container.children(".sortDiv").slice(currentStartElement, currentStartElement + itemsPerPage).css("display", "");
            itemHolder.html((index + 1) + "/" + sectionCount);
            if (currentSection == (sectionCount - 1)) {
                next.addClass("paging_disabled");
                next.css("cursor", "default");
            }
            else {
                next.removeClass("paging_disabled");
                next.css("cursor", "pointer");
            }
            if (currentSection > 0) {
                prev.removeClass("paging_disabled");
                prev.css("cursor", "pointer");
            }
            else {
                prev.addClass("paging_disabled");
                prev.css("cursor", "default");
            }
            $(".gallery .seperator-list").remove();
            $(".gallery li").each(function (i) {
                var index = i + 1;
                if ($(this).is(':visible') && index % 3 == 0) {
                    if (index % itemsPerPage != 0) {
                        $(this).after('<li class="seperator-list"></li>');
                    }
                }
            });
        }
    }
})