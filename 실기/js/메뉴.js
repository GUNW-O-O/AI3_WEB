$(function() {
    // header1
    $('.header1 nav>ul>li').mouseenter(function(){
        $('.header1 .sub').stop().slideDown()
    })
    $('.header1 nav>ul>li').mouseleave(function(){
        $('.header1 .sub').stop().slideUp()
    })

    $('.header1 nav>ul>li').focusin(function(){
        $('.header1 .sub').stop().slideDown()
    })
    $('.header1 nav>ul>li:last-child').focusout(function(){
        $('.header1 .sub').stop().slideUp()
    })
    // header2
    $('navi>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
    })
    $('navi>ul>li').mouseleave(function(){
        $('navi .sub').stop().slideUp()
    })

    // menuBg
    $('nav3>ul>li').mouseenter(function(){
        $('nav3 .sub').stop().slideDown()
        $('.menuBg').stop().fadeIn()
    })
    $('nav3>ul>li').mouseleave(function(){
        $('nav3 .sub').stop().slideUp()
        $('.menuBg').stop().fadeOut()
    })

    //header4
    $('nav4>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
    })
    $('nav4>ul>li').mouseleave(function(){
        $('nav4 .sub').stop().slideUp()
    })
    // header5
    $('nav5>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
    })
    $('nav5>ul>li').mouseleave(function(){
        $('nav5 .sub').stop().slideUp()
    })
    // header 6
    $('nav6>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
        $('.menuBg2').stop().fadeIn()
    })
    $('nav6>ul>li').mouseleave(function(){
        $('nav6 .sub').stop().slideUp()
        $('.menuBg2').stop().fadeOut()
    })
    // header7 -- 메인과 서브를 분리해서 할것.
    // $('nav7>ul>li').mouseenter(function(){
    //     $('nav7 .sub').stop().slideDown()
    //     $('.menuBg7').stop().fadeIn()
    //     $('nav7 .sub').addClass('on')
    // })
    // $('nav7>ul>li').mouseleave(function(){
    //     $('nav7 .sub').stop().slideUp()
    //     $('.menuBg7').stop().fadeOut()
    //     $('nav7 .sub').removeClass('on')
    // })
    // $('nav8>ul>li').mouseenter(function(){
    //     $('navi8').stop().fadeIn()
    // })
    // $('nav8>ul>li').mouseleave(function(){
    //     $('navi8').stop().fadeOut()
    // })

    $('nav8 > ul > li').on('mouseenter', function () {
        $('navi8').stop().fadeIn();
    });

    $('.header8').on('mouseleave', function () {
        $('navi8').stop().fadeOut();
    });

})