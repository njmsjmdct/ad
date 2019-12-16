$(function(){
    $('.nav-btn').click(function(){
        
        var btn = $('.nav-btn');
        
        btn.toggleClass('active');
        
        if(btn.hasClass('active')){
            $('.nav-btn span').animate({top:'45px'}, 300, function(){
            $('.nav-btn span').addClass('on');
            });
            $('.nav').css('transform', 'rotate(0deg)');
            $('.list ul li').addClass('on');
        }else{
            $('.nav-btn span.bar1').animate({top:'30px'}, 300, function(){
                $('.nav-btn span.bar1').removeClass('on');
                $('.nav-btn span.bar2').removeClass('on');
            });
            $('.nav-btn span.bar3').animate({top:'60px'}, 300, function(){
                $('.nav-btn span.bar3').removeClass('on');
            });
            $('.nav').css('transform', 'rotate(-90deg)');
            $('.list ul li').removeClass('on');
        }
    });
})