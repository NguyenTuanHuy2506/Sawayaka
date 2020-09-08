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


var _stateNewsNav = $('.nav-page__state');
$('.nav-page__num').click(function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
        return false;
    } else{
        $('.nav-page__num').removeClass('active');
        $(this).addClass('active');
        let _currentNav = $(this).attr('data-state');
        _stateNewsNav.attr('data-state', _currentNav);
        let _s = _stateNewsNav.attr('data-total');
        _stateNewsNav.html(_currentNav+'/'+_s);
    }
});

$('.nav-page__next').click(function(e){
    e.preventDefault();
    let _currentState = _stateNewsNav.attr('data-state');
    let _totalState = _stateNewsNav.attr('data-total');
    
    if(_currentState < _totalState){
        let _next = parseInt(_currentState) + 1;
        $(".nav-page__num[data-state="+_next+"]").click();
    }
});