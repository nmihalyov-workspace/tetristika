const viewportReset = () => {
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, user-scalable=no');
};

const setResponsive = (width, callback) => {
  if (width < 1280 && width >= 768) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=768');
  } else if (width < 768) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=320');
  }
};

setResponsive(window.innerWidth);

$(window).resize(() => {
  viewportReset();
  setResponsive($(window).innerWidth());
});