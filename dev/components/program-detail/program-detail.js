const showPlanText = 'Показать учебный план';
const hidePlanText = 'Скрыть учебный план';

$('.js-toggle-plan').on('click', function () {
  const $text = $(this).text();
  if ($text === showPlanText) {
    $(this).text(hidePlanText);
    if ($(window).innerWidth() >= 768) {
      $('.js-plan-preview').slideUp(300);
      setTimeout(() => {
        $('.js-plan-content').slideDown(500);
      }, 300);
    } else {
      $('.js-plan-content').slideDown(500);
    }
  } else {
    $(this).text(showPlanText);
    $('.js-plan-content').slideUp(500);
    if ($(window).innerWidth() >= 768) {
      setTimeout(() => {
        $('.js-plan-preview').slideDown(300);
      }, 500);
    } else {
      setTimeout(() => {
        $('.js-plan-preview-mobile').slideDown(300);
      }, 500);
    }
  }
});