const prevArrowSmall = '<div class="slider__arrow slider__arrow--small slider__arrow--prev"></div>'
const nextArrowSmall = '<div class="slider__arrow slider__arrow--small slider__arrow--next"></div>'

const prevArrowBig = '<div class="slider__arrow slider__arrow--big slider__arrow--prev"></div>'
const nextArrowBig = '<div class="slider__arrow slider__arrow--big slider__arrow--next"></div>'

const sliderInit = (options, name) => {
  const $slider = $(`.js-${name}-slider`);
  let initial = 1;
  
  $slider.on('init', function (e, slick) {
    const total = slick.slideCount;
    initial = slick.options.slidesToShow || 1;
    $(this).parent().find(`.js-${name}-total`).text(total < 10 ? '0' + total : total);
    $(this).parent().find(`.js-${name}-current`).text(initial < 10 ? '0' + initial : initial);
  });
  
  
  $slider.each(function () {
    const $this = $(this);

    options.desktop.customArrowsContainer && (options.desktop.appendArrows = $this.parent().find('.slider__arrows'));
    options.tablet.customArrowsContainer && (options.tablet.appendArrows = $this.parent().find('.slider__arrows'));
    options.mobile.customArrowsContainer && (options.mobile.appendArrows = $this.parent().find('.slider__arrows'));

    $this.slick({
      ...options.desktop,
      responsive: [
        {
          breakpoint: 1279,
          settings: options.tablet
        },
        {
          breakpoint: 767,
          settings: options.mobile
        }
      ]
    });
  });
  
  $slider.on('breakpoint', function (e, slick) {
    initial = slick.options.slidesToShow || 1;
  });
  
  $slider.on('afterChange', function (e, slick) {
    const current = slick.currentSlide + initial;
    $(this).parent().find(`.js-${name}-current`).text(current < 10 ? '0' + current : current);
  });
};