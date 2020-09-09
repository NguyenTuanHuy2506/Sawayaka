$(function(){
    function toggle(eleTarget1, eleTarget2) {
        eleTarget1.on('click', function() {
            if(!$(this).is('.active')){
                $(this).addClass('active');
                eleTarget1.not(this).removeClass('active');
                $.each(eleTarget2, function() {
                    if(!$(this).is('.active')) {
                        $(this).addClass('active');
                    }else{
                        $(this).removeClass('active');
                    }
                })
            }
        })
    }
    toggle($('.map1 .btn-toggle'), $('.map1 .img-map'));
    toggle($('.map2 .btn-toggle'), $('.map2 .img-map'));
});