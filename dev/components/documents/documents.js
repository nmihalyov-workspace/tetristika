const documentsSliderOptions = {
  customArrowsContainer: true,
  infinite: false,
  slidesToScroll: 1,
  prevArrow: prevArrowBig,
  nextArrow: nextArrowBig,
  slidesToShow: 6,
  swipe: false
};

const documentsSliderOptionsTablet = {
  slidesToShow: 4,
  swipe: true,
  swipeToSlide: true
};

const documentsSliderOptionsMobile = {
  slidesToShow: 2,
  swipe: true,
  swipeToSlide: true
};

sliderInit({
  desktop: documentsSliderOptions,
  tablet: documentsSliderOptionsTablet,
  mobile: documentsSliderOptionsMobile
}, 'documents');