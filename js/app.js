$(document).ready(function () {
  // Slider
  $('.reviews__slider-text').slick({
    asNavFor: '.slider-image__item',
    arrows: false,
  });

  $('.slider-image__item').slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/reviews/arrow-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/reviews/arrow-next.svg" alt=""></button>',
    dots: true,
    slidesToShow: 5,
    asNavFor: '.reviews__slider-text',
  });

  // Animation
  new WOW().init();

    // Smooth scroll
    $('[data-scroll]').on('click', function (evt) {
      evt.preventDefault();
  
      const elementClass = $(this).data('scroll');
      const elementOffset = $(elementClass).offset().top;
  
      $('html, body').animate(
        {
          scrollTop: elementOffset,
        },
        1000
      );
    });
});
