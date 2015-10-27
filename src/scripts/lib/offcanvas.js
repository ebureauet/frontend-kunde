$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    var o = $(this).data('target');
    $(this).toggleClass('open');
    if (o = '#main') {
      $("#main-menu").toggleClass('open');
    }
    $(o).toggleClass('active');
  });
});
