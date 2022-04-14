$(function () {
  $('.top-slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.1" cx="24" cy="24" r="23.5" stroke="white"/><path d="M31.3536 24.3536C31.5488 24.1583 31.5488 23.8417 31.3536 23.6464L28.1716 20.4645C27.9763 20.2692 27.6597 20.2692 27.4645 20.4645C27.2692 20.6597 27.2692 20.9763 27.4645 21.1716L30.2929 24L27.4645 26.8284C27.2692 27.0237 27.2692 27.3403 27.4645 27.5355C27.6597 27.7308 27.9763 27.7308 28.1716 27.5355L31.3536 24.3536ZM16 24.5H31V23.5H16V24.5Z" fill="white"/></svg></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.1" cx="24" cy="24" r="23.5" stroke="white"/><path d="M15.6464 23.6464C15.4512 23.8417 15.4512 24.1583 15.6464 24.3536L18.8284 27.5355C19.0237 27.7308 19.3403 27.7308 19.5355 27.5355C19.7308 27.3403 19.7308 27.0237 19.5355 26.8284L16.7071 24L19.5355 21.1716C19.7308 20.9763 19.7308 20.6597 19.5355 20.4645C19.3403 20.2692 19.0237 20.2692 18.8284 20.4645L15.6464 23.6464ZM16 24.5H31V23.5H16V24.5Z" fill="white"/></svg></button>',
    
    dots: true,
    infinite: false,
    fade: true,
  });


  // TABS
  $('.catalog-tabs__item').on('click', function (e){
    e.preventDefault();
    $('.catalog-tabs__item').removeClass('catalog-tabs__item--active');
    $(this).addClass('catalog-tabs__item--active');

    $('.catalog-tabs__content-item').removeClass
    ('catalog-tabs__content-item--active');
    $($(this).attr('href')).addClass('catalog-tabs__content-item--active');
    
  });
  // TABS
});