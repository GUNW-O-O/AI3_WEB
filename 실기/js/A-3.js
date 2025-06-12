$(function(){
    let i = 0
    function slide(){
        i = (i+1)%3

        $('.slide').fadeOut(550)
        $('.slide').eq(i).fadeIn(500)

    }
    setInterval(slide,2000)

    $('nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
    })
    $('nav>ul>li').focusin(function(){
        $(this).find('.sub').stop().slideDown()
        $(this).addClass('active')
    })
    
    $('nav li li:last-child').focusout(function(){
        $('.sub').slideUp()
        $('nav>ul>li').removeClass('active')
    })
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().slideUp()
    })

    $('.popup').click(function(){
        $('.modal').show()
        return false;
    })
    $('.btn').click(function(){
        $('.modal').hide()
    })
    let j = 0;
    $('.tab-box .tabcon').click(function(){
        $('.tabcon').removeClass('active')
        $(this).addClass('active')
        j = $(this).index()

        if(j==0){
            $('.gallcon').removeClass('on')
            $('.noticecon').show()
        }
        else if(j==1){
            $('.noticecon').hide()
            $('.gallcon').addClass('on')
        }

    })

})