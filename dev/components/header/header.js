$('.js-open-menu').on('click', function () {
  hideOverflow();
  $('.js-menu').show();
});

$('.js-close-menu').on('click', function () {
  showOverflow();
  $('.js-menu').hide();
});