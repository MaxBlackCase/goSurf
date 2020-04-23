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
    responsive: [
      {
        breakpoint: 961,
        settings: 'unslick',
      },
    ],
  })

  $('.surf-content__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow-right">',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: false
        },
      },
    ],
  })

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-content__slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
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
    $(this).toggleClass('active')
  })
  // * /surfbox

  // * menu-btn
  $('.menu-btn').on('click', () => {
    $('.menu').toggleClass('active')
  })
  // * /menu-btn
  new WOW().init()
})
