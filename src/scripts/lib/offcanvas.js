$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    var o = $(this).data('target');
    if (o == '#main') {
      $("#main-menu").toggleClass('open');
    }
    $(this).toggleClass('open');
    $(o).toggleClass('active');
  });
});
