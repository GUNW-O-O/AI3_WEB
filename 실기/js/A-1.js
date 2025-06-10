$(function() {
   $('nav>ul>li').mouseenter(function(){
      $('.sub').stop().slideDown()
   })
   $('nav>ul>li').mouseleave(function(){
      $('.sub').stop().slideUp()
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
   })
   $('.btn').click(function(){
      $('.modal').hide()
   })

})