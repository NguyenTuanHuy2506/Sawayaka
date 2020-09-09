$('.js-equip-slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    prevArrow: '<button class="slick-prev" aria-label="Prev" type="button"></button>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },{
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
});

$('.js-mv-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false
});
