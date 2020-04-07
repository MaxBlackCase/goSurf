$(() => {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow-right">',
    asNavFor: '.slider-dotshead',
  })

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  })

  $('.surf-content__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow-right">',
    asNavFor: '.slider-map',
  })

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-content__slider',
    focusOnSelect: true,
  })
  $('.holders__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow-right">',
    asNavFor: '.slider-dotshead',
  })

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter('.quantity input')
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = Number(input.attr('min')),
      max = Number(input.attr('max'))

    btnUp.click(function () {
      var oldValue = Number(input.val())
      if (oldValue >= max) {
        var newVal = oldValue
      } else {
        var newVal = oldValue + 1
      }
      spinner.find('input').val(newVal)
      spinner.find('input').trigger('change')
    })

    btnDown.click(function () {
      var oldValue = Number(input.val())
      if (oldValue <= min) {
        var newVal = oldValue
      } else {
        var newVal = oldValue - 1
      }
      spinner.find('input').val(newVal)
      spinner.find('input').trigger('change')
    })
  })
  // * price calculation
  $('.quantity-button,  .quantity input').on('click, change', function () {
    let summ =
      Number($('.nights').val()) * $('.summ').data('nights') +
      Number($('.guests').val()) * $('.summ').data('guests')
    $('.summ').html('$' + summ)
  })
  let summ =
    Number($('.nights').val()) * $('.summ').data('nights') +
    Number($('.guests').val()) * $('.summ').data('guests')
  $('.summ').html('$' + summ)
  // * /price calculation

  // * surfbox
  $('.surfboard-box').on('click', function () {
    $(this).toggleClass('active');
  })
  // * /surfbox
})
