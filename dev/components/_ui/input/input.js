// set input filled styles
$('.input').on('change', function () {
  $(this).val() !== '' ? $(this).addClass('input--filled') : $(this).removeClass('input--filled');
});