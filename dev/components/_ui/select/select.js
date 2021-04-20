$('.js-select').each(function () {
  const $this = $(this);

  $this.select2({
    placeholder: $this.attr('placeholder'),
    minimumResultsForSearch: -1,
  });
});