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
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
  // Burger menu
  const wrapper = document.querySelector('.burger__button-wrapper');
  const burger = document.querySelector('.burger__button');
  const mobileNav = document.querySelector('.menu__mobile-nav');
  const mobileLink = document.querySelectorAll('.mobile-nav__link');
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobileNav.classList.toggle('menu__mobile-nav--active');
    html.classList.toggle('block');
    body.classList.toggle('block');
  });

  for (let i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      burger.classList.toggle('active');
      mobileNav.classList.remove('menu__mobile-nav--active');
      html.classList.remove('block');
      body.classList.remove('block');
    });
  }
});
