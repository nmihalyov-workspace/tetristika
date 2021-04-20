let topOffset = 0;

const hideOverflow = () => {
  topOffset = window.scrollY;

  $('body').css({
    position: 'fixed',
    marginTop: `${-topOffset}px`
  });
};

const showOverflow = () => {
  $('body').css({
    position: 'static',
    marginTop: '0'
  });

  window.scrollTo(0, topOffset);
};

$('body').on('click', '.js-open-popup', function () {
  const $this = $(this);
  const target = $this.attr('data-popup');
  const $popup = $(`.js-popup[data-popup="${target}"]`);

  if (target === 'document') {
    $popup.find('.js-popup-document').attr('src', $this.children().attr('src'));
  }

  hideOverflow();
  
  $popup.fadeIn(300);
});

$('.js-close-popup').on('click', function () {
  const $this = $(this);

  showOverflow();

  $this.closest('.js-popup').hide(0);
});