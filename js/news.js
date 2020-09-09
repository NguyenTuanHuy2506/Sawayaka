
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