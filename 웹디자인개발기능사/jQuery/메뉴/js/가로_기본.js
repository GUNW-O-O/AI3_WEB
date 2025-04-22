$(function() {
    const mainMenu = $('.main-menu > .menu-item')

    // mainMenu.on('mouseover', function() {
    //     $(this).find('.submenu').stop().slideDown(1)
    // })
    // mainMenu.on('mouseout', function() {
    //     $(this).find('.submenu').stop().slideUp()
    // })


    mainMenu.hover(
        function() {
        $(this).find('.submenu').stop().slideDown(200)
        },
        function() {
        $(this).find('.submenu').stop().slideUp(200)
            }
        )
})