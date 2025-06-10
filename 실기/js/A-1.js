$(function() {
   $('nav>ul>li').mouseenter(function(){
      $('.sub').stop().slideDown()
   })
   $('nav>ul>li').mouseleave(function(){
      $('.sub').stop().slideUp()
   })
   $('nav>ul>li').focusin(function(){
      $('.sub').slideDown()
      $(this).addClass('active')
   })
   $('.sub li:last-child').focusout(function(){
      $('nav>ul>li').removeClass('active')
   })
   $('nav li:last-child li:last-child').focusout(function(){
      $('.sub').slideUp();
   })

   let i = 0
   function slide() {
      if(i >= 2) {
         i=0
      }else {
         i++
      }
      $('.img-slide .slides').animate({top:-300*i},500)
   }
   setInterval(slide,2000)

   $('.tab div').click(function(){
      $('.tab div').removeClass('active')
      $(this).addClass('active')
      var i = $(this).index()
      // $('.on').hide()
      if(i==0){
         $('.noticecon').addClass('on')
         $('.gallcon').removeClass('on')
      }
      else if (i==1) {
         $('.gallcon').addClass('on')
         $('.noticecon').removeClass('on')
      }
   })
   $('.popup').click(function(){
      $('.modal').show()
      return false
   })
   $('.btn').click(function(){
      $('.modal').hide()
   })

})