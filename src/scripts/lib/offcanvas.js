$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $(this).toggleClass('open');
    $('.row-offcanvas').toggleClass('active');
  });
});
