$(function() {
   const mainMenu = $('.main-menu > .menu-item')

   mainMenu.on('mouseover', function() {
      $('.sub-menu').stop().slideDown()
   }),
   mainMenu.on('mouseout', function() {
      $('.sub-menu').stop().slideUp()
   })


})