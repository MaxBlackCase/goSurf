$(() => {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow-right">',
    asNavFor: '.slider-dotshead'
  })

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  })

  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow-right">',
    asNavFor: '.slider-map'
  })

  $('.slider-map').slick({ 
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true
  });

})
