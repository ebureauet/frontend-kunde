// page init

$(document).ready(function ()
{
    initFormValidation();    

    $("a").click(function ()
    {
        $(this).blur();
    });

    var dropLenght = $('.subtext').height();

    $("li.lang_drop").mouseover(function ()
    {
        $(this).stop().animate({ height: dropLenght + 47 }, { queue: false, duration: 400, easing: "easeInOutSine" });
    });

    $("li.lang_drop").mouseout(function ()
    {
        $(this).stop().animate({ height: "20px" }, { queue: false, duration: 400, easing: "easeInOutSine" });
    });
    /*
    var navl = $('.pagination a');
    console.log(navl);*/
    
});

//google analytics
//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-2622072-1']);
//_gaq.push(['_trackPageview']);

//(function ()
//{
//    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//})();

// form validation
function initFormValidation()
{
    var _errorClass = 'error';
    var _regEmail = /^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$/;
    var _regEmails = /^([_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4})+([, ]+[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4})*$/;
    var _regPhone = /^[69]{2}[0-9]{8}$/;
    var _regNum = /^[0-9]+$/;
    var _regDay = /^(([0]{1}[1-9]{1})|([1-9]{1})|([1-2]{1}[0-9]{1})|([3]{1}[0-1]{1}))$/;
    var _regMon = /^(([0]{1}[1-9]{1})|([1-9]{1})|([1]{1}[0-2]{1}))$/;
    var _regYear = /^[19]{2}[0-9]{2}$/;

    $('form.validate-form').each(function ()
    {
        var _form = $(this);
        function checkFields()
        {

            var _flag = false;
            _form.find('.' + _errorClass).removeClass(_errorClass);

            // fields validation
            _form.find('input.required-email').each(function ()
            {
                if (!_regEmail.test($(this).val())) addError($(this));
            });
            _form.find('input.required-day').each(function ()
            {
                if (!_regDay.test($(this).val())) addError($(this));
            });
            _form.find('input.required-mon').each(function ()
            {
                if (!_regMon.test($(this).val())) addError($(this));
            });
            _form.find('input.required-year').each(function ()
            {
                if (!_regYear.test($(this).val())) addError($(this));
            });
            _form.find('textarea.required-many-emails').each(function ()
            {
                if (!_regEmails.test($(this).val())) addError($(this));
            });
            _form.find('input.required-phone').each(function ()
            {
                if (!_regPhone.test($(this).val())) addError($(this));
            });
            _form.find('input.required-num').each(function ()
            {
                if (!_regNum.test($(this).val())) addError($(this));
            });
            _form.find('input.required, textarea.required').each(function ()
            {
                if (!$(this).val().length || $(this).val() == $(this).attr('alt')) addError($(this));
            });
            _form.find('input.required-chek').each(function ()
            {
                if (!$(this).is(':checked')) {
                    $(this).parent('span').addClass('error-chk');
                    _flag = true;
                }
            });
            _form.find('div.required-radio').each(function ()
            {
                var _test = false;
                $(this).find('input[type=radio]').each(function ()
                {
                    if ($(this).is(':checked')) _test = true;
                });
                if (!_test) {
                    $(this).find('div.row3 > span').eq(0).addClass('error-chk');
                    _flag = true;
                }
            });

            // error class adding
            function addError(_obj)
            {
                _obj.addClass(_errorClass);
                _flag = true;
            }
            return _flag;
        }

        // catch form submit event
        _form.submit(function ()
        {
            if (checkFields()) {
                _form.find('strong.add-error').show();
                return false;
            }
        });
    });
}

$(function () {
    var s = $("#view-allTags");
    if (s.length == 0)
        return;

    $(s).click(function (e) {
        e.preventDefault();
        $(this).siblings("ul").first().find("li").removeClass("hidden");
        $(this).hide();
    });
});