$(function (){
    $('nav>ul>li').mouseenter(function(){
        $('.sub').stop().slideDown()
    })
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().slideUp()
    })
    $('nav>ul>li').mouseenter(function(){
        $('.menuBg').stop().fadeIn()
    })
    $('nav>ul>li').mouseleave(function(){
        $('.menuBg').stop().fadeOut()
    })

    $('nav>ul>li').focusin(function(){
        $('.sub').slideDown()
    })
    $('nav>ul>li').focusin(function(){
        $(this).addClass('on')
    })
    $('nav>ul>li').focusout(function(){
        $(this).removeClass('on')
    })
    $('nav li:last-child li:last-child').focusout(function(){
        $('.sub').slideUp()
    })
    
    

    var i = 0
    function slide() {
        if ( i >= 2) {
            i = 0
        }
        else i ++
        $('.slides').animate({marginLeft:-1200*i},500)
    }
    setInterval(slide,2000)
    $('.popup').click(function(){
        $('.modal').show()
    })
    $('.btn').click(function(){
        $('.modal').hide()
    })




})