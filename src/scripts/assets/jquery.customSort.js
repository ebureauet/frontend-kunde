// JavaScript Document
/// <reference path="jquery-1.4.2.min-vsdoc.js" />
/// <reference path="jquery.fonqi.min.js" />

$.fn.extend({
    customSort: function (sorter) {
        var arr = [];
        var me = $(this);
        $(gallery).find("input[type='hidden'][name='" + sorter + "']").each(function (index, element) {
            arr.push({ val: $(element).val(), element: $(element).parent() });
        });
        if (sorter == "customdate")
            arr.sort(desc);
        else
            arr.sort(asc);
        me.html("");
        $(arr).each(function (index, element) {
            me.append("<li class='sortDiv'><div>" + $(element.element).html() + "</div></li>");
        });
    },
    exclusive: function (name, value) {
        var arr = [];
        var me = $(this);
        $(gallery).find("input[type='hidden'][name='" + name + "']").each(function (index, element) {
            if ($.trim($(element).val()) == value) {
                arr.push({ val: $(element).parent().find("input[type='hidden'][name='client']").val(), element: $(element).parent().html() });
            }
        });

        arr.sort(asc);
        me.html("");

        $(arr).each(function (index, elem) {
            me.append("<li class='sortDiv'><div>" + elem.element + "</div></li>");
        });
    }
});

var sortorder = "desc";
function desc(a, b) {
    if (a.val > b.val) { return -1; }
    else { return 1; }
}

function asc(a, b) {
    if (a.val < b.val) { return -1; }
    else { return 1; }
}

function strArr(arr) {
    var str = "";
    $.each(arr, function (index, elem) {
        str += elem.val + ", ";
    });
    return str;
}