const offerSliderOptions = {
  fade: true,
  swipe: false,
  prevArrow: prevArrowSmall,
  nextArrow: nextArrowSmall
};

const offerSliderOptionsTablet = {
  fade: false,
  swipe: true,
  swipeToSlide: true,
  prevArrow: prevArrowSmall,
  nextArrow: nextArrowSmall
};

const offerSliderOptionsMobile = {
  customArrowsContainer: true,
  fade: false,
  swipe: true,
  swipeToSlide: true,
  prevArrow: prevArrowBig,
  nextArrow: nextArrowBig
};

sliderInit({
  desktop: offerSliderOptions,
  tablet: offerSliderOptionsTablet,
  mobile: offerSliderOptionsMobile
}, 'offer')