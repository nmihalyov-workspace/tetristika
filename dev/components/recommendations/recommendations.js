const recommendationsSliderOptions = {
  customArrowsContainer: true,
  infinite: false,
  slidesToScroll: 1,
  prevArrow: prevArrowBig,
  nextArrow: nextArrowBig,
  slidesToShow: 3,
  swipe: false
};

const recommendationsSliderOptionsTablet = {
  slidesToShow: 2,
  swipe: true,
  swipeToSlide: true
};

const recommendationsSliderOptionsMobile = {
  slidesToShow: 1,
  swipe: true,
  swipeToSlide: true,
  adaptiveHeight: true
};

sliderInit({
  desktop: recommendationsSliderOptions,
  tablet: recommendationsSliderOptionsTablet,
  mobile: recommendationsSliderOptionsMobile
}, 'recommendations');